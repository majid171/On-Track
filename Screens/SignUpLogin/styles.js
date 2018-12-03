import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#4f6d7a',
        height: Dimensions.get('window').height,
    },

    titleArea:{
        paddingTop: 150,
    },

    title:{
        fontSize: 100,
        fontFamily: 'billabong',
        color: '#fff',
        textAlign: 'center',
    },

    buttons:{
        flexDirection: 'row',
        paddingTop: 200,
        justifyContent: 'center',
    },

    button1:{
        padding: 20,
    },

    button2:{
        padding: 20,
    },

    login:{
        backgroundColor: '#fff',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    signup:{
        backgroundColor: '#fff',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    buttonText:{
        color: '#4f6d7a',
        fontSize: 30,
        textAlign: 'center',
    },
});

export default styles;