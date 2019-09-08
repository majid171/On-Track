import React, {Component} from 'react';
import s from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';

function getPercent(){
    return 0;
}

navigate = () =>{
    alert('Pressed');
}

const ProjectItem = ({name, ...props}) => (
    <TouchableOpacity style={s.container} onPress={this.navigate}>
        <View style={s.nameArea}>
            <Text style={s.title}>{name}</Text>
        </View>
        <View style={getPercent() >= 80 ? s.percentArea5 : 
                    getPercent() >= 60 ? s.percentArea4 : 
                    getPercent() >= 40 ? s.percentArea3 : 
                    getPercent() >= 20 ? s.percentArea2 :
                    s.percentArea1}>
            <Text style={s.percentText}>{getPercent()}%</Text>
        </View>
    </TouchableOpacity>
);

ProjectItem.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ProjectItem;
