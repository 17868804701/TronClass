/**
 * Created by qismsom on 2018/3/26.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions, TouchableHighlight
} from 'react-native';
import ImageText from "./Component/ImageText";

type Props = {};
//屏幕信息
//获取屏幕的宽度
var {width} = Dimensions.get('window').width;
export default class Me extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                {/*用户信息显示*/}
                <TouchableHighlight
                    activeOpacity={0.5} //透明度设置
                    underlayColor="#B5B5B5"  //点击后颜色
                    style={styles.buttonBg}
                    onPress={() => this.props.navigation.navigate('editInfo')}>
                    <View style={styles.user_info_style}>
                        <Image style={styles.image_style} source={require('../Configure/Resource/list_icon.png')}/>
                        <View style={styles.user_text}>
                            <Text style={styles.textStyleOne}>黄森</Text>
                            <Text>1451020356489@eurasia.edu</Text>
                        </View>
                        <Image style={{width: 20, height: 20, marginRight: 16}}
                               source={require('../Configure/Resource/right.png')}/>
                    </View>
                </TouchableHighlight>
                <ImageText text="私信" imgPath='mipmap/sixin' OnClickListener={() => {
                    alert('你点击了私信')
                }}></ImageText>
                <ImageText text="下载管理" imgPath='mipmap/xiazai' OnClickListener={() => {
                    alert('你点击了')
                }}></ImageText>
                <ImageText text="反馈" imgPath='mipmap/tuichu1' OnClickListener={() => {
                    alert('你点击了确定')
                }}></ImageText>
                <ImageText text="关于" imgPath='mipmap/guanyu' OnClickListener={() => {
                    alert('你点击了确定')
                }}></ImageText>
                {/*退出按钮*/}
                <TouchableHighlight
                    activeOpacity={0.5} //透明度设置
                    underlayColor="#B5B5B5"  //点击后颜色
                    style={styles.outStyle}
                    onPress={() => {
                        alert('你点击了退出')
                    }}>
                    <Text style={styles.textStyleTwo}>退出</Text>
                </TouchableHighlight>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    user_info_style: {
        flexDirection: 'row',
        height: 100,
        width: width,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    buttonBg: {
        height: 100,
        marginTop: 10,
        width: width,
    },
    user_text: {
        flex: 1,
        marginLeft: 10
    },
    textStyleOne: {
        color: '#333333',
        fontSize: 15
    },
    outStyle: {
        marginTop: 10,
        width: width,
        height: 45,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    textStyleTwo: {
        color: '#555555',
        fontSize: 17,
        textAlign: 'center',
    }, image_style: {
        width: 70,
        height: 70,
        marginLeft: 16,
        borderRadius: 35
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});