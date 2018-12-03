import React, {Component} from 'React';
import s from './styles';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';

export default class SignUpLogin extends Component{


    handleLogin = () => {
        alert('Future button that will let you login');
    };

    handleSignup = () => {
        alert('Future button that will let you signup');
    };

    render(){
        return(
            <View style={s.container}>
                <StatusBar
                    backgroundColor = {'#4f6d7a'}
                    barStyle= 'light-content'
                />
                <View style={s.titleArea}>
                    <Text style={s.title}>On Track</Text>
                </View>
                <View style={s.buttons}>
                    <TouchableOpacity style={s.button1} onPress={this.handleLogin}>
                        <View style={s.login}>
                            <Text style={s.buttonText}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={s.button2} onPress={this.handleSignup}>
                        <View style={s.signup}>
                            <Text style={s.buttonText}>Sign up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}