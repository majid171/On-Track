import React, {Component} from 'React';
import s from './styles';
import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import Header from '../../Components/Header';

export default class Login extends Component{

    login = () => {
        alert('Logging in');
    };

    render(){
        return(
            <View style={s.outerContainer}>
                <StatusBar
                    backgroundColor = {'#4f6d7a'}
                    barStyle= 'light-content'
                />
                <View style={s.middleContainer}>
                    <Header/>
                    <View style={s.innerContainer}>
                        <View style={s.fields}>
                            <TextInput style={s.input}/>
                            <TextInput style={s.input}/>
                        </View>
                        {/* <TouchableOpacity style={s.buttonArea} onPress={this.login}>
                            <View style={s.login}>
                                <Text style={s.buttonText}>Login</Text>
                            </View>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
        );
    }
}