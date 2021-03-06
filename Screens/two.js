import React, { Component } from 'react';
import SnapSlider from 'react-native-snap-slider';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    AsyncStorage,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {Fonts} from "../Fonts";
import {data,count} from "./store";

class two extends Component{
    sliderOptions = [
        {value: 1, label: '1'},
        {value: 2, label: '2'},
        {value: 3, label: '3'},
        {value: 4, label: '4'},
        {value: 5, label: '5'},
        {value: 6, label: '6'}
    ];

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.slidingComplete = this.slidingComplete.bind(this);

    }
    getInitialState() {
        return {
            defaultItem: 0,
            currentItem: 0,
        };
    }

    slidingComplete(itemSelected) {
        this.setState({ currentItem : itemSelected});
        console.log("slidingComplete");
        console.log("item selected " + this.refs.slider.state.item);
        console.log("item selected(from callback)" + itemSelected);
        console.log("value " + this.sliderOptions[this.refs.slider.state.item].value);
        data[1] = this.sliderOptions[this.refs.slider.state.item].value ;
        data.push() ;
        console.log(data);
    }


    static navigationOptions = {
        title: 'Fråga 2',
    }


    render() {
        const { currentItem } = this.state;


        return <View style={styles.container}>

            <Text style={styles.welcome}>
                1. När du talar med människor, har du då en känsla av att de inte förstår dig ?
            </Text>

            <SnapSlider
                ref="slider"
                containerStyle={styles.snapsliderContainer}
                items={this.sliderOptions}
                labelPosition="bottom"
                defaultItem={this.state.defaultItem}
                onSlidingComplete={this.slidingComplete}
                minimumTrackTintColor='#9BC661'
                step={0.2}
                thumbTintColor= 'green'
            />


            <View style={{top: 50, flex:1}}>
                <Text style={styles.choice}>
                    { this.sliderOptions[currentItem].value === 1 ? 'Har aldrig den känslan ' : ' ' &&
                    this.sliderOptions[currentItem].value === 6 ? 'Har alltid den känslan' : ' ' }
                </Text>
            </View>

            <View style={{flex:1,bottom:25}}>
            <View style={{top: 35,flex:1}}>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('result')}
                    underlayColor='transparent'
                >
                    <View style={styles.viewTouch1}>
                        <Text style={styles.next}>
                            Nästa
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{top: 25,flex:1}}>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.goBack()}
                    underlayColor='transparent'
                >
                    <View style={styles.viewTouch2}>
                        <Text style={styles.next}>
                            Tillbaka
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>

        </View>

    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex:1,
        backgroundColor:'white',
        justifyContent:'space-around'

    },
    welcome: {
        fontSize: 30,
        margin: 20,
        textAlign:'center',
        fontFamily: Fonts.Montserrat
    },

    snapsliderContainer: {
        borderWidth: 0,
        margin:20,
    },
    next: {
        color: 'black',
        padding: 10,
        fontSize: 20,
        textAlign:'center',
        fontFamily:Fonts.Montserrat
    },
    choice: {
        fontSize: 20,
        fontFamily:Fonts.Montserrat,
        textAlign:'center',
    },
    viewTouch1: {
        backgroundColor: '#9BC661',
        borderRadius:20,
        width:220,

    },
    viewTouch2: {
        backgroundColor: '#9BC661',
        borderRadius:20,
        width:220,
    },
});
export default two;