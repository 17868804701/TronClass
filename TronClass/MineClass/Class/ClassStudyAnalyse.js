/**
 * Created by qismsom on 2018/3/27.
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SectionList
} from 'react-native';

type Props = {};
export default class ClassStudyAnalyse extends Component<Props> {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  static navigationOptions = ({navigation}) =>({
	headerTitle: '学习分析'
  })
  
  _renderItemComponent = ({item}) => {
	return(
		<View>
		
		</View>
	)
  }
  
  render() {
    
    var sections = [];
    
    var itemArray = [];
	
    itemArray.push({iconPath:'', count:'333', countName: '课程访问次数', time:'3小时17分32秒', timeName:'课程访问时长'});
	itemArray.push({iconPath:'', count:'0', countName: '影音光看次数', time:'0小时0分0秒', timeName:'课程访问时长'});
	itemArray.push({iconPath:'', count:'0', countName: '发表帖子', time:'0小时0分0秒', timeName:'课程访问时长'});
	itemArray.push({iconPath:'', count:'4', countName: '阅读公告', time:'0小时0分0秒', timeName:'课程访问时长'});
	itemArray.push({iconPath:'', count:'6', countName: '文件下载数', time:'3小时17分32秒', timeName:'课程访问时长'});
	itemArray.push({iconPath:'', count:'4', countName: '作业交付数', time:'3小时17分32秒', timeName:'课程访问时长'});
	itemArray.push({iconPath:'', count:'18', countName: '出勤数', time:'3小时17分32秒', timeName:'课程访问时长'});
    
    sections.push({data: itemArray});
    
	return (
		<SectionList
			renderItem={this._renderItemComponent}
			sections={sections}
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