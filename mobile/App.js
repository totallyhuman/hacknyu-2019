/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';
import Login from './app/screens/login';
import Home from './app/screens/home';
import CategoriesSwiper from './app/screens/categories-swiper';

global.categories = [
    {
        categoryname: "Entertainment",
        spent: 310,
        total: 1000,
        purchases: [
            {
                company: "The Ginder Store",
                price: 2,
                product: "Pirated Movie Collection"
            },
            {
                company: "Varun's Game Company",
                price: 300,
                product: "Nintendo Switch"
            },
            {
                company: "Netflix",
                price: 8,
                product: "Subscription"
            },
        ]
    },
    {
        categoryname: "Food",
        spent: 310,
        total: 1000,
        purchases: [
            {
                company: "The Rahul Store",
                price: 2,
                product: "Awake Chocolate"
            },
            {
                company: "Varun's Food Company",
                price: 300,
                product: "Truckload of Beans"
            },
            {
                company: "Lays Chips",
                price: 8,
                product: "Bag of Air"
            },
        ]
    }
];

const stack = createStackNavigator({
    Home: {
        screen: Home
    },
    Categories: {
        screen: CategoriesSwiper
    },
});

export default (container = createAppContainer(stack));
