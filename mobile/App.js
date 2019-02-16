/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './app/screens/login';
import Home from './app/screens/home';

const navigator = createStackNavigator({ Home: Home });
export default (container = createAppContainer(navigator));
