import React, { Component } from 'React';
import s from './style';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import firebase from 'firebase';
import { Svg } from 'expo';
import TaskItem from '../../Components/TaskItem';
import Seperator from '../../Components/Seperator';
const { Circle, Rect } = Svg;
var taskList;


export default class ProjectPage extends Component {

    state = {
        loaded: false,
        projectName: null,
        currentUser: null,
        ref: null,
        refresh: false,
    }

    async componentDidMount() {
        await this.retreiveValuesFromLastScreen();
        await this.setState({ ref: firebase.database().ref('projects/' + this.state.currentUser.uid + '/' + this.state.projectName + '/') });
        await this.loadTasks();
        await this.setState({ loaded: true });
    }

    async componentWillUnmount() {
        await this.setState({ projectName: '', currentUser: null, ref: null, loaded: false });
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

    refreshState = async () => {
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
        await this.refreshState();
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

        var index = taskList.indexOf(taskName);
        taskList.splice(index, 1);
        await this.refreshState();
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

            var index = taskList.indexOf(taskName);
            taskList.splice(index, 1);
    
            taskList.push({
                key: taskName,
                done: newDone,
            });
        });

        await this.refreshState();
    }


    render() {
        if (this.state.loaded == true) {
            return (
                <View style={s.container}>
                    <StatusBar
                        backgroundColor='#4682B4'
                        barStyle='light-content'
                    />
                    <View style={s.header}>
                        <TouchableOpacity onPress={() => this.backPress()} style={s.backButtonArea}>
                            <Image style={{ width: 30, height: 50 }} source={require('../../assets/backButton.png')} />
                        </TouchableOpacity>
                        <Text style={s.headerText}>{this.state.projectName}</Text>
                    </View>
                    <View style={s.chartArea}>
                    </View>
                    <FlatList
                        data={taskList}
                        ItemSeparatorComponent={() => <Seperator></Seperator>}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => this.deleteTask(item.key)}>
                                <TaskItem name={item.key} checked={item.done} uid={this.state.currentUser.uid} press={() => this.toggle(item.key)}></TaskItem>
                            </TouchableOpacity>
                        )}
                        extraData={this.state.refresh}
                    />
                    <TouchableOpacity style={s.addButtonArea} onPress={() => this.addTask('Test')}>
                        <Text style={s.addText}>Add Task</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else {
            return (<View></View>);
        }

    }
}