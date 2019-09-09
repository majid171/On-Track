import React, {Component} from 'react';
import s from './styles';
import {View, Text, ActivityIndicator} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import firebase from 'firebase';
import {title, colour} from './../../Helpers/config';

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
                    backgroundColor = {colour}
                    barStyle= 'light-content'
                />
                <View style={s.titleArea}>
                    <Text style={s.title}>{title}</Text>
                    <ActivityIndicator size='large' color = 'fff'/>
                </View>
            </View>
        );
    }
}