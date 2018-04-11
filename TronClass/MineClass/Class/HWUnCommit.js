/**
 * Created by qismsom on 2018/4/11.
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

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

type Props = {};
export default class HWUnCommit extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  _renderItemCompent = ({item})=>{
	
	return(
		<View style={{flexDirection:'row', alignItems:'center', height: 80, backgroundColor:'white'}}>
		  <Image style={{width:40, height: 40, marginLeft: 20, marginRight: 20,}} source={require('../../Configure/Resource/user.png')}/>
		  <View style={{width:width-80}}>
			<Text style={{fontSize: 17, marginBottom: 5}}>
			  {item.name}
			</Text>
			<Text style={{color:'#C0C0C0',fontSize:13,}}>
			  人员编号:{item.cardNo}
			</Text>
			<Text style={{color:'#C0C0C0',fontSize:13,}}>
			  {item.classProfessior}  {item.classNo}
			</Text>
		  </View>
		</View>
	);
  }
  
  render() {
	
	var sections = [];
	var itemArray = [];
	
	itemArray.push({key:'1', name:'侯明星',cardNo:'16582732934739', classProfessior:'电子信息工程',classNo:'统本电信1701'});
	itemArray.push({key:'2', name:'曹善文',cardNo:'16582653454392', classProfessior:'电子信息工程',classNo:'统本电信1701'});
	itemArray.push({key:'3', name:'刘家驹',cardNo:'16582345934783', classProfessior:'电子信息工程',classNo:'统本电信1701'});
	itemArray.push({key:'4', name:'路与杨',cardNo:'16582732343739', classProfessior:'电子信息工程',classNo:'统本电信1701'});
	itemArray.push({key:'5', name:'王玉洁',cardNo:'16582653454392', classProfessior:'电子信息工程',classNo:'统本电信1701'});
	itemArray.push({key:'6', name:'周亚飞',cardNo:'16582345934783', classProfessior:'电子信息工程',classNo:'统本电信1701'});
	itemArray.push({key:'7', name:'陈娟为',cardNo:'16582653454392', classProfessior:'电子信息工程',classNo:'统本电信1701'});
	itemArray.push({key:'8', name:'任一飞',cardNo:'16582345934783', classProfessior:'电子信息工程',classNo:'统本电信1701'});
	itemArray.push({key:'9', name:'李一兵',cardNo:'16582653454392', classProfessior:'电子信息工程',classNo:'统本电信1701'});
	itemArray.push({key:'10', name:'高明熙',cardNo:'16582345934783', classProfessior:'电子信息工程',classNo:'统本电信1701'});
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
  },
  optionTextStyle: {
	color:'#F0F0F0',
	fontSize:13,
  },
});