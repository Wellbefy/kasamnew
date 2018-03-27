import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet,Animated, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
class LoginScreen extends Component{

    static navigationOptions = {
        header: null
    }

    render(){
        return(
           <View style={{backgroundColor:'white', alignItems:'center',flex:1, justifyContent:'space-around'}}>

               <Text style={styles.welcome}> Welcome to KASAM!</Text>
               <TouchableOpacity
                   onPress={() => this.props.navigation.navigate('Home2')}
                   underlayColor='transparent'
               >
                   <View style={{backgroundColor: '#9bc661', borderRadius:20, width:220}}>
                       <Text style={styles.next}>
                           Take A Look
                       </Text>
                   </View>
               </TouchableOpacity>

               <TouchableOpacity
                   onPress={() => this.props.navigation.navigate('Home')}
                   underlayColor='transparent'

               >
                   <View style={{backgroundColor: '#9bc661', borderRadius:20, width:220}}>
                       <Animated.Text style={styles.next} class="animated infinite shake">
                           START
                       </Animated.Text>
                   </View>
               </TouchableOpacity>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    welcome:{
        fontSize:35,
        justifyContent:'center',
        alignItems:'center',
        lineHeight:75,
        color:'#000000',
        fontFamily:'Times New Roman'
    },
    next: {
        color: 'black',
        padding: 20,
        fontSize: 25,
        textAlign:'center',
        fontWeight:'bold',
    }

})
export default LoginScreen;