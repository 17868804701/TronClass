/**
 * Created by qismsom on 2018/3/26.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
type Props = {};
export default class KechengPingJia extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1 ,backgroundColor: 'white',}}>
                <View style={{width:'94%',marginLeft:'3%',borderBottomWidth:1,borderBottomColor:'#e0e0e0',height:45,justifyContent:"center"}}>
                    <Text style={{fontSize:18,color:"#333"}}>用户评分</Text>
                </View>
                <View style={{width:'94%',marginLeft:'3%',height:145,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:18,color:"#333"}}>暂无评分</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});