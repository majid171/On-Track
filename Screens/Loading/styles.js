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
});

export default styles;