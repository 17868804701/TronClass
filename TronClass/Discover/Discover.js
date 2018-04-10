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
    Image,
    TouchableOpacity
} from 'react-native';

type Props = {};
export default class SectionListTest extends Component{
    constructor(props){
        super(props);
    }

    //渲染列表
    _renderItem = (info) => {
        const imgUrl = info.item.title;
        const name = info.item.name;
        const status = info.item.status;
        const num = info.item.num;
        const score = info.item.score;
        return <TouchableOpacity onPress={()=>{this.props.navigation.navigate('KechengJieshao')}}>
                    <View style={{flexDirection:"row",justifyContent:"center",height:120}}>
                        <View style={{width:"40%",marginLeft:-10,height:100,borderWidth:0,borderColor:"red",marginTop:10}}>
                            <Image source={require('../../images/list_icon.png')} style={{height:'100%',with :"100%"}}/>
                        </View>
                        <View style={{width:"50%",height:100,marginLeft:10}}>
                            <View style={{flexDirection:'column',height:40,marginTop:20}}>
                                <Text key={info.section.key} style={{textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 17}}>{name}</Text>
                                <Text key={info.section.key} style={{textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 13 }}>{status}</Text>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-between",height:40,marginTop:10}}>
                                <Text key={info.section.key} style={{textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 13 }}>{num}名学生</Text>
                                <Text key={info.section.key} style={{textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 13}}>评分：{score}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
    };
    //分组
    _sectionComp = (info) => {
        const txt = info.section.key;
        return <View style={{ height: 25,marginTop:10,marginBottom:10,marginLeft:10, textAlign: 'left', justifyContent:"center",borderLeftWidth:5, backgroundColor: 'white', color: 'black', fontSize: 14,borderLeftColor:"#20a1a1" }}>
                    <Text style={{marginLeft:10}}>{txt}</Text>
                </View>
    };

    render() {
        const sections = [
            { key: "热门课程", data: [{ imgUrl: "../../images/list_icon.png",name:"不可不学的化妆课",status:"进行中",num:"270",score:"0.5"},{ imgUrl: "阿童木",name:"不可不学的化妆课",status:"进行中",num:"270",score:"0.5"},{ imgUrl: "阿童木",name:"不可不学的化妆课",status:"进行中",num:"270",score:"0.5"}] },
            { key: "新增课程", data: [{ imgUrl: "../../images/list_icon.png",name:"不可不学的化妆课",status:"进行中",num:"270",score:"0.5"},{ imgUrl: "阿童木",name:"不可不学的化妆课",status:"进行中",num:"270",score:"0.5"},{ imgUrl: "阿童木",name:"不可不学的化妆课",status:"进行中",num:"270",score:"0.5"},{ imgUrl: "阿童木",name:"不可不学的化妆课",status:"进行中",num:"270",score:"0.5"},{ imgUrl: "阿童木",name:"不可不学的化妆课",status:"进行中",num:"270",score:"0.5"}] }
        ];
        return (

            <View style={{ flex: 1 ,backgroundColor: 'white',}}>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={sections}
                    //设置列表之间的样式，边框
                    ItemSeparatorComponent={() => <View style={{height:1,backgroundColor:"#e0e0e0"}}></View>}
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