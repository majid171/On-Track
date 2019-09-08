import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

    container:{
        width: '100%',
        top: 0,
        backgroundColor: '#4682B4',
        height: Dimensions.get('window').height / 9,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    title:{
        fontSize: 50,
        fontFamily: 'billabong',
        color: 'white',
        position: 'absolute',
        justifyContent: 'center',
    },

    picArea:{
        marginLeft: 300,
    },

    pic:{
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 2,
    },
    
});

export default styles;