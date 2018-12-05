import React, {Component} from 'React';
import s from './styles';
import {View, Text, Button, TouchableOpacity, TextInput, Image, KeyboardAvoidingView} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import Header from '../../Components/Header';

export default class Login extends Component{

    signup = () => {
        alert('signing up');
    };

    state = {
        passShown: false,
    };

    show = () => {
        if(this.state.passShown == false){
            this.setState({ passShown: true });
        }
        else{
            this.setState({ passShown: false });
        }
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
                <View style={s.in0}>
                <TextInput style = {s.input} 
                        placeholder='Name' 
                        autoCorrect = {false}
                        autoFocus = {true}
                    />
                </View>                
                <View style={s.in1}>
                    <TextInput style = {s.input} 
                        placeholder='Username'
                        autoCapitalize="none" 
                        autoCorrect = {false}
                    />
                </View>
                <View style={s.in2}>
                    <TextInput style={s.input}
                        placeholder='Password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry = {this.state.passShown == true ? false : true}
                    />
                    <View style={s.border}/>
                    <TouchableOpacity onPress={this.show} style={s.showContainer}>
                        <Image source={require('../../assets/show.png')} style={this.state.passShown == true ? s.image : s.imageToggle}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={s.buttonArea} onPress={this.signup}>
                        <View style={s.button}>
                            <Text style={s.buttonText}>Sign Up</Text>
                        </View>
                </TouchableOpacity>
            </View>
        );
    }
}