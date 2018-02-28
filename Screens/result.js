import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Image, StyleSheet, Button,} from 'react-native';
import Home from './Home';

class result extends Component{

   constructor(props) {
       super(props)
   }


    render(){
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        return(
            <View style={{backgroundColor:'#e0f7fa', alignItems:'center',flex:1, justifyContent:'space-around'}}>
               <View style={styles.rectangle}>
                <Text style={styles.point}> Your POINTS !</Text>
                   <Text style={styles.point}>
                       {this.props.currentItem}
                       </Text>
                   <Text>
                       itemId: {JSON.stringify(itemId)}
                   </Text>
               </View>

                <View style={styles.rectangle2}>
                <Text style={styles.point}>
                    M
                </Text>
                    <Text style={styles.point}>
                        H
                    </Text>
                    <Text style={styles.point}>
                        P
                    </Text>
                </View>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    rectangle:{
        width: 170 * 2,
        height: 200,
        top:15,
        backgroundColor:'#aec4c7',
        borderWidth:1,
        borderStyle:'solid',
        borderBottomColor:'#aaa',
        borderRightColor:'#aaa',
        borderTopColor:'#ddd',
        borderLeftColor:'#ddd',
        borderRadius:3,
        position:'absolute'
    },
    rectangle2:{
        width: 170 * 2,
        height: 200,
        top:75,
        backgroundColor:'#aec4c7',
        borderWidth:1,
        borderStyle:'solid',
        borderBottomColor:'#aaa',
        borderRightColor:'#aaa',
        borderTopColor:'#ddd',
        borderLeftColor:'#ddd',
        borderRadius:3,
        position:'relative',
        flex:0.4
    },
    point:{
        fontSize:35,
        textAlign:'center',
        lineHeight:60,
        color:'#000000',
        fontFamily:'Times New Roman'
    }

});
export default result;