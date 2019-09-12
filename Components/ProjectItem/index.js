import React, { Component } from 'react';
import s from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';

navigate = (name, percent, uid) => {
    //firebase.database().ref('projects/' + uid + '/' + name).remove();
}

//<View style={s.container} >onPress={() => this.navigate(name, percent, uid)}>

const ProjectItem = ({ name, percent, uid, ...props }) => (
    <View style={s.container} >
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
    </View>
);

ProjectItem.propTypes = {
    name: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    uid: PropTypes.string.isRequired,
};

export default ProjectItem;
