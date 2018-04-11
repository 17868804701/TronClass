/**
 * Created by qismsom on 2018/4/9.
 */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SectionList
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
type Props = {};
export default class SubHomeWork extends Component<Props> {
  constructor(props) {
	super(props);
	
	this.props.clickHWCallBack=null;
	
	this.state = {
	  sectionArray: []
	};
  }
  
  componentDidMount() {
	var sectionArray = [];
	var itemArray1 = [];
	var itemArray2 = [];
	var itemArray3 = [];
	itemArray1.push({
	  type: 'HomeWork',
	  name: '【课堂练习】求e近似值',
	  display: 'flex',
	  iconPath: 'message',
	  key: '1'
	});
	itemArray1.push({
	  type: 'HomeWork',
	  name: '【第5周编程题】分队列',
	  display: 'flex',
	  iconPath: 'message',
	  key: '2'
	});
	itemArray1.push({
	  type: 'HomeWork',
	  name: '【第4周编程题】求e近似值',
	  display: 'flex',
	  iconPath: 'message',
	  key: '3'
	});
	
	itemArray2.push({
	  type: 'HomeWork',
	  name: '单元测试---数据类型、运算符表达式',
	  display: 'flex',
	  iconPath: 'message',
	  key: '4'
	});
	itemArray2.push({
	  type: 'HomeWork',
	  name: '课堂操作案例文案',
	  display: 'flex',
	  iconPath: 'message',
	  key: '5'
	});
	
	
	sectionArray.push({
	  data: itemArray1,
	  title: '模块3：结构化程序设计',
	  display: 'flex',
	  iconName: 'arrowup',
	  key: 'S1'
	});
	sectionArray.push({
	  data: itemArray2,
	  title:'模块2：数据类型及表达式',
	  display:'flex',
	  iconName: 'arrowup',
	  key:'S2'
	});
	
	this.setState({sectionArray: sectionArray})
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle: navigation.state.params.title
  });
  
  _renderItemCompent = (info) => {
	return (
		<TouchableOpacity onPress={() => {
		  this.clickItemAction(info.item)
		}}>
		  <View style={{
			backgroundColor: 'white',
			height: 30,
			flexDirection: 'row',
			alignItems: 'center',
			display: info.section.display
		  }}>
			<Image style={{width: 20, height: 20, marginRight: 10, marginLeft: 20}}
				   source={{uri:info.item.iconPath}}/>
			<Text>
			  {info.item.name}
			</Text>
		  </View>
		</TouchableOpacity>
	);
  }
  _renderSectionHeaderComponent = ({section}) => {
	return (
		<TouchableOpacity onPress={() => {
		  this.clickSectionHeaderAction(section)
		}}>
		  <View style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			backgroundColor: '#F0F0F0',
			height: 40
		  }}>
			<Text style={{marginLeft: 10,}}>
			  {section.title}
			</Text>
			<Image style={{width: 20, height: 20, marginRight: 10}}
				   source={{uri:section.iconName}}/>
		  </View>
		</TouchableOpacity>
	);
  }
  
  clickSectionHeaderAction(section) {
	// 点击外层section的header     根据section下的数组判断是否展开合并
	let sections = this.state.sectionArray.map((tmp) => {
	  if (tmp.key === section.key) {
		tmp.display = (tmp.display == 'none') ? 'flex' : 'none';
		tmp.iconName = (tmp.iconName == 'arrowup') ? 'arrowdown' : 'arrowup';
	  }
	  return tmp;
	})
	this.setState({sectionArray: sections});
  }
  
  clickItemAction(item) {
	if (this.props.clickHWCallBack == null) {
	  return;
	} else {
	  this.props.clickHWCallBack();
	}
  }
  
  render() {
	var sections = this.state.sectionArray;
	return (
		<SectionList
			renderItem={this._renderItemCompent}
			renderSectionHeader={this._renderSectionHeaderComponent}
			stickySectionHeadersEnabled={false}
			sections={sections}
			style={{backgroundColor: 'white'}}
		/>
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
});