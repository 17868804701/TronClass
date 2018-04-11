/**
 * Created by qismsom on 2018/3/26.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native';
type Props = {};
export default class KeJian extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({navigation}) => ({
        headerTitle: "课件"
    })
    //渲染列表
    _renderItem = (info) => {
        const name = info.item.name;
        const txt = info.section.key;
        return <TouchableOpacity>
            <View style={{flexDirection: "row", alignItems: "center", height: 42,borderBottomColor:"#e0e0e0",borderBottomWidth:0}}>
                <Image source={require('../../../images/ppt.png')} style={{height:23,width:23,marginLeft:10 ,display:txt=='PPT'?"flex":"none"}}></Image>
                <Image source={require('../../../images/shipin.png')} style={{height:23,width:23,marginLeft:11 ,display:txt=='视频'?"flex":"none"}}></Image>
                <Image source={require('../../../images/ppt.png')} style={{height:23,width:23,marginLeft:10 ,display:txt=='Word'?"flex":"none"}}></Image>
                <Text style={{marginLeft:10,fontSize:16}}>{name}</Text>
            </View>
        </TouchableOpacity>
    };
    //分组
    _sectionComp = (info) => {
        const txt = info.section.key;
        return <View style={{
            height: 20,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 10,
            justifyContent: "center",
            borderLeftWidth: 5,
            backgroundColor: 'white',
            borderLeftColor: "#20a1a1"
        }}>
            <Text style={{color: 'black',fontSize: 14,textAlign: 'left',marginLeft: 10}}>{txt}</Text>
        </View>
    };

    render() {
        const sections = [
            {
                key: "视频",
                data: [
                        {
                            key: '1',
                            img:'../../../images/ppt.png',
                            name: "第一章  java环境搭建",
                        },
                    {
                        key: '1',
                        img:'../../../images/ppt.png',
                        name: "第二章 java基础 ",
                    },
                    {
                        key: '1',
                        img:'../../../images/ppt.png',
                        name: "第三章  java数组",
                    }
                     ]
            },
            {
                key: "PPT",
                data: [
                        {
                            key: '5',
                            imgUrl: "../../images/list_icon.png",
                            name: "简介",
                        },
                    {
                        key: '1',
                        img:'../../../images/ppt.png',
                        name: "入门到精通",
                    },
                    {
                        key: '1',
                        img:'../../../images/ppt.png',
                        name: "结论",
                    }
                ]
            },
            {
                key: "Word",
                data: [
                    {
                        key: '5',
                        imgUrl: "../../images/list_icon.png",
                        name: "不可不学的化妆课",
                    },
                    {
                        key: '1',
                        img:'../../../images/ppt.png',
                        name: "不可不学的化妆课",
                    },
                    {
                        key: '1',
                        img:'../../../images/ppt.png',
                        name: "不可不学的化妆课",
                    }
                ]
            }
        ];
        return (

            <View style={{flex: 1, backgroundColor: 'white',}}>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={sections}
                    //设置列表之间的样式，边框
                    ItemSeparatorComponent={() => <View style={{height:0, backgroundColor: "#e0e0e0"}}></View>}
                    // ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
                    // ListFooterComponent={() => <View style={{ backgroundColor: '#20a1a1', alignItems: 'center', height: 20,justifyContent:'center'}}></View>}
                />
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