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
  TouchableOpacity,
  ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

import ChoiceQuestion from './ChoiceQuestion'

type Props = {};
export default class TestExamination extends Component<Props> {
  constructor(props) {
	super(props);
	this.state = {
	  selectOptions:'',
	  itemArray:[],
	  currenPage: 0
	};
  }
  
  componentDidMount() {
	
    var itemArray = []; // 所有的题目
  
	// 每道题目下的选项数组
	var optionArray1 = []; 
	optionArray1.push({
	  name: 'A',
	  status: false,
	  content: '内部类不能有自己的成员方法和成员变量.',
	  key: '1'
	});
	optionArray1.push({
	  name: 'B',
	  status: false,
	  content: '内部类可用 static 修饰符定义为静态内部类.',
	  key: '2'
	});
	optionArray1.push({
	  name: 'C',
	  status: false,
	  content: '内部类可作为其他类的成员，而且可访问它所在类的成员.',
	  key: '3'
	});
	optionArray1.push({
	  name: 'D',
	  status: false,
	  content: '内部类可以被实例化.',
	  key: '4'
	});
  
	var optionArray2 = [];
	optionArray2.push({
	  name: 'A',
	  status: false,
	  content: '内部类不能有自己的成员方法和成员变量.',
	  key: '5'
	});
	optionArray2.push({
	  name: 'B',
	  status: false,
	  content: '内部类可用 static 修饰符定义为静态内部类.',
	  key: '6'
	});
	optionArray2.push({
	  name: 'C',
	  status: false,
	  content: '内部类可作为其他类的成员，而且可访问它所在类的成员.',
	  key: '7'
	});
	optionArray2.push({
	  name: 'D',
	  status: false,
	  content: '内部类可以被实例化.',
	  key: '8'
	});
  
	var optionArray3 = [];
	optionArray3.push({
	  name: 'A',
	  status: false,
	  content: '内部类不能有自己的成员方法和成员变量.',
	  key: '9'
	});
	optionArray3.push({
	  name: 'B',
	  status: false,
	  content: '内部类可用 static 修饰符定义为静态内部类.',
	  key: '10'
	});
	optionArray3.push({
	  name: 'C',
	  status: false,
	  content: '内部类可作为其他类的成员，而且可访问它所在类的成员.',
	  key: '11'
	});
	optionArray3.push({
	  name: 'D',
	  status: false,
	  content: '内部类可以被实例化.',
	  key: '12'
	});
  
	var optionArray4 = [];
	optionArray4.push({
	  name: 'A',
	  status: false,
	  content: '内部类不能有自己的成员方法和成员变量.',
	  key: '13'
	});
	optionArray4.push({
	  name: 'B',
	  status: false,
	  content: '内部类可用 static 修饰符定义为静态内部类.',
	  key: '14'
	});
	optionArray4.push({
	  name: 'C',
	  status: false,
	  content: '内部类可作为其他类的成员，而且可访问它所在类的成员.',
	  key: '15'
	});
	optionArray4.push({
	  name: 'D',
	  status: false,
	  content: '内部类可以被实例化.',
	  key: '16'
	});
  
	var optionArray5 = [];
	optionArray5.push({
	  name: 'A',
	  status: false,
	  content: '内部类不能有自己的成员方法和成员变量.',
	  key: '17'
	});
	optionArray5.push({
	  name: 'B',
	  status: false,
	  content: '内部类可用 static 修饰符定义为静态内部类.',
	  key: '18'
	});
	optionArray5.push({
	  name: 'C',
	  status: false,
	  content: '内部类可作为其他类的成员，而且可访问它所在类的成员.',
	  key: '19'
	});
	optionArray5.push({
	  name: 'D',
	  status: false,
	  content: '内部类可以被实例化.',
	  key: '20'
	});
	
	itemArray.push(optionArray1);
	itemArray.push(optionArray2);
	itemArray.push(optionArray3);
	itemArray.push(optionArray4);
	itemArray.push(optionArray5);
	this.setState({itemArray:itemArray});
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle: '试题测试',
	gesturesEnabled:false
  });
  
  render() {
	var sections = [];
	sections.push({data: this.state.itemArray});
	return (
		<View style={styles.container}>
		  <View style={{height:30,justifyContent:'center',backgroundColor:'white'}}>
			<Text style={{marginLeft:10}}>{this.state.currenPage+1}/5 选择题</Text>
		  </View>
		  <ScrollView
			  style={{backgroundColor: '#F0F0F0', width:width, height:height-64-30-30}}
			  pagingEnabled={true}
			  horizontal={true}
			  showsHorizontalScrollIndicator={false}
			  onMomentumScrollEnd={(e)=>{this._renderScroll(e)}}
		  >
			{this._renderScrollViewItems()}
		  </ScrollView>
		  <View style={styles.cycleViewStyle}>
			{this._renderPageCycle()}
		  </View>
		</View>
	);
  }
  
  _renderScrollViewItems() {
	var itemArray = [];
	for (var i = 0; i < this.state.itemArray.length; i++) {
	  console.log(this.state.itemArray[i]);
	  itemArray.push(
		  <ChoiceQuestion key={i} style={{width:width}}
					stems="关于java，下列关于内部类说法中不正确的是（ ）关于java，下列关于内部类说法中不正确的是（ ）关于java，下列关于内部类说法中不正确的是（ ）关于java，下列关于内部类说法中不正确的是（ ）关于java，下列关于内部类说法中不正确的是（ )"
		  			optionsArray={this.state.itemArray[i]}
					isMultiple={(i%2)?false:true}
		  />
	  );
	}
	return itemArray;
  }
  
  // 分页圆点
  _renderPageCycle() {
	var cycleArray = [], style;
	for (var i=0; i<this.state.itemArray.length; i++) {
	  style = (this.state.currenPage == i) ? {color : 'orange'} : {color : 'gray'}
	  cycleArray.push(
		  <Text style={[style,{fontSize : 25}]} key={i}>&bull;</Text>
	  );
	}
	return cycleArray;
  }
  
  _renderScroll(e) {
	var newPage = Math.floor(e.nativeEvent.contentOffset.x / 375);
	this.setState({
	  currenPage: newPage
	});
  }
  
  
}
const styles = StyleSheet.create({
  container: {
  },
  // 圆点
  cycleViewStyle: {
	flexDirection: 'row',
	backgroundColor: '#F0F0F0',
	justifyContent: 'center',
	height:30
  },
});