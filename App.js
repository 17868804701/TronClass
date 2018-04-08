/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import MineClass from './TronClass/MineClass/MineClass'
import ClassHome from './TronClass/MineClass/Class/ClassHome'
import ClassNotification from './TronClass/MineClass/Class/ClassNotification'
import ClassDiscussArea from './TronClass/MineClass/Class/ClassDiscussArea'
import ClassStudyAnalyse from './TronClass/MineClass/Class/ClassStudyAnalyse'
import ClassInfo from './TronClass/MineClass/Class/ClassInfo'
import ClassExamination from './TronClass/MineClass/Class/ClassExamination'
import Discover from './TronClass/Discover/Discover'
import Activity from './TronClass/Activity/Activity'
import Me from './TronClass/Me/Me'
import EditInfo from "./TronClass/Me/EditInfo";
import Sixin from "./TronClass/Me/Sixin";
import Yjfk from "./TronClass/Me/Yjfk";
import AboutCk from "./TronClass/Me/AboutCk";
import DownloadManage from "./TronClass/Me/DownloadManage";
import HtmlDes from "./TronClass/Activity/HtmlDes";

const Tab = TabNavigator({
    //每一个页面的配置
    MineClass: {
        screen: MineClass,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '我的课程',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: '返回',
            //tab 的属性
            tabBarLabel: '我的课程',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./TronClass/Configure/Resource/kk.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),

        },
    },
    Discover: {
        screen: Discover,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '发现课程',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#20A1A1'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '发现课程',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./TronClass/Configure/Resource/faxian.png')}
                    style={[{height: 25, width: 25}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Activity: {
        screen: Activity,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '动态',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#20A1A1'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '动态',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./TronClass/Configure/Resource/dongtai.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Me: {
        screen: Me,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '我的',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#20A1A1'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./TronClass/Configure/Resource/wode.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },

}, {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: false,
    //是否允许在标签之间进行滑动
    swipeEnabled: false,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#20A1A1',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },
});

const Navi = StackNavigator(
    {
        Tab: {screen: Tab},
        ClassHome: {screen: ClassHome},
        ClassNotification: {screen: ClassNotification},
        ClassDiscussArea: {screen: ClassDiscussArea},
	    ClassStudyAnalyse:{screen: ClassStudyAnalyse},
	    ClassInfo:{screen: ClassInfo},
	    ClassExamination:{screen: ClassExamination},
        editInfo: {screen: EditInfo},
        siXin: {screen: Sixin},
        yjfk: {screen: Yjfk},
        aboutCk: {screen: AboutCk},
        loadManager: {screen: DownloadManage},
        HtmlDes:{
            screen:HtmlDes,
        }

    },
    {
        navigationOptions: {
            //stackNavigator的属性
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#20A1A1'},//导航栏的样式
            headerTintColor: 'white',
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
        }
    }
);

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Navi/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    tabbarDefaultIconStyle: {
        // platFormStyle
    },
    tabbarSelectedTitleStyle: {
        color: '#20A1A1'
    },
});
