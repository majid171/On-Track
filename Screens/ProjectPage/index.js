import React, { Component } from 'React';
import s from './style';
import { View, Text, TouchableOpacity, Image, FlatList, Keyboard, KeyboardAvoidingView, Button, TextInput } from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import firebase from 'firebase';
import TaskItem from '../../Components/TaskItem';
import Seperator from '../../Components/Seperator';
import { CheckBox } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';
//import { ProgressCircle } from 'react-native-svg-charts';
import Swiper from 'react-native-swiper';

var taskList;

export default class ProjectPage extends Component {

    state = {
        loaded: false,
        projectName: null,
        currentUser: null,
        ref: null,
        refresh: false,
        newTaskValue: '',
        scrollEnabled: true,
        i: 0,
    }

    signOut = () => {
        firebase.auth().signOut();
    }

    async componentDidMount() {
        taskList = [];
        await this.retreiveValuesFromLastScreen();
        await this.setState({ ref: firebase.database().ref('projects/' + this.state.currentUser.uid + '/' + this.state.projectName + '/') });
        await this.loadTasks();
        await this.setState({ loaded: true });

        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }

    _keyboardDidHide = () => {

        this.addTask(this.state.newTaskValue);
        this.setState({ newTaskValue: "" });
    }

    async componentWillUnmount() {
        await this.setState({ projectName: '', currentUser: null, ref: null, loaded: false });
        this.keyboardDidHideListener.remove();
    }

    retreiveValuesFromLastScreen = async () => {
        const { navigation } = this.props;
        const name = navigation.getParam('projectName', 'NULL');
        const user = navigation.getParam('currentUser', 'NULL');
        await this.setState({ projectName: name, currentUser: user });
    }

    backPress = () => {
        this.props.navigation.navigate('Dashboard');
    }

    refreshState = () => {
        this.setState({ refresh: !this.state.refresh });
    }

    addTask = async (taskName) => {

        await this.state.ref.once('value').then((snap) => {
            if (snap.child('tasks/' + taskName).exists() == false) {
                this.state.ref.child('tasks/' + taskName + '/').set({ done: 0 });
                var count = snap.child('taskCount').val();
                this.state.ref.update({ taskCount: count + 1 });
                taskList.push({
                    key: taskName,
                    title: taskName,
                    done: 0,
                });
            }
            else {
                alert(taskName + ' already exists!');
            }
        });

        this.refreshState();
    }

    deleteTask = async (taskName) => {

        await this.state.ref.once('value').then((snap) => {
            var count = snap.child('taskCount').val();
            this.state.ref.update({ taskCount: count - 1 });
            this.state.ref.child('tasks/' + taskName).remove();

            var done = snap.child('tasks/' + taskName + '/done').val();

            if (done == 1) {
                var completedCount = snap.child('taskCompletedCount').val();
                this.state.ref.update({ taskCompletedCount: completedCount - 1 });
            }
        });

        var index = taskList.findIndex(obj => obj.key === taskName);
        taskList.splice(index, 1);
        this.refreshState();
    }

    loadTasks = async () => {
        taskList = [];

        await this.state.ref.child('tasks/').once('value').then((snap) => {
            snap.forEach((snap2) => {
                var taskName = snap2.key;
                var done = snap2.child('done').val();

                taskList.push({
                    key: taskName,
                    done: done,
                });
            })
        });
    }

    toggle = async (taskName) => {

        await this.state.ref.once("value").then((snapshot) => {

            var done = snapshot.child('tasks/' + taskName + '/done').val();
            var taskCompletedCount = snapshot.child('taskCompletedCount').val();
            var newDone;
            var newTaskCompletedCount;
            if (done == 0) {
                newDone = 1;
                newTaskCompletedCount = taskCompletedCount + 1;
            }
            else {
                newDone = 0;
                newTaskCompletedCount = taskCompletedCount - 1;
            }

            this.state.ref.update({ taskCompletedCount: newTaskCompletedCount });
            this.state.ref.child('/tasks/' + taskName).update({ done: newDone });

            var index = taskList.findIndex(obj => obj.key === taskName);
            taskList[index].done = newDone;
        });

        this.refreshState();
    }

    updateTaskText = (val) => {
        this.setState({ newTaskValue: val });
    }

    _allowScroll = (scrollEnabled) => {
        this.setState({ scrollEnabled: scrollEnabled })
    }

    render() {
        if (this.state.loaded == true) {
            //console.log(taskList);
            return (
                <View style={s.container}>
                    <StatusBar
                        backgroundColor='#4682B4'
                        barStyle='light-content'
                    />
                    <View style={s.header}>
                        <TouchableOpacity onPress={() => this.backPress()} style={s.backButtonArea}>
                            <Text style={s.backButtonText}>Back</Text>
                        </TouchableOpacity>
                        <View style={s.headerTextArea}>
                            <Text style={s.headerText}>{this.state.projectName}</Text>
                        </View>
                        <TouchableOpacity style={s.picArea} onPress={() => this.signOut()}>
                            <Image style={s.pic} source={{ uri: this.state.currentUser.photoURL }} />
                        </TouchableOpacity>
                    </View>
                    <View style={s.chartArea}>
                        {/* <ProgressCircle
                            style={{ height: 100, }}
                            progress={0.7}
                            progressColor={'blue'}
                        /> */}
                        {/* <Text>70%</Text> */}
                        <Swiper>
                            <View><Text>Hello World</Text></View>
                            <View><Text>Bye World</Text></View>
                        </Swiper>
                    </View>


                    <KeyboardAvoidingView behavior={'padding'} enabled>
                        <FlatList
                            scrollEnabled={this.state.scrollEnabled}
                            data={taskList}
                            ItemSeparatorComponent={() => <Seperator></Seperator>}
                            renderItem={({ item }) => (
                                <Swipeout
                                    sensitivity={50}
                                    backgroundColor={'red'}
                                    left={[{
                                        onPress: () => this.deleteTask(item.key),
                                        text: 'Delete', type: 'delete',
                                        backgroundColor: 'red',
                                        color: 'white',
                                    }]}
                                    autoClose={true}
                                    scroll={event => { this._allowScroll(event) }}
                                >
                                    <View>
                                        <TaskItem name={item.key} checked={item.done} uid={this.state.currentUser.uid} press={async () => this.toggle(item.key)}></TaskItem>
                                    </View>
                                </Swipeout>
                            )}
                            extraData={this.state.refresh}
                        />
                        <Seperator></Seperator>
                        <View style={s.addTask}>
                            <TextInput style={s.taskInput} placeholder={'Add Task'} autoFocus={false} keyboardAppearance={'dark'}
                                returnKeyType={'done'} onChangeText={this.updateTaskText} defaultValue={this.state.newTaskValue}>
                            </TextInput>
                            <CheckBox
                                containerStyle={s.checkBox}
                                center={true}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                size={20}
                                checked={false}
                            />
                        </View>
                    </KeyboardAvoidingView>

                </View>
            );
        }
        else {
            return (<View></View>);
        }
    }
}