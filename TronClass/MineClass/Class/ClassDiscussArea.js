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
export default class ClassDiscussArea extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  static navigationOptions = ({navigation})=> ({
	
	headerTitle: '讨论区'
  })
  
  _renderItemComponent = ({item})=>{
	return(
		<View style={{backgroundColor: 'white', height:50, flexDirection:'row', alignItems:'flex-start'}}>
		  
		  <Image style={{width:25, height:25, marginTop: 10, marginLeft: 10, marginRight: 10}} source={{uri:'class_discuss'}}/>
		  
		  <View style={{marginTop: 10, marginRight: 10}}>
			<Text style={{fontSize:15}}>
			  {item.name}
			</Text>
			<Text style={{fontSize: 10, color: 'gray', marginTop: 5}}>
			  帖子数:{item.count}
			</Text>
		  </View>
		  
		</View>
	);
  }
  
  render() {
	
	var sections = [];
	var itemArray = [];
	
	itemArray.push({name:'通用讨论区', count:'3', key:'1'});
	itemArray.push({name:'学术讨论区', count:'8', key:'2'});
	itemArray.push({name:'作业讨论区', count:'30', key:'3'});
	itemArray.push({name:'课堂问题讨论区', count:'20', key:'4'});
	itemArray.push({name:'其他', count:'4', key:'5'});
	
	sections.push({data: itemArray});
	
	return (
		<SectionList
			renderItem={this._renderItemComponent}
			sections={sections}
			ItemSeparatorComponent={()=><View style={{height:0.5}}></View>}
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