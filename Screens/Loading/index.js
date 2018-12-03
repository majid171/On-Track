import React, {Component} from 'react';
import s from './styles';
import {View} from 'react-native';
import Spinner from '../../Components/Spinner';
import StatusBar from '../../Helpers/StatusBar';
import Header from '../../Components/Header';
export default class Loading extends Component{


    render(){
        return(
            <View style={s.outerContainer}>
                <StatusBar
                    backgroundColor = {'#4f6d7a'}
                    barStyle= 'light-content'
                />
                <View style={s.innerContainer}>
                        <Header />
                    <View style={s.spinArea}>
                        <Spinner />
                    </View>
                    
                </View>
        </View>
        );
    }
}