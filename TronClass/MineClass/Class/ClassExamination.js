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
  SectionList,
  TextInput,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class ClassExamination extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle:'测试'
  });
  
  render() {
	return (
		this._renderCell()
	);
  }
  
  _renderCell() {
    
    return(
		<TouchableOpacity onPress={()=>{this.clickCell()}}>
		  <View style={{justifyContent:'center', backgroundColor:'white', height:60}}>
			<Text style={{marginLeft: 10, fontSize: 17}}>
			  数据类型运算符与表达式
			</Text>
			<Text style={{marginTop:5, fontSize:14, marginLeft: 10}}>
			  未交：42 已交：0
			</Text>
		  </View>
		</TouchableOpacity>
	);
  }
  
  clickCell() {
    this.props.navigation.navigate('AnswerResult')
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