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

import OpenFileTool from 'react-native-doc-viewer';
// var RNFS = require('react-native-fs');
// var SavePath = Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
type Props = {};
export default class SubFile extends Component<Props> {
  constructor(props) {
	super(props);
	this.state = {
	  sectionArray: [],
	  animating: false
	};
  }
  
  componentDidMount() {
	var sectionArray = [];
	var itemArray1 = [];
	var itemArray2 = [];
	var itemArray3 = [];
	itemArray1.push({
	  type: 'PPT',
	  name: '函数PPT',
	  display: 'flex',
	  iconPath: 'ppt',
	  key: '1'
	});
	
	itemArray2.push({
	  type: 'PPT',
	  name: '指针PPT',
	  display: 'flex',
	  iconPath: 'ppt',
	  key: '4'
	});
	itemArray2.push({
	  type: 'PPT',
	  name: '结构体PPT',
	  display: 'flex',
	  iconPath: 'ppt',
	  key: '5'
	});
	itemArray2.push({
	  type: 'PPT',
	  name: '数组PPT',
	  display: 'flex',
	  iconPath: 'ppt',
	  key: '6'
	});
	
	itemArray3.push({
	  type: 'PPT',
	  name: '数据类型PPT',
	  display: 'flex',
	  iconPath: 'ppt',
	  key: '7'
	});
	itemArray3.push({
	  type: 'PPT',
	  name: '表达式、运算符PPT',
	  display: 'flex',
	  iconPath: 'ppt',
	  key: '8'
	});
	
	
	sectionArray.push({
	  data: itemArray1,
	  title: '第一章 函数',
	  display: 'flex',
	  iconName: 'arrowup',
	  key: 'S1'
	});
	sectionArray.push({
	  data: itemArray2,
	  title:'第二章 高级类型',
	  display:'flex',
	  iconName: 'arrowup',
	  key:'S2'
	});
	
	sectionArray.push({
	  data: itemArray3,
	  title:'第三章 基础数据类型',
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
	// 查看PPT
	this.setState({animating: true});
	if (Platform.OS==='ios') {
	  OpenFileTool.openDoc
	  OpenFileTool.openDoc([{
		url:"https://calibre-ebook.com/downloads/demos/demo.docx",
		fileNameOptional:"test fileName"
	  }],(error,url)=>{
		if (error) {
		  this.setState({animating: false});
		  console.log(error);
		} else {
		  this.setState({animating: false});
		  console.log(url);
		}
	  })
	} else {
	  OpenFileTool.openDoc
	  OpenFileTool.openDoc([{
		url:"https://calibre-ebook.com/downloads/demos/demo.docx",
		fileNameOptional:"test fileName",
		cache:false,
		fileType:'docx'
	  }],(error,url)=>{
		if (error) {
		  this.setState({animating: false});
		  console.log(error);
		} else {
		  this.setState({animating: false});
		  console.log(url);
		}
	  })
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