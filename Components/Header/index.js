import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import s from './styles';
import firebase from 'firebase';
import {title} from '../../Helpers/config';

var currentUser = null;

export default class Header extends Component{
    
    state = {
        loaded: false  
    };

    loadUser = async () =>{
        await firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                currentUser = user;
            } else {
                console.log('Null');
            }
          });

        await this.setState({ loaded: true });
    }

    componentWillMount(){
        this.loadUser();
    }

    press = () => {
        console.log('Signed out!');
        firebase.auth().signOut();
    }

    render(){
        
        if(this.state.loaded == true){
            return(
                <View style={s.container}>
                    <Text style={s.title}>{title}</Text>
                    <TouchableOpacity style={s.picArea} onPress={() => this.press()}>
                        <Image style={s.pic} source={{ uri: currentUser.photoURL}}/>
                    </TouchableOpacity>
                </View>
            );
        }
        else{
            return <View></View>
        }
    }
}