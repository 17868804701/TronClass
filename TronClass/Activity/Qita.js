import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, TextInput, View} from "react-native";

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

        data.push({key: 1, title: '公告发布', time: '03.01 08：44 am', context: '课程【人文视野中的生态学】发布公告', gTitle: '关于期末考试时间说明'});
        data.push({key: 1, title: '公告更新', time: '03.01 08：44 am', context: '课程【人文视野中的生态学】更新公告', gTitle: '学前必读：有关课程的特别说明！！！'});
        data.push({key: 1, title: '公告更新', time: '03.01 08：44 am', context: '课程【人文视野中的生态学】发布公告', gTitle: '有关课程的特别说明'});
        data.push({key: 1, title: '公告发布', time: '03.01 08：44 am', context: '你所在的机构发布了公告', gTitle: '2017级统招新生转专业通知'});
        data.push({key: 1, title: '公告发布', time: '03.01 08：44 am', context: '你所在的机构发布了公告', gTitle: '关于暑期网络选修课的特别说明'});
        data.push({key: 1, title: '公告发布', time: '03.01 08：44 am', context: '你所在的机构发布了公告', gTitle: '2017学年第一学期暑假网络课程选课事宜'});
        data.push({key: 1, title: '公告发布', time: '03.01 08：44 am', context: '课程【人文视野中的生态学】发布公告', gTitle: '关于期末考试时间说明'});
        data.push({key: 1, title: '公告更新', time: '03.01 08：44 am', context: '课程【人文视野中的生态学】发布公告', gTitle: '关于期末考试时间说明'});
        data.push({key: 1, title: '公告发布', time: '02.07 08：44 am', context: '课程【人文视野中的生态学】发布公告', gTitle: '关于期末考试时间说明'});
        data.push({key: 1, title: '公告更新', time: '02.05 08：44 am', context: '课程【人文视野中的生态学】发布公告', gTitle: '关于期末考试时间说明'});
        data.push({key: 1, title: '公告发布', time: '02.01 08：44 am', context: '课程【人文视野中的生态学】发布公告', gTitle: '关于期末考试时间说明'});
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
            <View style={{height: 120, backgroundColor: 'white'}}>
                <View style={{flexDirection: 'row', marginTop: 7, alignItems: 'center'}}>
                    <Image source={require('../Configure/Resource/kk.png')} style={{marginLeft: 10}}/>
                    <View style={{marginLeft: 7}}>
                        <Text style={{color: '#333333'}}>{item.item.title}</Text>
                        <Text style={{marginTop: 5}}>{item.item.time}</Text>
                    </View>
                </View>
                <Text style={{
                    color: '#333333',
                    fontSize: 16,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginRight: 10
                }}>{item.item.context}
                    <Text style={{color: '#20A1A1'}}>{item.item.gTitle}</Text>
                </Text>
            </View>
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
}
const styles = StyleSheet.create({
    txt: {textAlign: 'center', textAlignVertical: 'center', color: '#333333', fontSize: 30,}
})
