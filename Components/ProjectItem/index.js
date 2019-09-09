import React, {Component} from 'react';
import s from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';

navigate = () =>{
    alert('Pressed');
}

const ProjectItem = ({name, percent, ...props}) => (
    <TouchableOpacity style={s.container} onPress={this.navigate}>
        <View style={s.nameArea}>
            <Text style={s.title}>{name}</Text>
        </View>
        <View style={percent >= 80 ? s.percentArea5 : 
                    percent >= 60 ? s.percentArea4 : 
                    percent >= 40 ? s.percentArea3 : 
                    percent >= 20 ? s.percentArea2 :
                    s.percentArea1}>
            <Text style={s.percentText}>{percent}%</Text>
        </View>
    </TouchableOpacity>
);

ProjectItem.propTypes = {
    name: PropTypes.string.isRequired,
    percent:  PropTypes.number.isRequired,
};

export default ProjectItem;
