import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";

var {width} = Dimensions.get('window').width;
export default class Qita extends Component {
    constructor(props) {
        super(props);
    }

    refreshing() {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('刷新成功')
        }, 1500)
    }

    _onload() {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('加载成功')
        }, 1500)
    }

    render() {
        var data = [];
        data.push({key: '1', title: '开课通知', time: '03.01 08：44 am', context: '课程【UMI系统建模与分析】', gTitle: '已于 2017-04-24 开课'});
        data.push({key: '2', title: '学习活动开放', time: '02.20 08：44 am', context: '课程【PHP程序设计】', gTitle: '参考文件 第十章 网络编程 已于2017.04.27 14:18发布'});
        data.push({key: '3', title: '课程即将开始', time: '02.18 08：44 am', context: '课程【UMI系统建模与分析】发布公告', gTitle: '将于 2017-04-24 开课'});
        data.push({key: '4', title: '学习活动开放', time: '02.14 08：44 am', context: '课程【PHP程序设计】', gTitle: '参考文件 数据库管理工具 已于2017.04.27 14:18发布'});
        data.push({key: '5', title: '学习活动开放', time: '02.12 08：44 am', context: '课程【PHP程序设计】', gTitle: '参考文件 PHP帮助手册 已于2017.04.27 14:18发布'});
        data.push({key: '9', title: '开课通知', time: '02.07 08：44 am', context: '课程【人文视野中的生态学】发布公告', gTitle: '已于 2017-04-24 开课'});
        data.push({key: '10', title: '课程即将开始', time: '02.05 08：44 am', context: '课程【人文视野中的生态学】发布公告', gTitle: '将于 2017-04-24 开课'});
        return (
            <View style={{flex: 1,}}>
                {/*<Button title='滚动到指定位置'*/}
                {/*onPress={() => {*/}
                {/*this._flatList.scrollToOffset({animated: true, offset: 2000});*/}
                {/*}}/>*/}
                <FlatList style={{width: width,}}
                          ref={(flatList) => this._flatList = flatList}
                    // ListHeaderComponent={this._header}
                    // ListFooterComponent={this._footer}
                          ItemSeparatorComponent={this._separator} //分割线
                          renderItem={this._renderItem}  // 每项布局
                          onRefresh={this.refreshing}  //刷新
                          refreshing={false} //在加载数据时，是否显示正在加载符号
                          onEndReachedThreshold={0}//此参数是一个比值,0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                          onEndReached={this._onload} //当滚动到距离底部0距离时调用
                          numColumns={1}  //暂不支持瀑布流
                    // columnWrapperStyle={{
                    //     borderWidth: 2,
                    //     borderColor: 'black',
                    //     paddingLeft: 20
                    // }}
                    // horizontal={false} //水平布局模式
                    //       getItemLayout={(data, index) => ({length: 120, offset: (100 + 10) * index, index})} //设置行高,行高固定时设置
                          data={data}>
                </FlatList>
            </View>);
    }

    _renderItem = (item) => {
        return (
            <TouchableHighlight
                onPress={()=>this._onItemClick(item)}
                underlayColor="#B5B5B5"  //点击后颜色
            >
            <View style={{height: 120, backgroundColor: 'white'}}>
                <View style={{flexDirection: 'row', marginTop: 7, alignItems: 'center'}}>
                    <Image source={require('../Configure/Resource/ic_qita.png')} style={{marginLeft: 10,width:55,height:55}}/>
                    <View style={{marginLeft: 7}}>
                        <Text style={{color: '#333333'}}>{item.item.title}</Text>
                        <Text style={{marginTop: 5}}>{item.item.time}</Text>
                    </View>
                </View>
                <Text style={{
                    color: '#333333',
                    fontSize: 15,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginRight: 10
                }}>{item.item.context}
                    <Text style={{color: '#20A1A1'}}>{item.item.gTitle}</Text>
                </Text>
            </View>
            </TouchableHighlight>
        );

    }
    _header = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是头部</Text>;
    }
    _footer = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是尾部</Text>;
    }
    _separator = () => {
        return <View style={{height: 10, backgroundColor: '#eeeeee'}}/>;
    }
    _onItemClick(item) {
        console.log(this.props.navigation);
        this.props.clickCallBack(item);
    }
}
const styles = StyleSheet.create({
    txt: {textAlign: 'center', textAlignVertical: 'center', color: '#333333', fontSize: 30,}
})
