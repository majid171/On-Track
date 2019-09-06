import React, {Component} from 'React';
import s from './styles';
import {View, Text, ScrollView, TouchableHighlight, Image} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import Header from '../../Components/Header';
import ProjectItem from '../../Components/ProjectItem';

export default class ProjectPage extends Component{


    state = {
        isScrolling: false
    }

    add = () =>{

    }

    _onScrollBeginDrag = (event) =>{
        this.setState({isScrolling: true});
    }

    _onScrollEndDrag = (event) =>{
        this.setState({isScrolling: false});
    }

    render(){
        return(
            <View style={s.container}>
                <StatusBar 
                    backgroundColor='#4682B4'
                    barStyle='light-content'
                /> 
                <Header></Header>
                <View style={s.projectsArea}>
                    <ProjectItem name={'OnTrack'}/>
                    <ProjectItem name={'OnTrack'}/>
                    <ProjectItem name={'OnTrack'}/>
                    <ProjectItem name={'OnTrack'}/>
                    <ProjectItem name={'OnTrack'}/>
                    <ProjectItem name={'OnTrack'}/>
                    <ProjectItem name={'OnTrack'}/>
                    <ProjectItem name={'OnTrack'}/>
                    <ProjectItem name={'OnTrack'}/>

                </View>
            </View>
        );
    }
}