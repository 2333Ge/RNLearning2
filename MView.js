import React from "React";
import {View, StyleSheet,Text,Button} from 'react-native';

export default MView = ()=>{
    return(
        <View style={{flex:1}}>
            <View style={styles.testBorder}/>
            <Text style={styles.testShadow}>shadow</Text>
            <Text style={styles.testChangeShape}>rotateX:'45deg'</Text>
            <Text style={styles.testSkewY}>skewY:'45deg'</Text>
            <Text style={styles.testText2}>includeFontPadding:true</Text>
            <Text style={styles.testText}>includeFontPadding:false</Text>
            <Button style={styles.testButton} title='test' />            
        </View>
    );
}
const styles = StyleSheet.create({
    testBorder: {
        height:20,
        width:55,
        borderStyle: 'dashed', //没起作用？？
        borderWidth:4,
        borderColor:'#00ff00'
    },
    testShadow: {
        shadowColor:'#ff00ff',
        shadowOffset:{width: 10,height: 30},
        shadowOpacity:0.5,
        shadowRadius:10,
        marginTop: 10,
    },
    testChangeShape: {
        transform:[
            {rotateX:'45deg'},
        ]
    },
    testSkewY: {//skewX 没起作用？？
        transform:[
            {skewY:'45deg'},
        ],
        margin: 30,
    },
    testText: {
        includeFontPadding:false,
        backgroundColor:'#ff00ff',
        fontSize: 30,
        margin:10,
    },
    testText2: {
        includeFontPadding:true,
        backgroundColor:'#00ff00',
        fontSize: 30,
    },
    testButton: {
        backgroundColor:'#00ff00',
        height:20,
        width:20,
    }

});