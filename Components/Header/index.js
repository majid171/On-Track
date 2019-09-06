import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import s from './styles';
export default class Header extends Component{
    
    render(){
        return(
            <View style={s.container}>
                <Text style={s.title}>OnTrack</Text>
            </View>
        );
    }
}