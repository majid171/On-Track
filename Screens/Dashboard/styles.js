import {StyleSheet, Dimensions} from 'react-native';
import { statusBarHeight } from '../../Helpers/StatusBar';
import {colour} from '../../Helpers/config';

const styles = StyleSheet.create({

    container:{
        //alignItems: 'center',
        flex: 1,
        //justifyContent: 'center',
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
        width: '100%',
        height: '8%',
        backgroundColor: colour,
        alignItems: 'center',
        justifyContent: 'center',
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        
    },

    modal:{
        width: '80%',
        height: '15%',
        backgroundColor: '#FFFAFA',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        left: '10%',
        top: '25%',
        opacity: 0.9,
        borderColor: 'black',
        borderWidth: 1,
    },

    projInput:{
        width: '90%', 
        height: '60%',
        backgroundColor: '#FFFAFA',
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderBottomWidth: 2,
        textAlign:'center'
    },

    addBtnText:{
        color: 'white',
        fontSize: 20,
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