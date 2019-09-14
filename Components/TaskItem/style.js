import { StyleSheet, Dimensions } from 'react-native';
import { statusBarHeight } from '../../Helpers/StatusBar';
import { colour } from '../../Helpers/config';


const style = StyleSheet.create({

    container:{
        width: '100%',
        backgroundColor: 'yellow',
        alignItems:'center',
        flexDirection: 'row',
        //justifyContent: 'center',
        height: Dimensions.get('window').height / 10.5,
    },

    titleArea:{
        alignItems: 'flex-start',
        left: 20,
    },

    titleText:{
        color: 'black',
        fontSize: 40,
    },  

    checkBox:{
        left: Dimensions.get('window').width / 1.6,
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