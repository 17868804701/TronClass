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
  ScrollView,
  TouchableOpacity
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
class CommonBox extends Component<Props> {
  constructor(props) {
	super(props);
	this.props.bottomCallBack = null;
	this.state = {};
  }
  
  render() {
	return (
		<TouchableOpacity onPress={() => {
		  this.onClickCell(this.props.title)
		}}>
		  <View style={{
			backgroundColor: 'white',
			width: (width - 4) * 0.25,
			height: (width - 4) * 0.25,
			alignItems: 'center',
			justifyContent: 'center',
			marginRight: 1,
			marginBottom: 1
		  }}>
			<Image style={{width: '35%', height: '35%', marginBottom: 10}}
				   source={require('../../Configure/Resource/faxian.png')}/>
			<Text style={{width: '100%', height: '25%', textAlign: 'center'}}>
			  {this.props.title}
			</Text>
		  </View>
		</TouchableOpacity>
	);
  }
  
  onClickCell(data) {
	if (this.props.bottomCallBack == null) return;
	this.props.bottomCallBack(data);
  }
}
type Props = {};
export default class ClassHome extends Component<Props> {
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle: '课程'
  })
  
  render() {
	return (
		<ScrollView>
		  {this._renderTopView()}
		  {this._renderBottomView()}
		</ScrollView>
	);
  }
  
  _renderTopView() {
	return (
		
		<View>
		  <Image style={styles.topViewStyle} source={require('../../Configure/Resource/list_icon.png')}/>
		  <View style={styles.shadowViewStyle}>
			<Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
			  {this.props.navigation.state.params.ClassItem.name}
			</Text>
		  </View>
		  <View style={{
			backgroundColor: 'white',
			flexDirection: 'row',
			height: 44,
			alignItems: 'center',
			justifyContent: 'space-between'
		  }}>
			<Text style={{marginLeft: 10, color: 'gray', fontSize: 16}}>1位授课教师</Text>
			<View style={{flexDirection: 'row', marginRight: 10, alignItems: 'center'}}>
			  <Image style={{width: 25, height: 25, marginRight: 5}}
					 source={require('../../Configure/Resource/faxian.png')}/>
			  <Text style={{color: 'gray', fontSize: 13}}>相金妮</Text>
			</View>
		  </View>
		</View>
	);
  }
  
  _renderBottomView() {
	return (
		<View style={{marginTop: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
		  <CommonBox title="章节" imageName="" bottomCallBack={(data)=>this.pushNextView(data)}/>
		  <CommonBox title="公告" imageName="" bottomCallBack={(data)=>this.pushNextView(data)}/>
		  <CommonBox title="课程信息" imageName="" bottomCallBack={(data)=>this.pushNextView(data)}/>
		  <CommonBox title="课件" imageName="" bottomCallBack={(data)=>this.pushNextView(data)}/>
		  <CommonBox title="作业" imageName="" bottomCallBack={(data)=>this.pushNextView(data)}/>
		  <CommonBox title="测试" imageName="" bottomCallBack={(data)=>this.pushNextView(data)}/>
		  <CommonBox title="讨论" imageName="" bottomCallBack={(data)=>this.pushNextView(data)}/>
		  <CommonBox title="课堂" imageName="" bottomCallBack={(data)=>this.pushNextView(data)}/>
		  <CommonBox title="点名" imageName="" bottomCallBack={(data)=>this.pushNextView(data)}/>
		  <CommonBox title="学习分析" imageName="" bottomCallBack={(data)=>this.pushNextView(data)}/>
		  <CommonBox title="课堂表现" imageName="" bottomCallBack={(data)=>this.pushNextView(data)}/>
		</View>
	);
  }
  
  pushNextView(data) {
    
    if (data == '公告') {
	  this.props.navigation.navigate('ClassNotification', {title:data})
	} else if (data == '讨论') {
	  this.props.navigation.navigate('ClassDiscussArea', {title:data})
	} else if (data == '测试') {
	  this.props.navigation.navigate('ClassExamination', {title:data})
	}else if (data == '学习分析') {
	  this.props.navigation.navigate('ClassStudyAnalyse', {title:data})
	}else if (data == '课堂表现') {
        this.props.navigation.navigate('KeTangBiaoXian')
    }else if (data == '课程信息') {
      console.log(this.props.navigation);
	  this.props.navigation.navigate('ClassInfo', {ClassItem: this.props.navigation.state.params.ClassItem})
	}else{
      return;
	}
  
  }
  
}
const styles = StyleSheet.create({
  topViewStyle: {
	width: width,
	height: width * 0.55,
  },
  shadowViewStyle: {
	width: width,
	height: width * 0.55,
	backgroundColor: 'black',
	opacity: 0.3,
	position: 'absolute',
	justifyContent: 'center',
	alignItems: 'center',
	flex: 1
  },
});