import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";

// var {width} = Dimensions.get('window').width;
//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');
export default class CeshiDet extends Component {

    static navigationOptions = {
        headerTitle: '基本信息',
    };
    render() {
        return (
            <View style={styles.containerStyle}>
                <ScrollView style={styles.svStyle}>
                    <Text style={styles.textStyle}>期末测试</Text>
                    <View style={{backgroundColor: '#555555', height: 0.5, marginLeft: 5, marginRight: 5}}/>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>开放时间</Text>
                        <Text style={styles.textStyleTwo}>2016.11.02 12:21</Text>
                    </View>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>开始答题时间</Text>
                        <Text style={styles.textStyleTwo}>2016.11.02 12:30</Text>
                    </View>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>截止时间</Text>
                        <Text style={styles.textStyleTwo}>2016.11.02 14:30</Text>
                    </View>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>成绩占比</Text>
                        <Text style={styles.textStyleTwo}>40%</Text>
                    </View>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>计分规则</Text>
                        <Text style={styles.textStyleTwo}>最后一次得分</Text>
                    </View>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>题目总分</Text>
                        <Text style={styles.textStyleTwo}>100</Text>
                    </View>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>公布成绩时间</Text>
                        <Text style={styles.textStyleTwo}>不公布</Text>
                    </View>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>允许尝试次数</Text>
                        <Text style={styles.textStyleTwo}>1</Text>
                    </View>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>已提交次数</Text>
                        <Text style={styles.textStyleTwo}>1</Text>
                    </View>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>答题限时</Text>
                        <Text style={styles.textStyleTwo}>90</Text>
                    </View>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>测试形式</Text>
                        <Text style={styles.textStyleTwo}>个人测试</Text>
                    </View>
                    <View style={styles.lineViewStyle}>
                        <Text style={styles.textStyle}>完成指标</Text>
                        <Text style={styles.textStyleTwo}>提交测试</Text>
                    </View>
                    <View style={{height:10,backgroundColor:'#f0f0f0'}}/>
                    <View>
                        <Text style={styles.textStyle}>答题历史</Text>
                        <View style={{height:1,backgroundColor:'#f0f0f0',marginRight:5,marginLeft:5}}/>
                        <Text style={styles.textStyle}>2016.11.02 12:34</Text>
                    </View>
                    <View style={{height:10,backgroundColor:'#f0f0f0'}}/>
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