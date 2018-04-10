import React, {Component} from 'react';
import {Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View} from "react-native";

var {width} = Dimensions.get('window').width;
//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');
export default class Kejian extends Component {

    static navigationOptions = {
        headerTitle: '课件',
    };
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
        data.push({key: '1', title: 'MOOC学习手册',  context: '中国大学MOOC-学生学习手册.word',fSize:'563.1KB' });
        data.push({key: '2', title: 'PDF版学习手册', context: '中国大学MOOC-学生学习手册.pdf',fSize:'543.4KB' });
        data.push({key: '3', title: '工具安装文件',  context: 'startunl-5.0-with-cm.zip',fSize:'21.7MB'});
        return (
            <View style={{flex: 1,}}>
                {/*<Button title='滚动到指定位置'*/}
                {/*onPress={() => {*/}
                {/*this._flatList.scrollToOffset({animated: true, offset: 2000});*/}
                {/*}}/>*/}
                <FlatList
                          ref={(flatList) => this._flatList = flatList}
                    // ListHeaderComponent={this._header}
                    // ListFooterComponent={this._footer}
                          ItemSeparatorComponent={this._separator} //分割线
                          renderItem={this._renderItem}  // 每项布局
                          onRefresh={this.refreshing}  //刷新
                          refreshing={false} //在加载数据时，是否显示正在加载符号
                          onEndReachedThreshold={0}//此参数是一个比值,0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                          // onEndReached={this._onload} //当滚动到距离底部0距离时调用
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

                <View style={{height: 80, backgroundColor: 'white',justifyContent:'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../Configure/Resource/ic_qita.png')} style={{marginLeft: 10,width:22,height:22}}/>
                        <Text style={{marginLeft:15,fontSize:15,color:'#333333'}}>{item.item.title}</Text>
                    </View>
                    <View style={{flexDirection: 'row',marginTop:15}}>
                        <Image source={require('../Configure/Resource/ic_word_wj.png')} style={{marginLeft: 45,width:24,height:24}}/>
                        <Text style={{marginLeft:15,flex:1,fontSize:15,color:'#333333'}}>{item.item.context}</Text>
                        <Text style={{marginRight:15,fontSize:15,color:'#333333'}}>{item.item.fSize}</Text>
                    </View>
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
        return <View style={{height: 1, backgroundColor: '#eeeeee',marginLeft:5,marginRight:5}}/>;
    }
    _onItemClick(item) {
        console.log(this.props.navigation);
        this.props.clickCallBack(item);
    }
}
const styles = StyleSheet.create({
    txt: {textAlign: 'center', textAlignVertical: 'center', color: '#333333', fontSize: 30,}
})
