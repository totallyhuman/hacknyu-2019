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
        }
    };

    render() {
        return (
            <Swiper>
              {global.catData.map(function(result){
                  return <MoneyCategory data={result} />
              })}
            </Swiper>
        );
    }
}
