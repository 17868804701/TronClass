import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default class EditInfo extends Component {
    //设置顶部导航栏的内容
    static navigationOptions = {
        headerTitle: '编辑资料',
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <TouchableHighlight
                    activeOpacity={0.5} //透明度设置
                    underlayColor="#B5B5B5"  //点击后颜色
                    onPress={()=>{alert('你点击了头像')}}>
                <View  style={[styles.lineStyle,{height:80}]}>
                    <Text style={styles.textStyle}>头像</Text>
                    <Image style={styles.imageStyle} source={require('../Configure/Resource/list_icon.png')}/>
                </View>
                </TouchableHighlight>
                <View style={[styles.lineStyle,{height:55, marginTop:10,}]}>
                    <Text style={styles.textStyle}>姓名</Text>
                    <Text style={{marginRight:16}}>黄森</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    imageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight:16
    },
    textStyle:{
        fontSize:16,
        marginLeft:16,
        color:'#333333',
        textAlign:'center'
    },
    lineStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems:'center',
    },
});