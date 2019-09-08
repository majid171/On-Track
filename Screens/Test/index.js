import React, {Component} from 'React';
import s from './styles';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import firebase from 'firebase';
import {DB} from '../../Helpers/config';

var currentUser = null;

export default class Test extends Component{
    
    state = {
        loaded: false  
    };

    loadUser = async () =>{
        await firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // firebase.database().ref('users/' + user.uid).on('value', function (snapshot) {
                //     snap = snapshot.val();
                // });
                currentUser = user;
            } else {
                console.log('Null');
            }
        });
        await this.setState({ loaded: true });
    }

    componentWillMount(){
        this.loadUser();
    }
    
    press = () =>{
        console.log(currentUser.photoUrl);
    }

    render(){
        if(this.state.loaded == true){
            return(
                <View style={s.container}>
                    <TouchableOpacity onPress={() => this.press()}>
                        <Image 
                            style={{width: 100, height: 100, borderRadius: 50}}
                            source = {{uri: "https://lh3.googleusercontent.com/a-/AAuE7mA0L7-MiqVx6rjtdcFHEz1d3mcUM5eXolmbp0vaiw=s96-c"}}
                        />
                    </TouchableOpacity>
                </View>
            );
        }
        else{
            return <View></View>
        }
        
    }
}