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
            spent: 0
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
        fetch('GET', 'http://localhost:5000/api/totalspend/').then((response) => this.setState({spent: response}));
    }

    

    render() {
        return (
            <View style={home.container}>
              <Text style={home.totalMoney}>{this.state.spent}</Text>
              <Text style={home.totalTitle}>Spent</Text>
              <View style={{height: 100}}/>
              <Button backgroundColor={colors.grey} text="Categories" onPress={() => this.props.navigation.navigate("Categories")}/>
              <View style={{height: 40}}/>
              <Button backgroundColor={colors.pink} text="Add Purchase" onPress={() => this.props.navigation.navigate("Camera")}/>
            </View>
        );
    }
}
