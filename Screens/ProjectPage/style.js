import { StyleSheet, Dimensions } from 'react-native';
import { statusBarHeight } from '../../Helpers/StatusBar';
import { colour } from '../../Helpers/config';

const style = StyleSheet.create({

    container: {
        //alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: Dimensions.get('window').height / 9,
        backgroundColor: colour,
        alignItems:'center'
    },

    headerText:{
        fontSize: 50,
        fontFamily: 'billabong',
        color: 'white',
        position: 'absolute',
        justifyContent: 'center',
    },

    backButtonArea:{
        marginRight: Dimensions.get('window').width / 1.2,
    },

    chartArea:{
        width: '100%',
        height: Dimensions.get('window').height / 4.5,
        backgroundColor: '#FFFFF0',
    },
    
});

export default style;