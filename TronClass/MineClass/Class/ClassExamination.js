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
  TextInput
} from 'react-native';

type Props = {};
export default class ClassExamination extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  
  _renderItemComponent = ({item})=>{
	return(
		<View>
		  <Text>
			哈哈哈
		  </Text>
		</View>
	);
  }
  
  
  render() {
	
	var sections = [];
	var itemArray = [];
	
	itemArray.push({name:'通用讨论区', count:'3'});
	itemArray.push({name:'学术讨论区', count:'8'});
	itemArray.push({name:'作业讨论区', count:'30'});
	itemArray.push({name:'课堂问题讨论区', count:'20'});
	itemArray.push({name:'其他', count:'4'});
	
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