import React from 'react';

import {View, Text} from 'react-native';

import { purchasecard } from '../styles';

export default class PurchaseCard extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        console.log(this.props.purchase.filename);
        var secondsSinceEpoch = this.props.purchase.filename.split('.')[0].split('_')[1];
        console.log(secondsSinceEpoch);
        this.dateObject = new Date(secondsSinceEpoch);
    }

    render() {
        return (
            <View style={purchasecard.container}>
              <Text style={purchasecard.price}>${this.props.purchase.price}</Text>
              <Text style={purchasecard.date}>Feb 17, 2019</Text>
            </View>
        );
    }
}
