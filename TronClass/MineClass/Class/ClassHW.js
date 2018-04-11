/**
 * Created by qismsom on 2018/4/11.
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  TextInput,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class ClassHW extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle:'作业'
  });
  
  _renderItemCompent = ({item}) => {
	return (
		<TouchableOpacity onPress={()=>{this.clickCell()}}>
		  <View style={{justifyContent:'center', backgroundColor:'white', height:60, borderBottomWidth:0.5 ,borderColor:'#F0F0F0'}}>
			<Text style={{marginLeft: 10, fontSize: 17}}>
			  {item.name}({item.score})
			</Text>
			<Text style={{marginTop:5, fontSize:14, marginLeft: 20, color:'#C0C0C0'}}>
			  未交：{item.unCommit} 已交：{item.commit} 已批：{item.reviewCount}
			</Text>
		  </View>
		</TouchableOpacity>
	);
  }
  
  render() {
  
	var sections = [];
	var itemArray = [];
 
	itemArray.push({key:'1', name:'【课堂练习】求e近似值',unCommit:'10',commit:'10',reviewCount:'5',score:'5分'});
	itemArray.push({key:'2', name:'【第5周编程题】分队列',unCommit:'10',commit:'10',reviewCount:'5',score:'5分'});
	itemArray.push({key:'3', name:'【第4周编程题】求e近似值',unCommit:'10',commit:'10',reviewCount:'5',score:'5分'});
	itemArray.push({key:'4', name:'单元测试---数据类型、运算符表达式',unCommit:'10',commit:'10',reviewCount:'5',score:'5分'});
	itemArray.push({key:'5', name:'课堂操作案例文案',unCommit:'10',commit:'10',reviewCount:'5',score:'5分'});
	sections.push({key:'s1', data:itemArray});
 
	return (
		<SectionList
			renderItem={this._renderItemCompent}
			sections={sections}
			style={{backgroundColor: 'white'}}
		/>
	);
  }
  
  clickCell() {
	this.props.navigation.navigate('HWDetail')
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
  fullScreen: {
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
  },
});