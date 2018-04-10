import React, {Component} from 'react';
import {
    Button, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight,
    View
} from "react-native";

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

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10}}>
                        <Image source={require('../Me/Img/default_avatar.png')}
                               style={{width: 50, height: 50, borderRadius: 25, marginLeft: 10}}/>
                        <View>
                            <Text style={{color: '#333333'}}>王珂（学生）</Text>
                            <Text>17 days ago</Text>
                        </View>
                    </View>
                    <Text style={{
                        color: '#555555',
                        fontSize: 17,
                        marginLeft: 10,
                        marginRight: 10
                    }}>请问我们学过的章节中哪些部分你认为最有用</Text>
                    <Text style={{
                        color: '#333333',
                        fontSize: 14,
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 15
                    }}>如题，请分别回答你认为最有用的章节，最有趣的地方，及最没意思的地方，有没有好的意见</Text>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Image source={require('../Configure/Resource/ic_msg.png')}
                               style={{width: 15, height: 15, marginLeft: 7}}/>
                        <Text style={{fontSize: 13, marginLeft: 3}}>4条评论</Text>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', height: 75}}>
                            <Image source={require('../Me/Img/default_avatar.png')}
                                   style={{width: 55, height: 55, marginLeft: 7}}/>
                            <View style={{flex: 1, marginLeft: 7}}>
                                <Text style={{fontSize: 14, color: '#333333'}}>
                                    常刚
                                </Text>
                                <Text>
                                    15 days gao
                                </Text>
                            </View>
                            <Text style={{marginRight: 20}}>赞</Text>
                        </View>
                        <Text style={{marginLeft: 69,  fontSize: 14,
                            color: '#555555',
                            marginBottom:7}}>cmd命令有用，虚拟机有趣 vlan没意思</Text>
                    </View>
                    <View style={{height: 1, backgroundColor: '#eeeeee'}}/>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', height: 75}}>
                            <Image source={require('../Me/Img/default_avatar.png')}
                                   style={{width: 55, height: 55, marginLeft: 7}}/>
                            <View style={{flex: 1, marginLeft: 7}}>
                                <Text style={{fontSize: 14, color: '#333333'}}>
                                    张海
                                </Text>
                                <Text>
                                    14 days gao
                                </Text>
                            </View>
                            <Text style={{marginRight: 20}}>赞</Text>
                        </View>
                        <Text style={{marginLeft: 69,  fontSize: 14,
                            color: '#555555',
                            marginBottom:7}}>虚拟机比较有用，命令比较有趣咯</Text>
                    </View>
                    <View style={{height: 1, backgroundColor: '#eeeeee'}}/>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', height: 75}}>
                            <Image source={require('../Me/Img/default_avatar.png')}
                                   style={{width: 55, height: 55, marginLeft: 7}}/>
                            <View style={{flex: 1, marginLeft: 7}}>
                                <Text style={{fontSize: 14, color: '#333333'}}>
                                    夏媛
                                </Text>
                                <Text>
                                    15 days gao
                                </Text>
                            </View>
                            <Text style={{marginRight: 20}}>赞</Text>
                        </View>
                        <Text style={{marginLeft: 69,  fontSize: 14,
                            color: '#555555',
                            marginBottom:7}}>子网掩饰有趣哦</Text>
                    </View>
                    <View style={{height: 1, backgroundColor: '#eeeeee'}}/>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', height: 75}}>
                            <Image source={require('../Me/Img/default_avatar.png')}
                                   style={{width: 55, height: 55, marginLeft: 7}}/>
                            <View style={{flex: 1, marginLeft: 7}}>
                                <Text style={{fontSize: 14, color: '#333333'}}>
                                    李航
                                </Text>
                                <Text>
                                    15 days gao
                                </Text>
                            </View>
                            <Text style={{marginRight: 20}}>赞</Text>
                        </View>
                        <Text style={{
                            marginLeft: 69,
                            fontSize: 14,
                            color: '#555555',
                            marginBottom:7
                        }}>虚拟机最有用，希望可以更详细，最有趣的我认为是误码识别那部分，最无聊的是...好像没有咯</Text>
                    </View>
                </ScrollView>
                <View style={{backgroundColor: '#555555', height: 0.5}}/>
                <View style={{
                    height: 50,
                    width: deviceWidth,
                    alignItems:'center',
                    flexDirection: 'row'
                }}>
                    <TextInput
                        style={{
                            height: 40,
                            borderRadius: 2,
                            marginLeft: 7,
                            flex:1,
                            borderWidth: 1,
                            borderColor: '#555555',
                        }}
                        placeholder={'撰写评论：'}
                        //输入框下划线
                        underlineColorAndroid={'transparent'}/>
                    <TouchableHighlight
                        activeOpacity={0.5} //透明度设置
                        underlayColor="#f0A1A1"  //点击后颜色
                        >
                        <Text style={{ height: 40,
                            borderRadius: 3,
                            marginLeft: 7,
                            marginRight:10,
                            backgroundColor:'#20A1A1',
                            color:'#ffffff',
                            textAlign:'center',
                            textAlignVertical:'center',
                            paddingLeft:12,
                            paddingRight:12
                           }}>发送</Text>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    lineViewStyle: {
        flexDirection: 'row'
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
        flex: 1
    },
    textStyleTwo: {
        height: 45,
        marginRight: 5,
        textAlignVertical: 'center',
        fontSize: 13,
        color: '#999999',
    }
});