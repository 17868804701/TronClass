/**
 * Created by qismsom on 2018/3/26.
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SectionList
} from 'react-native';

import ClassHome from './Class/ClassHome'

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

type Props = {};
export default class MineClass extends Component<Props> {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  static navigationOptions = ({navigation}) => ({
	headerRight: <Image
					source={require('../Configure/Resource/add.png')}
					style={styles.navIconStyle}
				 />
  });
  
  _renderItemComponent = ({item}) => {
	console.log(item);
	return(
		<TouchableOpacity activeOpacity={1} onPress={()=>this._sectionListDidClickItem(item)}>
		  <View style={styles.itemStyle}>
			<Image
				source={require('../Configure/Resource/list_icon.png')}
				style={styles.itemIconStyle}
			/>
			<View style={styles.itemRightViewStyle}>
			  <Text style={styles.itemNameStyle} numberOfLines={1}>
				{item.name}
			  </Text>
			  <Text style={styles.itemContentStyle}>
				{item.professior}
			  </Text>
			  <Text style={styles.itemContentStyle}>
				{item.classStatus}
			  </Text>
			</View>
		  </View>
		</TouchableOpacity>
	);
  }
  _sectionHeader = ({section})=>{
	return(
		<View>
		  <Text style={{backgroundColor:'#f0f0f0',color:'#00bfff'}}>{section.key}</Text>
		</View>
	);
  }
  
  _sectionListDidClickItem(item) {
	console.log(item);
    this.props.navigation.navigate('ClassHome', {ClassItem: item})
  }
  
  render(){
	var sections = [];
	var dataA = [];
  
	dataA.push({name:'人文视野中的生态学',professior:'网络通识课程中心',classStatus:'已结课',key:'1'});
	dataA.push({name:'2017年秋-社区生活课-国际青年社区-冯小丽',professior:'学生发展处研发中心',classStatus:'已结课',key:'2'});
	dataA.push({name:'设计模式',professior:'软件工程',classStatus:'已结课',key:'3'});
	dataA.push({name:'异动应用开发(Android)',professior:'软件工程',classStatus:'已结课',key:'4'});
	dataA.push({name:'PHP程序设计',professior:'软件工程',classStatus:'已结课',key:'5'});
	dataA.push({name:'软件测试工具',professior:'软件工程',classStatus:'进行中',key:'6'});
	dataA.push({name:'UML系统建模与分析',professior:'软件工程',classStatus:'进行中',key:'7'});
	dataA.push({name:'移动互联综合实训',professior:'软件工程',classStatus:'进行中',key:'8'});
	dataA.push({name:'企业级应用开发学习',professior:'软件工程',classStatus:'进行中',key:'9'});
	dataA.push({name:'IT项目管理',professior:'软件工程',classStatus:'进行中',key:'10'});
	sections.push({data:dataA});
	return (
		<SectionList
					 renderItem={this._renderItemComponent}
					 sections={sections}
					 ItemSeparatorComponent={() => <View style={{height: 0.5}}></View>}
					 onRefresh={() => alert('onRefresh: nothing to refresh :P')}
					 refreshing={false}
		/>
	);
  }
}

const styles = StyleSheet.create({
  navIconStyle: {
	height: 30,
	width: 30,
	marginRight: 10
  },
  sectionListStyle: {
    flex: 1,
  },
  itemStyle: {
    flexDirection: 'row',
	backgroundColor: 'white',
  },
  itemRightViewStyle: {
    justifyContent: 'center',
	width: width*0.6,
	paddingLeft: 10,
	paddingRight: 10,
  },
  itemIconStyle: {
    marginLeft: 10,
	marginTop: 10,
	marginBottom: 10,
	width: width*0.4,
	height: width*0.4*0.55,
  },
  itemNameStyle: {
	fontSize: 16,
  },
  itemContentStyle: {
    fontSize: 13,
	color: 'gray',
	marginTop: 5,
  },
});