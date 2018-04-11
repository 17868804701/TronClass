/**
 * Created by qismsom on 2018/4/10.
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
export default class TestUnCommit extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  _renderItemCompent = ({item})=>{
    return(
    	<View style={{flexDirection:'row', alignItems:'center', height: 60, backgroundColor:'white'}}>
		  <Image style={{width:32, height: 32, marginLeft: 20, marginRight: 20,}} source={require('../../Configure/Resource/user.png')}/>
		  <View style={{justifyContent:'center'}}>
			<Text style={{fontSize: 17, marginBottom: 5}}>
			  {item.name}
			</Text>
			<Text>
			  {item.cardNo}
			</Text>
		  </View>
		</View>
	);
  }
  
  render() {
    
    var sections = [];
    var itemArray = [];
    
    itemArray.push({key:'1', name:'张硕',cardNo:'16582732934739'});
	itemArray.push({key:'2', name:'周旭明',cardNo:'16582653454392'});
	itemArray.push({key:'3', name:'陈娟为',cardNo:'16582345934783'});
	itemArray.push({key:'4', name:'任一飞',cardNo:'16582732343739'});
	itemArray.push({key:'5', name:'黄森',cardNo:'16582653454392'});
	itemArray.push({key:'6', name:'王鑫',cardNo:'16582345934783'});
	itemArray.push({key:'7', name:'周新宇',cardNo:'16582653454392'});
	itemArray.push({key:'8', name:'高明熙',cardNo:'16582345934783'});
	itemArray.push({key:'9', name:'何家俊',cardNo:'16582653454392'});
	itemArray.push({key:'10', name:'王金龙',cardNo:'16582345934783'});
	sections.push({key:'s1', data:itemArray});
    
	return (
		<SectionList
			renderItem={this._renderItemCompent}
			sections={sections}
			style={{backgroundColor:'white'}}
			ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: "#e0e0e0"}}></View>}
		/>
	);
  }
  
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'white',
  }
});