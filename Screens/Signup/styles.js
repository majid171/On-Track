import {StyleSheet, Dimensions} from 'react-native';

const INPUT_HEIGHT = 20;

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#4f6d7a',
        top: 0,
        height: Dimensions.get('window').height,
        alignItems: "center",
    },

    titleArea:{
        paddingTop: 30,
    },

    wrapper:{
        flex: 1,
    },

    title:{
        fontSize: 100,
        fontFamily: 'billabong',
        color: '#fff',
        textAlign: 'center',
    },

    in0:{
        top: 0,
        backgroundColor: 'white',
        width: '90%',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
    },

    in1:{
        top: 10,
        backgroundColor: 'white',
        width: '90%',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
    },

    in2:{
        top: INPUT_HEIGHT,
        backgroundColor: 'white',
        width: '90%',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'row',
    },

    showContainer:{
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 50,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },

    border:{
         height: 48,
         width: StyleSheet.hairlineWidth,
         backgroundColor: 'black'
    }, 

    image:{
        width: 40,
        height: 40,
        opacity: 1,
    },

    imageToggle:{
        width: 40,
        height: 40,
        opacity: .2,
    },

    input:{
        fontSize: 20,
        color: '#797979',
        paddingHorizontal: 5,
        flex: 1,
    },

    buttonArea:{
        top: 35,
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