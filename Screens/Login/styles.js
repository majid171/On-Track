import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

    outerContainer:{
        
    },

    middleContainer:{
        
    },

    innerContainer:{
        top : 70,
        backgroundColor: 'white',
        height: Dimensions.get('window').height - 70,
        alignItems: 'center',
    },

    buttonArea:{
        backgroundColor: 'blue',
        top: 400,
    },

    login:{
        backgroundColor: '#9EAEB4',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10, 
    },

    buttonText:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },

    fields:{

    },

    input:{
        color: 'black',
        height: 50,
        width: 50,
        backgroundColor: 'black'
    },

});

export default styles;