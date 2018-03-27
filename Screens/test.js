import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    AsyncStorage,
    TouchableOpacity,
    UIManager,
    ActionSheetIOS
} from 'react-native';
import {data} from "./store";
import Share, {ShareSheet, Button} from 'react-native-share';
import { captureScreen } from "react-native-view-shot";

captureScreen({
    format: "jpg",
    quality: 0.8
})
    .then(
        uri => console.log("Image saved to", uri),
        error => console.error("Oops, snapshot failed", error)
    );

class result extends Component{

    constructor(props) {
        super(props)
    }
    onOpen() {
        console.log("OPEN")
    }

}

render(){
    AsyncStorage.getItem('valueInt', (error,value) => {
        console.log(data)
    });

    let shareOptions = {
        title: "Kasam Test",
        message: "Join Us",
        url: "http://www.wellbefy.se/",
        subject: "Wellbefy " ,
        type: this.captureScreen
    };



    return (
        <View style={{backgroundColor:'#aed581', alignItems:'center',flex:1, justifyContent:'space-around'}}>
            <View style={styles.rectangle}>
                <Text style={{fontSize:35,textAlign:'center', lineHeight:60,color:'#000000',}}>
                    Your POINTS !
                </Text>
                <Text style={styles.point}>
                    {this.props.currentItem}
                </Text>
                <Text style={{marginLeft:'auto',marginRight:'auto', fontSize:40,}}>
                    {data[0]+data[1]}
                </Text>
            </View>

            <View style={styles.rectangle2}>
                <Text style={styles.point}>
                    Meningsfullhet :
                </Text>
                <Text style={styles.point}>
                    Hanterbarhet :
                </Text>
                <Text style={styles.point}>
                    Begriplighet :
                </Text>
            </View>

            <TouchableOpacity onPress={()=>{
                this.onOpen();
                setTimeout(() => {
                    Share.open(shareOptions)
                        .catch(err => console.log(err));
                },300);}}>
                <View style={{backgroundColor: 'green', borderRadius:20, width:220}}>
                    <Text style={styles.next}>
                        Share
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    )

}
}

const styles = StyleSheet.create({
    rectangle:{
        width: 170 * 2,
        height: 200,
        top:15,
        backgroundColor:'#e1ffb1',
        borderWidth:1,
        borderStyle:'solid',
        borderBottomColor:'#aaa',
        borderRightColor:'#aaa',
        borderTopColor:'#ddd',
        borderLeftColor:'#ddd',
        borderRadius:15,
        position:'relative',
    },
    rectangle2:{
        width: 170 * 2,
        height: 200,
        top:20,
        backgroundColor:'#e1ffb1',
        borderWidth:1,
        borderStyle:'solid',
        borderBottomColor:'#aaa',
        borderRightColor:'#aaa',
        borderTopColor:'#ddd',
        borderLeftColor:'#ddd',
        borderRadius:15,
        position:'relative',
    },
    point:{
        fontSize:20,
        lineHeight:60,
        color:'#000000',
        left:20
    },
    next: {
        color: 'white',
        padding: 10,
        fontSize: 20,
        textAlign:'center',
        fontWeight:'bold',
    },

});
export default result;