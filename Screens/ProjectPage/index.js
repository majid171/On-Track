import React, { Component } from 'React';
import s from './style';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import firebase from 'firebase';
import { Svg } from 'expo';
const {Circle, Rect} = Svg;

export default class ProjectPage extends Component {

    state = {
        loaded: false,
        projectName: null,
        currentUser: null,
        ref: null,
    }

    async componentDidMount(){
        await this.retreiveValuesFromLastScreen();        
        await this.setState({loaded: true});
        await this.setState({ref: firebase.database().ref('projects/' + this.state.currentUser.uid + '/' + this.state.projectName + '/')});
    }

    async componentWillUnmount(){
        await this.setState({projectName: '', currentUser:null, ref: null, loaded: false});
    }
    
    retreiveValuesFromLastScreen = async() =>{
        const { navigation } = this.props;
        const name = navigation.getParam('projectName', 'NULL');
        const user = navigation.getParam('currentUser', 'NULL');
        await this.setState({projectName: name, currentUser: user});  
    }

    backPress = () =>{
        this.props.navigation.navigate('Dashboard');    
    }

    addTask = async(taskName) =>{

        await this.state.ref.once('value').then((snap) => {
            if(snap.child('tasks/').exists() == false){
                this.state.ref.child('tasks/' + taskName + '/').set({done: 0});
                var count = snap.child('taskCount').val();
                this.state.ref.update({taskCount : count + 1});
            }
            else{
                alert(taskName + ' already exists!');
            }
        });
    }

    deleteTask = async(taskName) =>{

        this.state.ref.once('value').then((snap) =>{
            var count = snap.child('taskCount').val();
            this.state.ref.update({taskCount: count - 1});
            this.state.ref.child('tasks/' + taskName).remove();

            var done = snap.child('tasks/' + taskName + '/done').val();

            if(done == 1){
                var completedCount = snap.child('taskCompletedCount').val();
                this.state.ref.update({taskCompletedCount: completedCount - 1});
            }
        })
    }

    checkOffTask = async(taskName) =>{
        this.state.ref.once("value").then((snapshot) =>{
            var count = snapshot.child('taskCompletedCount').val();
            this.state.ref.update({taskCompletedCount: count + 1});

            this.state.ref.child('/tasks/' + taskName).update({done: 1});
        })
    }
    

    render() {
        if(this.state.loaded == true){
            return (
                <View style={s.container}>
                    <StatusBar
                        backgroundColor='#4682B4'
                        barStyle='light-content'
                    />
                    <View style={s.header}>
                        <TouchableOpacity onPress={() => this.backPress()} style={s.backButtonArea}>
                            <Image style={{width: 30, height: 50}}source={require('../../assets/backButton.png')}/>
                        </TouchableOpacity>
                        <Text style={s.headerText}>{this.state.projectName}</Text>
                    </View>
                    <View style={s.chartArea}>
                        
                    </View>
                </View>
            );
        }
        else{
            return(<View></View>);
        }
        
    }
}