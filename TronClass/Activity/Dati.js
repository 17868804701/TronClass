import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import Swiper from 'react-native-swiper'
// var {width} = Dimensions.get('window').width;
//获取设备的宽度和高度
var {
    height,
    width
} = Dimensions.get('window');

export default class Dati extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentIndex: '1'
        };
    }

    static navigationOptions = {
        headerTitle: '答题测试',
    };

    _onIndexChanged(index) {
        // this.setState({
        //         currentIndex: index
        //     }
        // );
        this.setState(()=>{
            return {currentIndex:index+1};
        });
    }

    // _nextButton = () => {
    //     return <Text style={{backgroundColor: 'white',color:'#000000'}}>下一题</Text>;
    // }
    // _prevButton = () => {
    //     return <Text style={{backgroundColor: 'white',color:'#000000'}}>上一题</Text>;
    // }
    _renderSwiper() {
        return (
            <View style={{backgroundColor: '#ffffff', flex: 1, justifyContent: 'space-around'}}>
                <View style={{flexDirection: 'row', backgroundColor: '#ffffff', height: 45, alignItems: 'center'}}>
                    <Text style={{color: '#20A1A1', marginLeft: 10}}>{this.state.currentIndex}</Text>
                    <Text>/30</Text>
                </View>
                <Swiper
                    style={{backgroundColor: 'white', flex: 1,}}
                    height={height - 95}
                    horizontal={true}
                    autolay={true}
                    loop={true}  //自动轮播
                    paginationStyle={{bottom: 10}}  //小圆点位置
                    showPagination={false} //不显示下方小圆点
                    // onIndexChanged={()=>{this._onIndexChanged();}} //两种方法
                    onIndexChanged={this._onIndexChanged.bind(this)}
                    // showsButtons={true} //左右翻页箭头
                    // nextButton={this._nextButton}
                    // prevButton{this._prevButton}
                    dotStyle={{backgroundColor: 'rgba(0,0,0,.2)', width: 0, height: 0}}
                    activeDotStyle={{backgroundColor: 'rgba(0,0,0,.5)', width: 0, height: 0}}>
                    <View style={styles.swiperItem}>
                        <View style={{backgroundColor: '#f0f0f0', padding: 10}}>
                            <Text>判断题（1.0分）</Text>
                            <Text>DHCP服务器只能给客户端提供IP地址和网关地址，而不能提供DNS服务器的IP地址。</Text>

                        </View>
                    </View>
                    <View style={styles.swiperItem}>
                        <View style={{backgroundColor: '#f0f0f0', padding: 10}}>
                            <Text>多选题（1.0分）</Text>
                            <Text>网络中所采用的安全机制主要有哪些</Text>
                        </View>
                    </View>
                </Swiper>
                <View style={{
                    height: 50,
                    marginRight: 0.5,
                    backgroundColor: '#f0f0f0',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <Text style={{color: '#555555', fontSize: 15}}>上一题</Text>
                    <Text style={{color: '#555555', fontSize: 15}}>试题列表</Text>
                    <Text style={{color: '#555555', fontSize: 15}}>下一题</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderSwiper()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    swiperStyle: {},
    swiperItem: {
        backgroundColor: '#ffffff',
    },
    imageStyle: {
        flex: 1,
    },
})