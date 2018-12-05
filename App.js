import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Header from './Components/Header';
import StatusBar from './Helpers/StatusBar';
import {Font} from 'expo';
import Loading from './Screens/Loading';
import SignUpLogin from './Screens/SignUpLogin';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

export default class App extends React.Component {
  
  state = {
    loaded: false
  };

  componentWillMount(){
    this.loadAssets();
  }

  loadAssets = async () => {
    await Font.loadAsync({
      billabong: require('./assets/fonts/Billabong.ttf')
    });
    await this.setState({ loaded: true });
  };

  render() {
    if(this.state.loaded == true){
      return(
        <View>
          <Signup />
        </View>
      );
    }
    else{
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    
  }
}