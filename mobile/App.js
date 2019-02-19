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
import Camera from './app/screens/camera';

global.categoriesArray = ["Entertainment",
                          "Automotives",
                          "",
                          "",
                          "Education",
                          "Family",
                          "Finance",
                          "Food",
                          "Health",
                          "Hobbies",
                          "Home",
                          "",
                          "News",
                          "Real Estate",
                          "Religion",
                          "",
                          "Food",
                          "",
                          "Sports",
                          "Fashion",
                          "Technology",
                          "Travel"];


// global.serverURL = "https://budgetbucket.net";

global.hasNewData = true;
global.serverURL = "https://budgetbucket.net";
global.catData = {
    spent: 0,
    categories: {

    }
};
global.updateCatData = () => {
    fetch(global.serverURL + "/api/transactions", {
        method: "GET"
    }).then(function(response) {
        console.log(response);
        return JSON.parse(response['_bodyInit']);
    }).then(function(json) {
        for (var key in json) {
            var transaction = json[key];

            var category = global.categoriesArray[transaction.category];
            var dataCategories = global.catData.categories;

            if (!(category === "")) {
                if (!(category in dataCategories)) {
                    dataCategories[category] = {spent: 0, transactions: []};
                }
                dataCategories[category].transactions.push(transaction);
                dataCategories[category].spent += transaction.price;
                global.catData.spent += transaction.price;
            }
        }

        console.log(global.catData);
    }).catch(error => console.error(error));
};


console.disableYellowBox = true;

const stack = createStackNavigator({
    Home: {
        screen: Home
    },
    Categories: {
        screen: CategoriesSwiper
    },
    Camera: {
        screen: Camera
    }
});

export default (container = createAppContainer(stack));
