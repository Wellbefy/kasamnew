import React, { Component } from 'react';
import SnapSlider from 'react-native-snap-slider';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
} from 'react-native';

class three extends Component{
    sliderOptions = [
        {value: 0, label: '1'},
        {value: 1, label: '2'},
        {value: 2, label: '3'},
        {value: 3, label: '4'},
        {value: 4, label: '5'},
        {value: 5, label: '6'}
        ];

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.slidingComplete = this.slidingComplete.bind(this);
    }

    getInitialState() {
        return {
            defaultItem: 0
        };
    }

    slidingComplete(itemSelected) {
        console.log("slidingComplete");
        console.log("item selected " + this.refs.slider.state.item);
        console.log("item selected(from callback)" + itemSelected);
        console.log("value " + this.sliderOptions[this.refs.slider.state.item].value);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{justifyContent:'space-around'}}>
                    <Text style={styles.welcome}>
                         3 !!!
                    </Text>
                </View>

                <SnapSlider
                    ref="slider" containerStyle={styles.snapsliderContainer} style={styles.snapslider}
                    itemWrapperStyle={styles.snapsliderItemWrapper}
                    itemStyle={styles.snapsliderItem}
                    items={this.sliderOptions}
                    labelPosition="bottom"
                    defaultItem={this.state.defaultItem}
                    onSlidingComplete={this.slidingComplete}

                />

                <View>
                    <TouchableHighlight
                        style={{bottom:-45, alignItems:'center', left:120
                        }}
                        onPress={() =>
                            this.props.navigation.navigate('four')}>
                        <Image
                            style={{width:150, height:50}}
                            source={require('/Users/Mido/tuff/tuffOne/img/next.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={{ padding:20, bottom:65,backgroundColor:'#DDDDDD', alignItems:'center', right:120,borderStyle:'dashed'
                        }}
                        onPress={() =>
                            this.props.navigation.navigate('two')}>
                        <Image
                            style={{width:70, height:70}}
                            source={require('/Users/Mido/tuff/tuffOne/img/back.png')}/>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ccffcc'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        alignItems:'center',
        bottom:-50
    },

    snapsliderContainer: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        margin:15,
        bottom:-80
    },
    snapslider: {
        borderWidth: 0
    },
    snapsliderItemWrapper: {
        borderWidth: 0
    },
    snapsliderItem: {
        borderWidth: 0
    }
});
export default three;
