import {StyleSheet, Dimensions} from 'react-native';
import { statusBarHeight } from '../../Helpers/StatusBar';
import { black } from 'ansi-colors';


const styles = StyleSheet.create({

    container:{
        //alignItems: 'center',
        flex: 1,
    },

    projectsArea:{
        alignItems: 'center',
    },

    newProjectArea:{
        alignItems: 'center',
        backgroundColor: 'pink',
        height: '7%',
        justifyContent: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,

    },

    button:{
        // backgroundColor: 'pink',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        color: 'pink',
    },

    addBtnNotScrolling:{
        width: '100%',
        height: '8%',
        bottom: 0,
        //marginBottom: 150,
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },

    addBtnScrolling:{
      height : 0,  
    },

});

export default styles;