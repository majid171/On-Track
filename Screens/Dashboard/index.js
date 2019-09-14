import React, { Component } from 'React';
import s from './styles';
import { View, Text, ScrollView, TouchableOpacity, Keyboard, TextInput, Modal, FlatList, TouchableHighlight } from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import Header from '../../Components/Header';
import ProjectItem from '../../Components/ProjectItem';
import Seperator from '../../Components/Seperator';
import firebase from 'firebase';
import Swipeout from 'react-native-swipeout';

var currentUser;
var projectList;
var isMounted = false;

export default class Dashboard extends Component {

    state = {
        loaded: false,
        modalVisible: false,
        value: "",
    };

    loadUser = async () => {
        projectList = [];
        await firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                currentUser = user;
            } else {
                console.log('Null');
            }
        });

        var query = firebase.database().ref("projects/" + currentUser.uid).orderByKey();
        await query.once("value")
            .then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    var projectName = childSnapshot.key;
                    var taskCount = snapshot.child(projectName + '/taskCount').val();
                    var taskCompletedCount = snapshot.child(projectName + '/taskCompletedCount').val();

                    var projectPercent = taskCount == 0 ? 0 : (taskCompletedCount / taskCount) * 100;

                    projectList.push({
                        key: projectName,
                        title: projectName,
                        percent: projectPercent,
                        uid: currentUser.uid,
                    });
                });
                this.setState({ loaded: true });
            });
    }

    _onPress = async (item) => {
        this.props.navigation.navigate('ProjectPage', { projectName: item.title, currentUser: currentUser });
    }


    updateText = async (val) => {
        await this.setState({ value: val });
    }

    componentDidMount() {
        isMounted = true;
        currentUser = null;

        if (isMounted == true) {
            this.loadUser();

            this.keyboardDidHideListener = Keyboard.addListener(
                'keyboardDidHide',
                this._keyboardDidHide,
            );
        }
    }

    componentWillUnmount() {
        isMounted = false;
        this.keyboardDidHideListener.remove();
        this.setState({ loaded: false, value: "" });
        this.toggleModal(false);
    }

    toggleModal = (check) => {
        this.setState({ modalVisible: check });
    }

    addProject = async (proj) => {
        var ref = firebase.database().ref("projects/" + currentUser.uid + '/' + proj);
        await ref.once("value")
            .then(function (snapshot) {
                if (snapshot.exists()) {
                    alert(proj + ' already exists!');
                    return;
                }
                firebase.database().ref('projects/' + currentUser.uid + '/' + proj).set({
                    uid: currentUser.uid,
                    taskCount: 0,
                    taskCompletedCount: 0,
                });
            });
            await this.loadUser();
    }


    _keyboardDidHide = () => {
        this.toggleModal(false);

        this.addProject(this.state.value);
        this.setState({ value: "" });
    }

    deleteItem = async (item) => {
        await firebase.database().ref('projects/' + item.uid + '/' + item.title).remove();
        await this.loadUser();
        //projectList.filter(item => item.key !== item.key);
    }

    render() {
        if (this.state.loaded == true) {
            return (
                <View style={s.container}>
                    <StatusBar
                        backgroundColor='#4682B4'
                        barStyle='light-content'
                    />
                    <Header></Header>
                    <FlatList
                        data={projectList}
                        ItemSeparatorComponent={() => <Seperator></Seperator>}
                        renderItem={({ item }) => (
                            <Swipeout
                                sensitivity={50}
                                backgroundColor={'red'}
                                left={[{
                                    onPress: () => this.deleteItem(item),
                                    text: 'Delete', type: 'delete',
                                    backgroundColor: 'red',
                                    color: 'white',
                                }]}
                                autoClose={true}
                            >
                                <TouchableOpacity onPress={() => this._onPress(item)} activeOpacity={1}>
                                    <ProjectItem name={item.title} percent={item.percent} uid={item.uid}></ProjectItem>
                                </TouchableOpacity>
                            </Swipeout>

                        )}
                    />
                    <TouchableOpacity onPress={() => this.toggleModal(true)} style={s.button}>
                        <Text style={s.addBtnText}>Add Project</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType='slide'
                        visible={this.state.modalVisible}
                        transparent={true}
                    >
                        <View style={s.modal}>
                            <TextInput style={s.projInput} placeholder={'Project Name'} autoFocus={true} keyboardAppearance={'dark'}
                                returnKeyType={'done'} onChangeText={this.updateText} defaultValue={this.state.value}
                            ></TextInput>
                        </View>

                    </Modal>
                </View>
            );
        }
        else {
            return (<View></View>);
        }

    }
}