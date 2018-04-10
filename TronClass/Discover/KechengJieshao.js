/**
 * Created by qismsom on 2018/3/26.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import KechengMulu from "./KechengMulu";
import KechengJianjie from "./KechengJianjie";
import KechengPingJia from "./KechengPingJia";
type Props = {};
export default class KechengJieshao extends Component{
    static navigationOptions = {
        headerTitle: '课程介绍',
    };
    constructor(props){
        super(props);
        this.state={
            name:"PPT从入门到精通"
        }
    }
    render() {
        return (
            <View style={{ flex: 1 ,backgroundColor: 'white',}}>
               <Image source={require("../../images/ppt.jpg")} style={{width:'100%'}}></Image>
                <View style={{width:'95%',marginLeft:'2.5%',marginTop:15}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#5f5f5f'}}>{this.state.name}</Text>
                    <Text style={{fontSize:14,color:'black',marginTop:20}}>开课  2017.06.07</Text>
                    <Text style={{fontSize:14,color:'black',marginTop:20}}>课程评分 <Text style={{color:"#20a1a1"}}>⭐⭐⭐⭐⭐⭐</Text>      <Text style={{color:"#20a1a1"}}>10.0</Text>分</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('ClassHome', {ClassItem: {name: this.state.name, professior: "软件工程", classStatus: "进行中", key: "6"}
                    })
                }}>
                     <View style={{width:'90%',height:50,backgroundColor:"#ff7800",justifyContent:"center",alignItems:"center",marginLeft:'5%',marginTop:15,borderRadius:10}}>
                        <Text style={{color:'white',fontSize:18}}>进入课程</Text>
                    </View>
                </TouchableOpacity>
                <ScrollableTabView style={{marginTop:20}}
                    renderTabBar={() => <DefaultTabBar/>}
                    tabBarUnderlineStyle={{
                        height: 1,
                        backgroundColor: '#20A1A1',
                    }}
                    tabBarBackgroundColor='#ffffff'
                    tabBarActiveTextColor='#20A1A1'
                    tabBarInactiveTextColor="#333333"
                    scrollWithoutAnimation={true}
                    initialPage={0}
                >
                    <KechengMulu
                        tabLabel='课程目录'
                    />
                    <KechengJianjie
                        tabLabel='课程简介'
                    />
                    <KechengPingJia
                        tabLabel='课程评价'
                    />
                </ScrollableTabView>
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