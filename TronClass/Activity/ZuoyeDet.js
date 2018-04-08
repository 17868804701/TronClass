import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";

// var {width} = Dimensions.get('window').width;
//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');
export default class ZuoyeDet extends Component {

    static navigationOptions = {
        headerTitle: '作业详情',
    };
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.headStyle}>
                    <Image source={require('../Me/Img/default_avatar.png')} style={{width:50,height:50, borderRadius: 25,marginLeft:16}}>
                    </Image>
                    <View style={{justifyContent:'center',flex:1,marginLeft:10}}>
                        <Text style={{fontSize:16,color:'#333333'}}>黄森</Text>
                        <Text style={{fontSize:12,}}>人员编号：1461080111245687</Text>
                        <Text style={{fontSize:12,}}>软件工程4统本软件1521</Text>
                    </View>
                    <View style={{justifyContent:'center',marginRight:10}}>
                        <Text style={{fontSize:13,}}>2017.05.21 13:41</Text>
                        <Text style={{fontSize:15,marginTop:10}}>成绩未公布</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'#ffffff',marginTop:10,}}>
                <Text style={{height:45,color:'#333333',paddingLeft:10,fontSize:15,textAlignVertical:'center'}}>作业内容</Text>
                <View style={{height:2,backgroundColor:'#f0f0f0',marginLeft:5,marginRight:5}}/>
                    <Text style={{height:40,color:'#333333',paddingLeft:10,fontSize:14,textAlignVertical:'center'}}>未提交任何内容</Text>
                    <View style={{marginLeft:10,marginRight:10,marginBottom:20,
                        borderColor:'#f0f0f0',
                        borderWidth:2,
                        borderRadius:5
                    }}>
                        <Text style={{height:40,marginTop:10,color:'#333333',paddingLeft:10,fontSize:14,textAlignVertical:'center'}}>1个作业附件</Text>
                        <View style={{height:2,backgroundColor:'#f0f0f0',marginLeft:5,marginRight:5}}/>
                        <View style={{flexDirection:'row',alignItems:'center',paddingTop:10,paddingBottom:10}}>
                            <Image source={require('../Configure/Resource/ic_wenjian.png')} style={{width:45,height:45,marginLeft:10}}/>
                            <Text style={{flex:1,color:'#333333'}}>PHP大作业-黄森.zip</Text>
                            <Text style={{marginRight:10}}>2.1MB</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor:'#f0f0f0'
    },
    headStyle: {
        flexDirection:'row',
        width:deviceWidth,
        height:80,
        backgroundColor:'#ffffff',
        alignItems: 'center',
    }
});