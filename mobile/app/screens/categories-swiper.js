import React from 'react';

import { View, Text } from 'react-native';

import Swiper from 'react-native-swiper';

import MoneyCategory from '../components/moneycategory';

import colors from '../colors';

export default class CategoriesSwiper extends React.Component {
    static navigationOptions = {
        title: "Categories",
        headerStyle: {
            backgroundColor: colors.green
        },
        headerTitleStyle: {
            color: "white"
        },
        headerTintColor : "White"
    };

    render() {
        return (
            <Swiper style={{backgroundColor: colors.grey}}>
              {Object.keys(global.catData.categories).map(function(key){
                  return <MoneyCategory data={global.catData.categories[key]} category={key} />;
              })}
            </Swiper>
        );
    }
}
