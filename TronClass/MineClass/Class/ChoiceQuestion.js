/**
 * Created by qismsom on 2018/4/11.
 */
/**
 * Created by qismsom on 2018/4/11.
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

type Props = {};
export default class ChoiceQuestion extends Component<Props> {
  constructor(props) {
	super(props);
	
	this.props.stems = '';
	this.props.optionsArray = [];
	this.props.isMultiple=false;
	
	this.state = {
	  selectOptions:'',
	  itemArray:[]
	};
  }
  
  componentDidMount() {
    // 根据传递的数据进行显示
	this.setState({itemArray: this.props.optionsArray})
  }
  
  _renderItemCompent = ({item})=>{
	return(
		<TouchableOpacity onPress={()=>{this.props.isMultiple?this.dealMultipleChoice(item):this.dealSingleChoice(item)}}>
		  <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',marginLeft:20,marginTop:20,width:width-40,minHeight:60}}>
			{item.status
				?
				<Image
					style={{width:20, height:20, marginLeft:20,marginRight:10}}
					source={require('../../Configure/Resource/check.png')}
				/>
				:
				<Image
					style={{width:20, height:20, marginLeft:20,marginRight:10}}
					source={require('../../Configure/Resource/checknone.png')}
				/>}
			<View style={{marginRight:20, width:width-40-50-20}}>
			  <Text>{item.name}.{item.content}</Text>
			</View>
		  </View>
		</TouchableOpacity>
	
	);
  }
  
  _renderSectionHeaderComponent = ({item})=>{
	return(
		<View style={{width:width-40, marginLeft:20, marginTop:20}}>
		  <Text style={{color:'#20A1A1'}}>
			{this.props.isMultiple?'多选题   ':'单选题   '}
			<Text style={{color:'black'}}>
			  {this.props.stems}
			</Text>
		  </Text>
		  
		</View>
	);
  }
  
  // 单选题被选择
  dealSingleChoice(item) {
	let data = this.state.itemArray.map((temp) =>{
	  if(temp.key === item.key) {
		temp.status = true
	  }else{
		temp.status = false
	  }
	  return temp
	})
	this.setState({itemArray:data})
  }
  
  // 多选题被选择
  dealMultipleChoice(item) {
	let data = this.state.itemArray.map((temp) =>{
	  if(temp.key === item.key) {
		temp.status = !temp.status
	  }
	  return temp
	})
	this.setState({itemArray:data})
  }
  
  render() {
	var sections = [];
	sections.push({data: this.state.itemArray});
	return (
		<SectionList
			renderItem={this._renderItemCompent}
			renderSectionHeader={this._renderSectionHeaderComponent}
			stickySectionHeadersEnabled={false}
			sections={sections}
			ItemSeparatorComponent={() => <View style={{height: 0.5}}></View>}
			style={{width:width}}
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