import React, {Component} from 'react';
import s from './styles';
import {View, Text} from 'react-native';
import Spinner from '../../Components/Spinner';
import StatusBar from '../../Helpers/StatusBar';
import Header from '../../Components/Header';
export default class Loading extends Component{


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
            </View>
        );
    }
}