import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, WebView} from "react-native";

// var {width} = Dimensions.get('window').width;
//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');
export default class HtmlDes extends Component {
    static navigationOptions = {
        headerTitle: '公告',
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text  style={{fontSize:14,color:'#555555',marginTop:20,marginLeft:16,marginRight:16}}>考试啦！关于期末考试时间说明</Text>
                <Text style={{fontSize:12,color:'#555555',marginTop:10,marginLeft:16}}>创建于 2018.03.01</Text>
                <Text style={{fontSize:15,color:'#555555',marginTop:20,marginLeft:16,marginRight:16}}>各位同学：</Text>
                <Text style={{fontSize:15,color:'#555555',marginTop:10,marginLeft:16,marginRight:16}}>    大家好！</Text>
                <Text style={{fontSize:15,color:'#555555',marginTop:10,marginLeft:16,marginRight:16}}>    现将《人文视野中的生态学》课程考核比例与期末考试事项说明如下：</Text>
                <Text style={{fontSize:15,color:'#555555',marginTop:10,marginLeft:16,marginRight:16}}>    1、课程考核比例：</Text>
                <Text style={{fontSize:15,color:'#555555',marginTop:10,marginLeft:16,marginRight:16}}>    平时成绩70%，考试成绩30%。采取百分制计分，60分以上为合格，90分以上为优秀。</Text>
                <Text style={{fontSize:15,color:'#555555',marginTop:10,marginLeft:16,marginRight:16}}>     2、期末考试时间：</Text>
                <Text style={{fontSize:15,color:'#555555',marginTop:10,marginLeft:16,marginRight:16}}>     期末考试时间为3月4号-3月10号</Text>
                <Text style={{fontSize:15,color:'#555555',marginTop:10,marginLeft:16,marginRight:16}}>     祝愿大家顺利结课！</Text>
                {/*<WebView*/}
                    {/*style={styles.webViewStyle}*/}
                    {/*source={{uri:"http://jw.eurasia.edu//notice/27615.htm",method: 'GET'}}>*/}
                     {/*automaticallyAdjustContentInsets={false}*/}
                     {/*startInLoadingState={true}*/}
                     {/*domStoregeEnabled={true}*/}
                     {/*javeScriptEnabled={true}*/}
                     {/*scrollEnable={true}>*/}
                {/*</WebView>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor:'#ffffff'
    },
    webViewStyle: {
        width:deviceWidth,
        height:deviceHeight,
        backgroundColor:'#f0f0f0'
    }
});