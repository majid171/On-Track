import React, {Component} from 'React';
import s from './styles';
import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import Header from '../../Components/Header';

export default class Login extends Component{

    login = () => {
        alert('Logging in');
    };

    state = {
        loaded: false
    };

    render(){
        return(
            <View style={s.container}>
                <StatusBar 
                    backgroundColor='#4f6d7a'
                    barStyle='light-content'
                />
                <View style={s.titleArea}>
                    <Text style={s.title}>On Track</Text>
                </View>
                <View style={s.BottomContainer}>
                    <TouchableOpacity style={s.button} onPress={this.login}>
                        <View style={s.loginView}>
                            <Text style={s.buttonText}>Sign in with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>               
            </View>
        );
    }
}