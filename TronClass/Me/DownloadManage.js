import React, {Component} from 'react';
import TabNavigator from "react-navigation/src/navigators/TabNavigator";
import Yixiazai from "./Yixiazai";
import Zhengzaixiazai from "./Zhengzaixiazai";
import {StackNavigator} from "react-navigation";

// stackNavigator 顶部导航条，用来跳转页面和传递参数
// TabNavigator 底部标签栏，用来同屏幕切换不同界面

export default class DownloadManage extends Component{

    static navigationOptions = {
        headerTitle: '下载管理',
    };
    render(){
        return(<Navigator/>);
    }
}

const TabRoutConfigs={
    Yixiazai:{
        screen:Yixiazai,
        navigationOptions:({navigation})=>({
            tabBarLabel:'已下载',
        }),
    },
    Zhengzaixiazai:{
        screen:Zhengzaixiazai,
        navigationOptions:{
            tabBarLabel:'正在下载'
        },

    },
}
const TabNavigatorConfigs={
    initialRouteName:'Yixiazai', //初始显示的tab对应的路由名称
    swipeEnabled:true,//是否可滑动切换
    tabBarPosition:'top',
    lazy:true, //是否懒加载
    tabBarOptions:{
        activeTintColor:'#20A1A1',  //选中文字颜色
        activeBackgroundColor:'#ff0000', //选中背景色,属性不起作用
        inactiveTintColor:'#333333',  //未选中文字颜色
        inactiveBackgroundColor:'#00ff00', //属性不起作用？
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
    //路由页面的配置选项，它会被 RouteConfigs 参数中的 navigationOptions 的对应属性覆盖。
    NavigationOptions:{
        title:'标题',
        headerStyle:{backgroundColor:'#5da8ff'},
        headerTitleStyle:{color:'#333333'},
    },
    // 为各个页面设置统一的样式，比如背景色，字体大小等
    cardStyle:{backgroundColor:'#f0f0f0'},
};
const Navigator=StackNavigator(StackRouteConfigs,StackNavigatorConfigs);
