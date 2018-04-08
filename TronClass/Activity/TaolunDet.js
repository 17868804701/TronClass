import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";

// var {width} = Dimensions.get('window').width;
//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');
export default class TaolunDet extends Component {

    static navigationOptions = {
        headerTitle: '讨论详情',
    };
    render() {
        return (
            <View style={styles.containerStyle}>
                <ScrollView style={styles.svStyle}>

                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginLeft:10}}>
                        <Image source={require('../Me/Img/default_avatar.png')} style={{width:50,height:50, borderRadius: 25,marginLeft:10}}/>
                        <View>
                            <Text style={{color:'#333333'}}>王珂（学生）</Text>
                            <Text>17 days ago</Text>
                        </View>
                    </View>
                    <Text style={{color:'#555555',fontSize:17,marginLeft:10,marginRight:10}}>请问我们学过的章节中哪些部分你认为最有用</Text>
                    <Text style={{color:'#333333',fontSize:14,marginLeft:10,marginRight:10,marginTop:15}}>如题，请分别回答你认为最有用的章节，最有趣的地方，及最没意思的地方，有没有好的意见</Text>
                </ScrollView>
                <View style={{backgroundColor: '#555555', height: 0.5}}/>
                <Text style={{
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    fontSize: 15,
                    height: 45,
                    width: deviceWidth
                }}>
                    答题已经截止
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    lineViewStyle:{
        flexDirection:'row'
    },
    svStyle: {
        flex: 1
    },
    textStyle: {
        height: 45,
        marginLeft: 5,
        marginRight: 5,
        textAlignVertical: 'center',
        fontSize: 15,
        color: '#333333',
        flex:1
    },
    textStyleTwo:{
        height: 45,
        marginRight: 5,
        textAlignVertical: 'center',
        fontSize: 13,
        color: '#999999',
    }
});