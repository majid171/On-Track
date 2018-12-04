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
                <View style={s.in1}>
                    <TextInput style = {s.input} 
                        placeholder='Username'
                        autoCapitalize="none" 
                        autoCorrect = {false}
                    />
                </View>
                <View style={s.in2}>
                    <TextInput style = {s.input} 
                        placeholder='Password'
                        autoCapitalize="none" 
                        autoCorrect = {false}
                    />
                </View>
                <TouchableOpacity style={s.buttonArea} onPress={this.login}>
                        <View style={s.button}>
                            <Text style={s.buttonText}>Login</Text>
                        </View>
                </TouchableOpacity>
            </View>
        );
    }
}