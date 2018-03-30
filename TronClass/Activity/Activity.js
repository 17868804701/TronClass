/**
 * Created by qismsom on 2018/3/26.
 */

import React, {Component} from 'react';
import TabNavigator from "react-navigation/src/navigators/TabNavigator";
import StackNavigator from "react-navigation/src/navigators/StackNavigator";
import Gonggao from "./Gonggao";
import Zuoye from "./Zuoye";
import Ceshi from "./Ceshi";
import Taolun from "./Taolun";
import Qita from "./Qita";

type Props = {};
export default class Activity extends Component<Props> {
    render(){
        return(<Navigator/>);
    }
}

const TabRoutConfigs={
    Gonggao:{
        screen:Gonggao,
        navigationOptions:({navigation})=>({
            tabBarLabel:'公告',
        }),
    },
    Zuoye:{
        screen:Zuoye,
        navigationOptions:{
            tabBarLabel:'作业'
        },
    },
    Ceshi:{
        screen:Ceshi,
        navigationOptions:{
            tabBarLabel:'测试'
        },
    },
    Taolun:{
        screen:Taolun,
        navigationOptions:{
            tabBarLabel:'讨论'
        },
    },
    Qita:{
        screen:Qita,
        navigationOptions:{
            tabBarLabel:'其他'
        },
    },
}
const TabNavigatorConfigs={
    initialRouteName:'Gonggao', //初始显示的tab对应的路由名称
    swipeEnabled:true,//是否可滑动切换
    tabBarPosition:'top',
    lazy:true, //是否懒加载
    tabBarOptions:{
        activeTintColor:'#20A1A1',  //选中文字颜色
        inactiveTintColor:'#333333',  //未选中文字颜色
        showLabel:true,
        //底部线条
        indicatorStyle:{
            height:2,//设置为0隐藏
            backgroundColor:'#20A1A1',
            justifyContent:'center',
            alignItems:'center',
        },
        // tabbar 样式
        style:{
            height:45,
            backgroundColor:'white',
        },
        //label样式即字体样式
        labelStyle:{
            fontSize:15
        },
        // scrollEnabled:true
    }
};
const Tab=TabNavigator(TabRoutConfigs,TabNavigatorConfigs);

const StackRouteConfigs={
    Tab:{
        screen:Tab,
    }
};
//导航器配置
const StackNavigatorConfigs={
    initialRouteName:'Tab',// 导航器组件中初始显示页面的路由名称，如果不设置，则默认第一个
    initialRouteParams:{initPara:'初始化页面参数'},
    // 为各个页面设置统一的样式，比如背景色，字体大小等
    cardStyle:{backgroundColor:'#f0f0f0'},
};
const Navigator=StackNavigator(StackRouteConfigs,StackNavigatorConfigs);