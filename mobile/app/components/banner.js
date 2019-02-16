import React from 'react';
import { View, Image, Text } from 'react-native';
import assets from '../assets';
import {banner} from "../styles";

export default class Banner extends React.Component {
    render() {
        return (
            <View style={banner.container}>
                <Image style={banner.image} source={assets.images.logo.monochrome} />
                <Text style={banner.text}>BudgetBucket</Text>
            </View>
        );
    }
}
