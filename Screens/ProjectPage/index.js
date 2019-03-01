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
            <View>
                <StatusBar 
                    backgroundColor='#4f6d7a'
                    barStyle='light-content'
                /> 
                <Header></Header>
                <View style={s.container}>
                    <ScrollView style={s.scrollContainer}
                    onScrollBeginDrag={this._onScrollBeginDrag}
                    onScrollEndDrag={this._onScrollEndDrag}
                    >
                        <ProjectItem
                            name={'School'}
                        />
                        <ProjectItem
                            name={'School'}
                        />
                        <ProjectItem
                            name={'School'}
                        />
                        <ProjectItem
                            name={'School'}
                        />
                        <ProjectItem
                            name={'School'}
                        />
                        <ProjectItem
                            name={'School'}
                        />
                        <ProjectItem
                            name={'School'}
                        />
                        <ProjectItem
                            name={'School'}
                        />
                        <ProjectItem
                            name={'School'}
                        />
                        <ProjectItem
                            name={'School'}
                        />
                    </ScrollView>
                    <TouchableHighlight onPress={this.add} style={this.state.isScrolling ? s.addBtnScrolling : s.addBtnNotScrolling}>
                        <Text style={s.addBtnText}>Add a new task</Text>
                    </TouchableHighlight>
                </View>     
            </View>
        );
    }
}