import { StyleSheet, Dimensions } from 'react-native';
import { statusBarHeight } from '../../Helpers/StatusBar';
import { colour } from '../../Helpers/config';
width = Dimensions.get('window').width;
const style = StyleSheet.create({

    container: {
        //alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: Dimensions.get('window').height / 9,
        backgroundColor: colour,
        alignItems: 'center'
    },

    headerTextArea: {
        paddingHorizontal: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexWrap: 'wrap',
    },

    headerText: {
        fontSize: 25,
        color: 'white',
    },

    backButtonArea: {
        //flex: 1,
        flexDirection: 'row',
        //alignSelf:'flex-start',
        alignItems: 'center',
        justifyContent: 'center',

        width: '17%',
        maxWidth: 90,
        maxHeight: 70,
        height: '50%',
        marginLeft: 5,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: colour,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },

    backButtonText: {
        fontSize: 15,
        color: 'white',
    },

    picArea: {
        // marginLeft: 300,
        //marginLeft: Dimensions.get('window').width / 1.3,
        marginRight: 5,
        //position: 'absolute',
    },

    pic: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 2,
    },

    chartArea: {
       // flexDirection: 'row',
        marginTop: 10,
        marginLeft: '5%',
        width: '90%',
        height: '27%',
        maxHeight: 190,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 1,
        shadowOffset: { width: 0, bottom: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowColor: '#000',
        marginBottom: 10,
        justifyContent:'center',
    },

    addTask: {
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        height: Dimensions.get('window').height / 13,
    },

    taskInput: {
        paddingLeft: 20,
        fontSize: 20,
    },

    checkBox: {
        right: 0,
        position: 'absolute',
        alignItems: 'flex-end',
    },

});

export default style;