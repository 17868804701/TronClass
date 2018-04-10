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
export default class SubMovie extends Component<Props> {
  constructor(props) {
	super(props);
	this.props.clickMovieItemCallBack=null
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
	  type: 'Movie',
	  name: 'React概述视频',
	  display: 'flex',
	  iconPath: 'play',
	  key: '1'
	});
	
	itemArray2.push({
	  type: 'Movie',
	  name: 'React小程序制作视频',
	  display: 'flex',
	  iconPath: 'play',
	  key: '4'
	});
	itemArray2.push({
	  type: 'Movie',
	  name: 'Java概述视频',
	  display: 'flex',
	  iconPath: 'play',
	  key: '5'
	});
	itemArray2.push({
	  type: 'Movie',
	  name: 'Java环境搭建视频',
	  display: 'flex',
	  iconPath: 'play',
	  key: '6'
	});
	
	itemArray3.push({
	  type: 'Movie',
	  name: 'C语言概述视频',
	  display: 'flex',
	  iconPath: 'play',
	  key: '7'
	});
	itemArray3.push({
	  type: 'Movie',
	  name: 'C语言程序制作视频',
	  display: 'flex',
	  iconPath: 'play',
	  key: '8'
	});
	
	
	sectionArray.push({
	  data: itemArray1,
	  title: '第1章 React',
	  display: 'flex',
	  iconName: 'arrowup',
	  key: 'S1'
	});
	sectionArray.push({
	  data: itemArray2,
	  title:'第2章 React和JAVA程序制作小体验',
	  display:'flex',
	  iconName: 'arrowup',
	  key:'S2'
	});
	
	sectionArray.push({
	  data: itemArray3,
	  title:'第3章 C语言',
	  display:'flex',
	  iconName: 'arrowup',
	  key:'S3'
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
  _renderSectionHeaderComponent = (info) => {
	return (
		<TouchableOpacity onPress={() => {
		  this.clickSectionHeaderAction(info.section)
		}}>
		  <View style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			backgroundColor: '#F0F0F0',
			height: 40
		  }}>
			<Text style={{marginLeft: 10,}}>
			  {info.section.title}
			</Text>
			<Image style={{width: 20, height: 20, marginRight: 10}}
				   source={{uri:info.section.iconName}}/>
		  </View>
		</TouchableOpacity>
	);
  }
  
  clickSectionHeaderAction(section) {
	section.display = (section.display == 'none') ? 'flex' : 'none';
	section.iconName = (section.iconName == 'arrowup') ? 'arrowdown' : 'arrowup';
	this.setState({sectionArray: this.state.sectionArray});
  }
  
  clickItemAction(item) {
	// 点击了movie跳转视频基本信息页面
	if (this.props.clickMovieItemCallBack == null) {
	  return;
	}else {
	  this.props.clickMovieItemCallBack();
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