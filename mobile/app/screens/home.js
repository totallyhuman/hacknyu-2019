import React from 'react';

import { View, Text } from 'react-native';
import { home } from '../styles';

import colors from '../colors';
import { ScrollView } from 'react-native-gesture-handler';
import MoneyCategory from '../components/moneycategory';
import Button from '../components/button';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Totals',
        headerStyle: {
            backgroundColor: colors.green
        },
        headerTitleStyle: {
            color: 'white'
        }
    };

    render() {
        return (
            <View style={home.container}>
              <Text style={home.totalMoney}>$100</Text>
              <Text style={home.totalTitle}>Spent</Text>
              <View style={{height: 100}}/>
              <Button text="Categories" onPress={() => this.props.navigation.navigate("Categories")}/>
            </View>
        );
    }
}
