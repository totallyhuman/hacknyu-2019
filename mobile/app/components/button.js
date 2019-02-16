import React from 'react';

import { Text, View, Image } from 'react-native';

import Ripple from 'react-native-material-ripple';
import { button } from '../styles';

import colors from '../colors';

import assets from '../assets';

export default class Button extends React.Component {
    render() {
        return (
            <Ripple rippleColor={colors.lightgrey} onPress={this.props.onPress}>
                <View style={button.container}>
                    {/* <Image
                        source={assets.images.googlelogo}
                        style={button.icon}
                    /> */}
                    <Text style={button.text}>{this.props.text}</Text>
                </View>
            </Ripple>
        );
    }
}
