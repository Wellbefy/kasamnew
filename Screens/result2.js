import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';

class result2 extends Component{

    constructor(props) {
        super(props)
    }

    render(){
        return (
<View styel={{justifyContent:'center', alignItems:'center',flex:1}}>
    <Text>
        Nice try now lets test app
    </Text>
        <TouchableOpacity onPress={()=>
            this.props.navigation.navigate("Home")}>

            <View style={{backgroundColor: 'green', borderRadius:20, width:220,justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.next}>
                    Lets Start
                </Text>
            </View>
        </TouchableOpacity>

    </View>
    )

    }
}

const styles = StyleSheet.create({
    next: {
        color: 'white',
        padding: 10,
        fontSize: 20,
        textAlign:'center',
        fontWeight:'bold',
    },

});
export default result2;