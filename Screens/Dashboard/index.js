import React, {Component} from 'React';
import s from './styles';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import Header from '../../Components/Header';
import ProjectItem from '../../Components/ProjectItem';
import Seperator from '../../Components/Seperator';
import firebase from 'firebase';

var currentUser = null;

export default class ProjectPage extends Component{

    componentWillMount(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                firebase.database().ref('users/' + user.uid).on('value', function (snapshot) {
                    currentUser = snapshot.val();
                });
                
            } else {
                console.log('Null');
            }
          });
        
    }

    temp = () =>{
        console.log(currentUser.firstName);
    }

    render(){
        return(
            <View style={s.container}>
                <StatusBar 
                    backgroundColor='#4682B4'
                    barStyle='light-content'
                /> 
                <Header></Header>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={s.projectsArea}>
                        <ProjectItem name={'OnTrack'}/>
                        <Seperator></Seperator>
                        <ProjectItem name={'OnTrack'}/>
                        <Seperator></Seperator>
                        <ProjectItem name={'OnTrack'}/>
                        <Seperator></Seperator>
                        <ProjectItem name={'OnTrack'}/>
                        <Seperator></Seperator>
                        <ProjectItem name={'OnTrack'}/>
                        <Seperator></Seperator>
                        <ProjectItem name={'OnTrack'}/>
                        <Seperator></Seperator>
                        <ProjectItem name={'OnTrack'}/>
                        <Seperator></Seperator>
                        <ProjectItem name={'OnTrack'}/>
                        <Seperator></Seperator>
                        <ProjectItem name={'OnTrack'}/>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => this.temp()} style={s.newProjectArea}><Text>New Project</Text></TouchableOpacity>
            </View>
        );
    }
}