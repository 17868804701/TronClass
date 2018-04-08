import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";

var {width} = Dimensions.get('window').width;
export default class Taolun extends Component {

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
        data.push({key: '1', title: '新帖子', time: '03.01 08：44 am', name:'王珂',context: '在课程', gTitle: 'Excel从入门到精通', cContext: '中发布了新帖子'});
        data.push({key: '2', title: '讨论区开放', time: '03.01 08：44 am', name:'设计模式',context: '的讨论区', gTitle: '工厂方法的模式应用程序阅读',cContext: '已于2017.0405开放'});
        data.push({key: '3', title: '新帖子', time: '03.01 08：44 am',name:'陈圆圆', context: '在课程', gTitle: 'Excel从入门到精通',cContext: '中发布了新帖子'});
        data.push({key: '4', title: '新帖子', time: '03.01 08：44 am', name:'张晓军',context: '在课程', gTitle: '操作系统原理',cContext: '中发布了新帖子'});
        data.push({key: '5', title: '新帖子', time: '03.01 08：44 am', name:'闫文凯',context: '在课程', gTitle: 'Excel从入门到精通',cContext: '中发布了新帖子'});
        data.push({key: '6', title: '新帖子', time: '03.01 08：44 am', name:'焦雅雯',context: '在课程', gTitle: '设计模式',cContext: '中发布了新帖子'});
        data.push({key: '7', title: '新帖子', time: '03.01 08：44 am',name:'王璇', context: '在课程', gTitle: 'Excel从入门到精通',cContext: '中发布了新帖子'});
        data.push({key: '8', title: '新帖子', time: '03.01 08：44 am',name:'韩菲', context: '在课程', gTitle: 'Excel从入门到精通',cContext: '中发布了新帖子'});
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
                    <Image source={require('../Configure/Resource/kk.png')} style={{marginLeft: 10}}/>
                    <View style={{marginLeft: 7}}>
                        <Text style={{color: '#333333'}}>{item.item.title}</Text>
                        <Text style={{marginTop: 5}}>{item.item.time}</Text>
                    </View>
                </View>
                <Text style={{
                    color: '#20A1A1',
                    fontSize: 16,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginRight: 10
                }}>{item.item.name}
                    <Text style={{color: '#333333'}}>{item.item.context}
                        <Text style={{color: '#20A1A1'}}>{item.item.gTitle}
                            <Text style={{color: '#333333'}}>
                                {item.item.cContext}
                            </Text>
                        </Text>
                    </Text>
                </Text>
            </View>
            </TouchableHighlight>
        );

    }
    _onItemClick(item) {
        // alert(item.item.context);
        console.log(this.props.navigation);
        this.props.clickCallBack(item);
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
