import React, {Component} from 'react';
import {View, Text, Animated, Image} from 'react-native';

export default class Spinner extends Component{
    
    constructor(props){
        super(props);

        this.loadingSpin = new Animated.Value(0);
    }

    spinAnimation(){
        this.loadingSpin.setValue(0);

        Animated.sequence([
            Animated.timing(
                this.loadingSpin,
                {
                    toValue: 1,
                    duration: 1200
                }
            )
        ]).start(() => this.spinAnimation());
    }

    componentDidMount(){
        this.spinAnimation();
    }
    
    render(){
        
        const spin = this.loadingSpin.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        return(
            <View>
                <Animated.Image style={{ transform: [{rotate: spin}]}} source={require('../../assets/loadingSymbol.png')}/>
            </View>
        );
    }
}