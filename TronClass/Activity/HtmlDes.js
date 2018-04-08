import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, WebView} from "react-native";

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
                <WebView
                    style={styles.webViewStyle}
                    source={{uri:"http://www.hangge.com",method: 'GET'}}>
                    // automaticallyAdjustContentInsets={false}
                    // startInLoadingState={true}
                    // domStoregeEnabled={true}
                    // javeScriptEnabled={true}
                    // scrollEnable={true}>
                </WebView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    webViewStyle: {
        width:deviceWidth,
        height:deviceHeight,
        backgroundColor:'#f0f0f0'
    }
});