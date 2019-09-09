import React, { Component } from 'React';
import s from './styles';
import { View, Text, ScrollView, TouchableHighlight, Image, Button } from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import Header from '../../Components/Header';
import ProjectItem from '../../Components/ProjectItem';
import Seperator from '../../Components/Seperator';
import firebase from 'firebase';

var currentUser = null;
var projectList = [];
export default class ProjectPage extends Component {

    state = {
        loaded: false,
    };


    loadUser = async () => {
        await firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                currentUser = user;
            } else {
                console.log('Null');
            }
        });


        var query = firebase.database().ref("projects/" + currentUser.uid).orderByKey();
        await query.once("value")
            .then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var projectName = childSnapshot.key;
                    var projectPercent = snapshot.child(projectName + '/percentComplete').val();

                    projectList.push(
                        <View key={projectName} style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <ProjectItem name={projectName} percent={projectPercent}></ProjectItem>
                            <Seperator></Seperator>
                        </View>

                    );
                });
            });


        await this.setState({ loaded: true });
    }

    componentWillMount() {
        this.loadUser();
    }

    componentWillUnmount(){
        projectList = [];
        currentUser = null;
    }

    addProject = () => {
    
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
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={s.projectsArea}>
                            {projectList}
                        </View>
                    </ScrollView>
                    <TouchableHighlight onPress={() => this.addProject()}>
                        <Text style={s.addBtnText}>Add a new task</Text>
                    </TouchableHighlight>
                </View>
            );
        }
        else {
            return (<View></View>);
        }

    }
}