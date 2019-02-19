import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { moneyCategory } from '../styles';
import PurchaseCard from '../components/purchasecard';

export default class MoneyCategory extends React.Component {
    render() {
        console.log(global.catData);
        return (
            <View style={moneyCategory.container}>
              <Text style={moneyCategory.category}>{this.props.category}</Text>
              <Text style={moneyCategory.money}>${this.props.data.spent.toFixed(2)} Spent</Text>
              <ScrollView>
                {this.props.data.transactions.map(function(purchase) {
                    return <PurchaseCard purchase={purchase}  />;
                })}
                </ScrollView>
            </View>
        );
    }
}
