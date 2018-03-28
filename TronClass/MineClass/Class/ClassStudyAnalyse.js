/**
 * Created by qismsom on 2018/3/27.
 */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SectionList
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

type Props = {};
export default class ClassStudyAnalyse extends Component<Props> {
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle: '学习分析'
  })
  _renderItemComponent = ({item}) => {
	console.log(item.iconPath);
	return (
		<View style={styles.itemCellStyle}>
		  <Image style={{width: 32, height: 32, marginLeft:20}} source={{uri: item.iconPath}}/>
		  
		  <View style={{alignItems:'center', width:100}}>
			<Text style={{fontSize: 15, marginBottom:5}}>
			  {item.count}
			</Text>
			<Text style={{fontSize: 10, color:'gray'}}>
			  {item.countName}
			</Text>
		  </View>
		  <View style={{alignItems:'center', width:100}}>
			<Text numberOfLines={1} adjustsFontSizeToFit={true} style={{fontSize: 15, marginBottom:5}}>
			  {item.time}
			</Text>
			<Text style={{fontSize: 10, color:'gray'}}>
			  {item.timeName}
			</Text>
		  </View>
		</View>
	)
  }
  
  render() {
	var sections = [];
	var itemArray = [];
	itemArray.push({
	  iconPath: 'clock',
	  count: '333',
	  countName: '课程访问次数',
	  time: '3小时17分32秒',
	  timeName: '课程访问时长',
	  key: '1'
	});
	itemArray.push({
	  iconPath: 'play',
	  count: '0',
	  countName: '影音光看次数',
	  time: '0小时0分0秒',
	  timeName: '影片观看时长',
	  key: '2'
	});
	itemArray.push({
	  iconPath: 'message',
	  count: '0',
	  countName: '发表帖子',
	  time: '0',
	  timeName: '讨论总贴',
	  key: '3'
	});
	itemArray.push({
	  iconPath: 'voice',
	  count: '4',
	  countName: '阅读公告',
	  time: '1',
	  timeName: '公告总数',
	  key: '4'
	});
	itemArray.push({
	  iconPath: 'download',
	  count: '6',
	  countName: '文件下载数',
	  time: '37',
	  timeName: '总参考文件数',
	  key: '5'
	});
	itemArray.push({
	  iconPath: 'homeWork',
	  count: '4',
	  countName: '作业交付数',
	  time: '9',
	  timeName: '作业布置总数',
	  key: '6'
	});
	itemArray.push({
	  iconPath: 'active',
	  count: '18',
	  countName: '出勤数',
	  time: '32',
	  timeName: '点名数',
	  key: '7'
	});
	sections.push({data: itemArray});
	return (
		<View>
		  <Image style={{width:width, height:height}} source={{uri:'class_bg'}}/>
		  <SectionList
			  style={{position: 'absolute', width:width, height:height}}
			  renderItem={this._renderItemComponent}
			  sections={sections}
		  />
		</View>
	);
  }
}
const styles = StyleSheet.create({
  itemCellStyle: {
	flexDirection: 'row',
	justifyContent: 'space-around',
	backgroundColor: 'white',
	marginLeft: 20,
	marginRight: 20,
	marginTop: 20,
	height: 70,
	alignItems: 'center'
  },
});