/**
 * Created by qismsom on 2018/3/28.
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SectionList
} from 'react-native';

type Props = {};
export default class ClassInfo extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
	console.log(this.props.navigation);
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle: navigation.state.params.ClassItem.name
  });
  render() {
	return (
    <ScrollView>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>必选修别</Text>
                <Text style={{marginRight:10,color:"#333"}}>选修</Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>课程代码</Text>
                <Text style={{marginRight:10,color:"#333"}}>1654612315451220</Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>科目代码</Text>
                <Text style={{marginRight:10,color:"#333"}}>0283</Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>必选修别</Text>
                <Text style={{marginRight:10,color:"#333"}}>选修</Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>课程分类</Text>
                <Text style={{marginRight:10,color:"#333"}}></Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>学分</Text>
                <Text style={{marginRight:10,color:"#333"}}>2.0</Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>开课院系</Text>
                <Text style={{marginRight:10,color:"#333"}}>信息工程学院</Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>年班级</Text>
                <Text style={{marginRight:10,color:"#333"}}>3  A0000</Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>年班级</Text>
                <Text style={{marginRight:10,color:"#333"}}>3  A0000</Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>学年期</Text>
                <Text style={{marginRight:10,color:"#333"}}>2016  第二学期</Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>授课班级</Text>
                <Text style={{marginRight:10,color:"#333"}}>统本软件1401</Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>课程开始日期</Text>
                <Text style={{marginRight:10,color:"#333"}}>2018-02-08</Text>
            </View>
            <View style={styles.list}>
                <Text style={{marginLeft:10}}>课程结束日期</Text>
                <Text style={{marginRight:10,color:"#333"}}>2018-06-08</Text>
            </View>
            <View style={styles.list3}>
                <Text style={{marginLeft:10}}>授课教师</Text>
            </View>
            <View style={styles.list1}>
                <Image source={require("../../../images/201291893228996.jpg")} style={styles.img}></Image>
                <Text style={{marginLeft:10,fontSize:18}}>张龙</Text>
            </View>
            <View style={styles.list1}>
                <Image source={require("../../../images/201291893228996.jpg")} style={styles.img}></Image>
                <Text style={{marginLeft:10,fontSize:18}}>张迪</Text>
            </View>
            <View style={styles.list3}>
                <Text style={{marginLeft:10}}>课程介绍</Text>
            </View>
            <View style={{width:'100%',borderColor:"#e0e0e0",borderBottomWidth:0,padding:10,justifyContent:"space-between",flexDirection:"row",alignItems:"center",backgroundColor:"white"}}>
                <Text style={{marginLeft:10,fontSize:16}}>React Native (简称RN)是Facebook于2015年4月开源的跨平台移动应用开发框架，是Facebook早先开源的UI框架 React 在原生移动应用平台的衍生产物，目前支持iOS和安卓两大平台。RN使用Javascript语言，类似于HTML的JSX，以及CSS来开发移动应用，因此熟悉Web前端开发的技术人员只需很少的学习就可以进入移动应用开发领域。</Text>
            </View>
    </ScrollView>
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
    list:{
        width:'100%',height:35,borderColor:"#e0e0e0",borderBottomWidth:0,justifyContent:"space-between",flexDirection:"row",alignItems:"center",backgroundColor:"white"
    }
    ,list1:{
        width:'100%',height:70,borderColor:"#e0e0e0",borderBottomWidth:0,flexDirection:"row",alignItems:"center",backgroundColor:"white"
    },
    list3:{
        width:'100%',height:40,marginTop:20,borderColor:"#e0e0e0",borderBottomWidth:1,justifyContent:"space-between",flexDirection:"row",alignItems:"center",backgroundColor:"white"
    },
    img:{
        width:50,height:50,borderRadius:25,marginLeft:10
    }
});