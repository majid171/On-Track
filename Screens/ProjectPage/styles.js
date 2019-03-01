import {StyleSheet, Dimensions} from 'react-native';
import { statusBarHeight } from '../../Helpers/StatusBar';


const styles = StyleSheet.create({


    container:{
        alignItems: 'center',
        height: Dimensions.get('window').height - statusBarHeight - 70,
        width: '100%',
    },

    scrollContainer:{
       //height: 0
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

    addBtnText:{
        color: 'white',
        fontSize: 20,
    },

});

export default styles;