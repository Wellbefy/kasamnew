import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Button
} from 'react-native';
import {Provider} from 'mobx-react';

import {StackNavigator} from 'react-navigation';
import Home from './Screens/Home';
import LoginScreen from './Screens/LoginScreen';
import result from './Screens/result';
import two from './Screens/two'
import stores from "./stores";


export default class App extends React.Component{
    render(){
        return(
            <Provider   name={stores.store}>
            <AppNavigator/>
            </Provider>
        )
    }
}

const AppNavigator = StackNavigator({
    LoginScreen: {screen: LoginScreen},
    Home: {screen: Home},
    result: {screen: result},
    two:{screen:two}
})