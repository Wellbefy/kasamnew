import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginScreen from './LoginScreen';

export const AppNavigator = StackNavigator({
    LoginScreen: { screen: LoginScreen },
}, {
    initialRouteName: 'Main',
});
class AppWithNavigationState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };
    render() {
        const { dispatch, nav } = this.props;

        return (
    <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav })}
    />
);
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);