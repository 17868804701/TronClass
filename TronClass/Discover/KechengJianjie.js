/**
 * Created by qismsom on 2018/3/26.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Text
} from 'react-native';
type Props = {};
export default class KechengJianjie extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
        <ScrollView>
            <View style={{ flex: 1 ,backgroundColor: 'white',}}>
                <View style={{width:'94%',marginLeft:'3%',marginTop:10}}>
                    <Text style={{fontSize:18}}>该课程没有课程简介哦</Text>
                </View>
                <View style={{width:'100%',marginTop:10,height:40,backgroundColor:'#e0e0e0',justifyContent:"center"}}>
                    <Text style={{fontSize:14,marginLeft:20}}>基本信息</Text>
                </View>
                <View style={{width:'100%',height:40,justifyContent:"center"}}>
                    <Text style={{position:"absolute",left:20,fontSize:18}}>参与人数</Text>
                    <Text style={{position:"absolute",right:10,fontSize:18,fontWeight:"bold",color:"#333"}}>1118</Text>
                </View>
                <View style={{width:'100%',height:40,justifyContent:"center"}}>
                    <Text style={{position:"absolute",left:20,fontSize:18}}>课程代码</Text>
                    <Text style={{position:"absolute",right:10,fontSize:18,fontWeight:"bold",color:"#333"}}>GKK2</Text>
                </View>
                <View style={{width:'100%',height:40,justifyContent:"center"}}>
                    <Text style={{position:"absolute",left:20,fontSize:18}}>课程分类</Text>
                    <Text style={{position:"absolute",right:10,fontSize:18,fontWeight:"bold",color:"#333"}}>校内公开课</Text>
                </View>

                <View style={{width:'100%',marginTop:10,height:40,backgroundColor:'#e0e0e0',justifyContent:"center"}}>
                    <Text style={{fontSize:14,marginLeft:20}}>教师</Text>
                </View>
                <View style={{width:'100%',height:60,justifyContent:"center"}}>
                    <Image source={require("../../images/201291893228996.jpg")} style={{width:40,height:40,borderRadius:20,marginLeft:20,marginTop:5}}></Image>
                    <Text style={{position:"absolute",left:80,fontSize:18,color:"#333"}}>何飞</Text>
                </View>
                <View style={{width:'100%',height:60,justifyContent:"center"}}>
                    <Image source={require("../../images/201291893228996.jpg")} style={{width:40,height:40,borderRadius:20,marginLeft:20,marginTop:5}}></Image>
                    <Text style={{position:"absolute",left:80,fontSize:18,color:"#333"}}>黄森</Text>
                </View>
            </View>
        </ScrollView>
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