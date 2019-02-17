import React from 'react';

import { View, Text } from 'react-native';
import { home } from '../styles';

import colors from '../colors';
import { ScrollView } from 'react-native-gesture-handler';
import MoneyCategory from '../components/moneycategory';
import Button from '../components/button';


export default class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            spent: "0"
        };

    }

    static navigationOptions = {
        title: 'Totals',
        headerStyle: {
            backgroundColor: colors.green
        },
        headerTitleStyle: {
            color: 'white'
        }
    };

    componentDidMount() {

        var request = new XMLHttpRequest();

        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                this.setState({spent: request.responseText});
            } else {
                console.warn('error');
            }
        };

        request.open("GET", "https://budgetbucket.net/api/totalspend");
        request.send();

    }

    

    render() {
        return (
            <View style={home.container}>
              <Text style={home.totalMoney}>${this.state.spent}</Text>
              <Text style={home.totalTitle}>Spent</Text>
              <View style={{height: 100}}/>
              <Button backgroundColor={colors.grey} text="Categories" onPress={() => this.props.navigation.navigate("Categories")}/>
              <View style={{height: 40}}/>
              <Button backgroundColor={colors.pink} text="Add Purchase" onPress={() => this.props.navigation.navigate("Camera")}/>
            </View>
        );
    }
}
