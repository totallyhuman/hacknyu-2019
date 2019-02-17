import React from 'react';

import {View, Text} from 'react-native';

import { purchasecard } from '../styles';

export default class PurchaseCard extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        var secondsSinceEpoch = parseInt(this.props.purchase.filename.split('.')[0]);
        this.dateObject = new Date(secondsSinceEpoch);
    }

    render() {
        return (
            <View style={purchasecard.container}>
              <Text style={purchasecard.price}>${this.props.purchase.price}</Text>
              <Text style={purchasecard.date}>{this.dateObject.toLocaleDateString('en-US', { weekday: 'long' })}</Text>
            </View>
        );
    }
}
