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

});

export default styles;