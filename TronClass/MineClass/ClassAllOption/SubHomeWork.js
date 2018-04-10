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
	  type: 'A',
	  name: '初识Java',
	  display: 'flex',
	  iconPath: 'message',
	  key: '1'
	});
	
	itemArray2.push({
	  type: 'A',
	  name: 'JDK下程序开发',
	  display: 'flex',
	  iconPath: 'message',
	  key: '4'
	});
	itemArray2.push({
	  type: 'A',
	  name: 'eclipse工具下开发程序',
	  display: 'flex',
	  iconPath: 'message',
	  key: '5'
	});
	itemArray2.push({
	  type: 'A',
	  name: 'webstorm等工具使用',
	  display: 'flex',
	  iconPath: 'message',
	  key: '6'
	});
	
	itemArray3.push({
	  type: 'A',
	  name: 'Java小游戏开发',
	  display: 'flex',
	  iconPath: 'message',
	  key: '7'
	});
	itemArray3.push({
	  type: 'A',
	  name: 'Java环境搭建',
	  display: 'flex',
	  iconPath: 'message',
	  key: '8'
	});
	
	
	sectionArray.push({
	  data: itemArray1,
	  title: '第1章 初识JAVA',
	  display: 'flex',
	  iconName: 'arrowup',
	  key: 'S1'
	});
	sectionArray.push({
	  data: itemArray2,
	  title:'第2章 简单JAVA程序开发',
	  display:'flex',
	  iconName: 'arrowup',
	  key:'S2'
	});
	
	sectionArray.push({
	  data: itemArray3,
	  title:'第3章 JAVA进阶学习',
	  display:'flex',
	  iconName: 'arrowup',
	  key:'S3'
	});
	this.setState({sectionArray: sectionArray})
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle: navigation.state.params.title
  });
  
  _renderItemCompent = ({item}) => {
	var currentSection = null;
	this.state.sectionArray.map((section) => {
	  section.data.map((tmp) => {
		if (tmp.key == item.key) {
		  currentSection = section;
		}
	  })
	})
	return (
		<TouchableOpacity onPress={() => {
		  this.clickItemAction(item)
		}}>
		  <View style={{
			backgroundColor: 'white',
			height: 30,
			flexDirection: 'row',
			alignItems: 'center',
			display: currentSection.display
		  }}>
			<Image style={{width: 20, height: 20, marginRight: 10, marginLeft: 20}}
				   source={{uri:item.iconPath}}/>
			<Text>
			  {item.name}
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
	// 点击了外层section中的item    此item可能是sectionHeader，也可能是独立的item
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