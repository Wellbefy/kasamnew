import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import Home from './Screens/Home';
import LoginScreen from './Screens/LoginScreen';
import result from './Screens/result';
import two from './Screens/two'
import two2 from "./Screens/two2";
import Home2 from "./Screens/Home2";
import result2 from "./Screens/result2";




export default class App extends React.Component{
    render(){
        return(
            <AppNavigator/>
        )
    }
}

const AppNavigator = StackNavigator({
    LoginScreen: {screen: LoginScreen,
    headerMode: 'screen'

    },
    Home: {screen: Home,
        header: { visible: false },

    },
    result: {screen: result,
        gesturesEnabled: true,
    },
    two:{screen:two,
        gesturesEnabled: true,
    },
    Home2: {screen: Home2,
        gesturesEnabled: true,
    },
    two2: {screen: two2,
        gesturesEnabled: true,
    },
    result2: {screen: result2,
        gesturesEnabled: true,
    },

})