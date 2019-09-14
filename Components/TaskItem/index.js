import React, { Component } from 'react';
import s from './style';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';

const TaskItem = ({ name, checked, uid, press, ...props }) => (
    <View style={s.container}>
        <View style={s.titleArea}>
            <Text style={s.titleText}>{name}</Text>
        </View>
        <CheckBox
            containerStyle={s.checkBox}
            center={true}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            size={20}
            checked={checked == 1 ? true : false}
            onPress={press}
        />
    </View>
);

TaskItem.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.number.isRequired,
    uid: PropTypes.string.isRequired,
    press: PropTypes.func.isRequired,
};

export default TaskItem;
