import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

    container:{
        //position: 'absolute',
        width: '100%',
        top: 0,
        backgroundColor: '#4682B4',
        height: Dimensions.get('window').height / 9,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title:{
        fontSize: 50,
        fontFamily: 'billabong',
        color: 'white',
    },
    
});

export default styles;