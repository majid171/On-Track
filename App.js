import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Font} from 'expo';
import Loading from './Screens/Loading';
import Login from './Screens/Login';
import Item from './Components/ProjectItem';
import ProjectItem from './Components/ProjectItem';
import ProjectPage from './Screens/ProjectPage'
import Firebase from 'firebase';
import {DB} from './Helpers/config';
import Test from './Screens/Test';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

const AppSwitchNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  ProjectPage: ProjectPage
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  
  state = {
    loaded: false
  };

  componentWillMount(){
    this.loadAssets();
  }

  loadAssets = async () => {
    await Font.loadAsync({
      billabong: require('./assets/fonts/Billabong.ttf'),
      roboto: require('./assets/fonts/Roboto-Light.ttf'),
      roboto_medium: require('./assets/fonts/Roboto-Medium.ttf')
    });
    await this.setState({ loaded: true });
  };

  render() {
    if(this.state.loaded == true){
      return(
        <AppNavigator/>
      );
    }
    else{
      return(
        <View>
          <Text>Error</Text>
        </View>
      );
    }
    
  }
}