import React, {Component} from 'React';
import s from './styles';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import firebase from 'firebase';
import {DB} from '../../Helpers/config';

export default class Test extends Component{


    componentWillMount(){
        this.app = firebase.initializeApp(DB);
        this.data = this.app.database().ref('Users/1').set({
            FirstName: 'Majid',
            LastName: 'Joseph',
            UserName: 'Admin',
            Password: 'Admin'
        });
    }


    render(){
        return(
            <View style={s.container}>
                <StatusBar
                    backgroundColor = {'#4f6d7a'}
                    barStyle= 'light-content'
                />
                <Text>Hello World</Text>
            </View>
        );
    }
}