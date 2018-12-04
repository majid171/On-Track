import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#4f6d7a',
        top: 0,
        height: Dimensions.get('window').height,
        alignItems: "center",
    },

    titleArea:{
        paddingTop: 50,
    },

    title:{
        fontSize: 100,
        fontFamily: 'billabong',
        color: '#fff',
        textAlign: 'center',
    },

    in1:{
        top: 20,
        backgroundColor: 'white',
        width: '80%',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
    },

    in2:{
        top: 45,
        backgroundColor: 'white',
        width: '80%',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
    },

    input:{
        fontSize: 30,
        color: '#797979',
        paddingHorizontal: 5,
    },

    buttonArea:{
        top: 100,
        // paddingTop: 20,
    },

    button:{
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