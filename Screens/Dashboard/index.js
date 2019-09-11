import React, { Component } from 'React';
import s from './styles';
import { View, Text, ScrollView, TouchableOpacity, Keyboard, TextInput, Modal} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import Header from '../../Components/Header';
import ProjectItem from '../../Components/ProjectItem';
import Seperator from '../../Components/Seperator';
import firebase from 'firebase';

var currentUser;
var projectList;
var isMounted = false;
export default class ProjectPage extends Component {

    state = {
        loaded: false,
        modalVisible: false,
        value: "",
    };


    loadUser = async () => {
        console.log('Func called');
        projectList = [];
        await firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                currentUser = user;
            } else {
                console.log('Null');
            }
        });

        var query = firebase.database().ref("projects/" + currentUser.uid).orderByKey();
        await query.once("value")
            .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                    var projectName = childSnapshot.key;
                    var projectPercent = snapshot.child(projectName + '/percentComplete').val();

                    projectList.push(
                        <View key={projectName} style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <ProjectItem name={projectName} percent={projectPercent}></ProjectItem>
                            <Seperator></Seperator>
                        </View>

                    );
                });
                this.setState({ loaded: true });
            });


       
    }

    updateText = async(val) =>{
        await this.setState({value: val});
    }

    componentDidMount() {
        isMounted = true;
        currentUser = null;

        if(isMounted == true){
            this.loadUser();

            this.keyboardDidHideListener = Keyboard.addListener(
                'keyboardDidHide',
                this._keyboardDidHide,
            );
        }  
    }

    componentWillUnmount(){
        isMounted = false;
        this.keyboardDidHideListener.remove();        
        this.setState({loaded: false, value: "", modalVisible: false});
    }

    toggleModal = (check) =>{
        this.setState({modalVisible: check});
    }

    addProject = async (proj) => {
        var ref = firebase.database().ref("projects/" + currentUser.uid + '/' + proj);
        await ref.once("value")
          .then(function(snapshot) {
            if(snapshot.exists()){
                alert(proj + ' already exists!');
                return;
            }
            firebase.database().ref('projects/' + currentUser.uid + '/' + proj).set({
                percentComplete: 0,
            });
                
        });
       await this.loadUser(); 
    }

   
    _keyboardDidHide = () =>{
        this.toggleModal(false);

        this.addProject(this.state.value);
        this.setState({value: ""});
    }

    render() {
        if (this.state.loaded == true) {

            return (
                <View style={s.container}>
                    <StatusBar
                        backgroundColor='#4682B4'
                        barStyle='light-content'
                    />
                    <Header></Header>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={s.projectsArea}>
                            {projectList}
                        </View>
                    </ScrollView>
                    <TouchableOpacity onPress={() => this.toggleModal(true)} style={s.button}>
                        <Text style={s.addBtnText}>Add Project</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType= 'slide'
                        visible={this.state.modalVisible}
                        transparent={true}
                        >
                        <View style={s.modal}>
                            <TextInput style={s.projInput} placeholder={'Project Name'} autoFocus={true} keyboardAppearance={'dark'}
                            returnKeyType={'done'} onChangeText={this.updateText} defaultValue={this.state.value}
                            ></TextInput>
                        </View>
                        
                    </Modal>
                </View>
            );
        }
        else {
            return (<View></View>);
        }

    }
}