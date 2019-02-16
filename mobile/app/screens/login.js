import React from 'react';
import { View, Text } from 'react-native';

import { loginScreen } from '../styles';
import Banner from '../components/banner';
import Button from '../components/button';
import Separator from '../components/separator';


export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    // authenticate = () => {
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth().signInWithPopup(provider).then(function(result) {
    //         var user = result.user;
    //         console.log(user);
    //     });
    // }

    render() {
        return (
            <View style={loginScreen.container}>
              <Banner />
              <Button onPress={this.authenticate} text="Sign In With Google" />
              <Separator />
            </View>
        );
    }
}
