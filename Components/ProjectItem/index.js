import React, {Component} from 'react';
import s from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

function getPercent(){
    return 75;
}

navigate = () =>{
    alert('Navigating');
}

const ProjectItem = ({name, ...props}) => (
    <TouchableOpacity style={s.container} onPress={this.navigate}>
        <View style={s.nameArea}>
            <Text style={s.title}>{name}</Text>
        </View>
        <View style={getPercent() >= 75 ? s.percentArea4 : 
                    getPercent() >= 50 ? s.percentArea3 : 
                    getPercent() >= 25 ? s.percentArea2 : s.percentArea1}>
            <Text style={s.percentText}>{getPercent()}%</Text>
        </View>
    </TouchableOpacity>
);

ProjectItem.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ProjectItem;
