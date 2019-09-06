import React, {Component} from 'react';
import s from './styles';
import {View, Text, ActivityIndicator} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import firebase from 'firebase';

export default class Loading extends Component{

    checkIfLoggedIn = () => {

        firebase.auth().onAuthStateChanged(function(user){
            
            if(user){
                this.props.navigation.navigate('Dashboard');
            }
            else{
                this.props.navigation.navigate('Login');
            }

        }.bind(this));
    };

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    render(){
        return(
            <View style={s.container}>
                <StatusBar
                    backgroundColor = {'#4682B4'}
                    barStyle= 'light-content'
                />
                <View style={s.titleArea}>
                    <Text style={s.title}>OnTrack</Text>
                    <ActivityIndicator size='large' color = 'fff'/>
                </View>
            </View>
        );
    }
}