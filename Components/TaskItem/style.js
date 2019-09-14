import { StyleSheet, Dimensions } from 'react-native';
import { statusBarHeight } from '../../Helpers/StatusBar';
import { colour } from '../../Helpers/config';


const style = StyleSheet.create({

    container:{
        width: '100%',
        backgroundColor: 'white',
        alignItems:'center',
        flexDirection: 'row',
        //justifyContent: 'center',
        height: Dimensions.get('window').height / 13,
    },

    titleArea:{
        alignItems: 'flex-start',
        paddingLeft: 20,
    },

    titleText:{
        color: 'black',
        fontSize: 20,
    },  

    checkBox:{
        right: 0,
        position: 'absolute',
        alignItems: 'flex-end',
    },

    // checkBoxArea:{
    //     height: '100%',
    //     alignItems:'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'pink',
    //     right: 20,
    //     marginRight: 20,
    //     left: 200,
    // },
    
});

export default style;