import React from 'react';

import {View, Text} from 'react-native';

import { purchasecard } from '../styles';

export default class PurchaseCard extends React.Component {
    render() {
        return (
            <View style={purchasecard.container}>
              <Text style={purchasecard.product}>{this.props.purchase.product}</Text>
              <Text style={purchasecard.company}>{this.props.purchase.company}</Text>
              <Text style={purchasecard.price}>${this.props.purchase.price}</Text>
            </View>
        );
    }
}
