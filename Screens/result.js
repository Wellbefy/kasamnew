import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    AsyncStorage,
    TouchableOpacity,
    ListView
} from 'react-native';
import {data, count} from "./store";
import Share from 'react-native-share';
import { captureScreen } from "react-native-view-shot";
import {Fonts} from "../Fonts";
import * as firebase from "firebase";

captureScreen({
    format: "jpg",
    quality: 0.8
})
    .then(
        uri => console.log("Image saved to", uri),
        error => console.error("Oops, snapshot failed", error)
    );

    const firebaseConfig = {
        apiKey: "AIzaSyBjYY8FxoZKku6GVcX1r8Qd6ETlh6XOyMU",
        authDomain: "kasam-8m9m2.firebaseapp.com",
        databaseURL: "https://kasam-8m9m2.firebaseio.com",
        projectId: "kasam-8m9m2",
        storageBucket: "kasam-8m9m2.appspot.com"
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);

class result extends Component{

   constructor(props) {
       super(props)
       this.itemsRef = this.getRef();
       this.state = {
           dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
       /*   items: {
                score: (data[0] + data[1]),
                count: (1)
                } */
       }
   }

   getRef(){
       return firebaseApp.database().ref()
   }

   componentWillMount(){
       this.getItems(this.itemsRef);
   }

    componentDidMount(){
        this.getItems(this.itemsRef);
    }

    getItems(itemsRef){
        itemsRef.on('value', (snap) => {

            // get children as an array
            var items = [];
            snap.forEach((child) => {
                items.push({
                    title: child.val().title,
                    _key: child.key
                });
            });
            this.setState( {
                dataSource: this.state.dataSource.cloneWithRows(items)
            });
            console.log('items');
            let sum = 0;
            for (var i=0; i< items.length; i++){

            }
        });
    }

    onOpen() {
        console.log("OPEN")
    }

    static navigationOptions = {
        title: 'Result',
        headerLeft:null
    };

       render(){
        let shareOptions = {
            title: "Kasam Test",
            message: "Join Us",
            url: "http://www.wellbefy.se/",
            subject: "Wellbefy " ,
        };

           const all = data[0]+data[1] ;
           firebase.database().ref('result').push({score: (data[0] + data[1]),
               count: (1)
           });

           return (
            <View style={{backgroundColor:'white', alignItems:'center',flex:1, justifyContent:'space-around'}}>
               <View >
                <Text style={{fontSize:25,textAlign:'center', lineHeight:60,color:'black',fontFamily:Fonts.Montserrat}}>
                    Din upplevda KASAM :
                </Text>
                   <Text style={{marginLeft:'auto',marginRight:'auto', fontSize:60, color:'#9BC661',fontFamily:Fonts.Montserrat}}>
                        {all}
                   </Text>
                   <Text style={{fontSize:15,textAlign:'center', lineHeight:60,color:'black',
                       fontFamily:Fonts.Montserrat, fontWeight:'bold'}}>
                       avarge score
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
                    <View style={{backgroundColor: '#9BC661', borderRadius:20, width:220}}>
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
        backgroundColor:'white',
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
        backgroundColor:'#9bc661',
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
        color: 'black',
        padding: 10,
        fontSize: 20,
        textAlign:'center',
        fontWeight:'bold',
    },

});
export default result;
export const pushData = (endpoint, data) => {
    return firebase.database().ref(endpoint).push(data);
}