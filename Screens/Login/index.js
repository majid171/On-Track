import React, { Component } from 'React';
import s from './styles';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import StatusBar from '../../Helpers/StatusBar';
import Header from '../../Components/Header';
import * as Expo from 'expo';
import * as Google from 'expo';
import firebase from 'firebase';
import {DB} from '../../Helpers/config';

export default class Login extends Component {

    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                }
            }
        }
        return false;
    }

    onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!this.isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken,
                    googleUser.accessToken
                );
                // Sign in with credential from the Google user.
                firebase.auth().signInWithCredential(credential).then(function (result) {
                    console.log('User Signed In');

                    if (result.additionalUserInfo.isNewUser) {
                        firebase
                          .database()
                          .ref('/users/' + result.user.uid)
                          .set({
                            email: result.user.email,
                            profilePicture: result.additionalUserInfo.profile.picture,
                            firstName: result.additionalUserInfo.profile.given_name,
                            lastName: result.additionalUserInfo.profile.family_name,
                            created_at: Date.now()
                          })
                          .then(function(snapshot) {
                              console.log('Snapshot', snapshot);
                          });
                      } else {
                        firebase
                          .database()
                          .ref('/users/' + result.user.uid)
                          .update({
                            last_logged_in: Date.now()
                          });
                      }
                })
                    .catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
            } else {
                console.log('User already signed-in Firebase.');
            }
        }.bind(this));
    }

    signInWithGoogleAsync = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                //androidClientId: YOUR_CLIENT_ID_HERE,
                behavior: 'web',
                iosClientId: '886281610716-q11km6mde7bg0sv94ov0n4m1nlcej52e.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
            if (result.type === 'success') {
                this.onSignIn(result);
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        }
        catch (e) {
            return { error: true };
        }
    };

    render() {
        return (
            <View style={s.container}>
                <StatusBar
                    backgroundColor='#4f6d7a'
                    barStyle='light-content'
                />
                <View style={s.titleArea}>
                    <Text style={s.title}>OnTrack</Text>
                </View>
                <View style={s.BottomContainer}>
                    <TouchableOpacity style={s.button} onPress={() => this.signInWithGoogleAsync()}>
                        <View style={s.loginView}>
                            <Text style={s.buttonText}>Sign in with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}