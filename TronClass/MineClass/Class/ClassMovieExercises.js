/**
 * Created by qismsom on 2018/4/9.
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
export default class ClassMovieExercises extends Component<Props> {
  constructor(props) {
	super(props);
	this.state = {
	  selectOptions:'',
	  itemArray:[]
	};
  }
  
  componentDidMount() {
  
	var itemArray = [];
	itemArray.push({
	  name: 'A',
	  status: false,
	  content: '内部类不能有自己的成员方法和成员变量.',
	  key: '1'
	});
	itemArray.push({
	  name: 'B',
	  status: false,
	  content: '内部类可用 static 修饰符定义为静态内部类.',
	  key: '2'
	});
	itemArray.push({
	  name: 'C',
	  status: false,
	  content: '内部类可作为其他类的成员，而且可访问它所在类的成员.',
	  key: '3'
	});
	itemArray.push({
	  name: 'D',
	  status: false,
	  content: '内部类可以被实例化.',
	  key: '4'
	});
	this.setState({itemArray: itemArray})
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle: navigation.state.params.title
  });
  
  _renderItemCompent = ({item})=>{
	console.log(item);
	return(
		<TouchableOpacity onPress={()=>{this.dealAnswer(item)}}>
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
		  <Text>
			关于java，下列关于内部类说法中不正确的是（ ）关于java，下列关于内部类说法中不正确的是（ ）关于java，下列关于内部类说法中不正确的是（ ）关于java，下列关于内部类说法中不正确的是（ ）关于java，下列关于内部类说法中不正确的是（ ）
		  </Text>
		</View>
	);
  }
  
  _renderListFooter = ()=>{
    return(
		<TouchableOpacity onPress={()=>{this.commitAnswer()}}>
		  <View style={{justifyContent:'center',backgroundColor:'#20A1A1',marginLeft:40,marginRight:40,marginTop:40,minHeight:40,borderRadius:5}}>
		  	<Text style={{color:'white',textAlign:'center'}}>
			  提交答案
			</Text>
		  </View>
		</TouchableOpacity>
	);
  }
  
  dealAnswer(item) {
	let data = this.state.itemArray.map((temp) =>{
	  if(temp.name === item.name) {
			temp.status = true
	  }else{
			temp.status = false
	  }
	  return temp
	})
    this.setState({itemArray:data})
  }
  
  commitAnswer() {
    var answer = null;
    this.state.itemArray.map((item)=>{
      if (item.name === 'A') {
        if (item.status === true) {
		  answer = item;
		}
	  }
	})
	
	if (answer == null) {
      alert('答案不正确');
	}else {
      this.props.navigation.goBack();
	}
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
			ListFooterComponent={this._renderListFooter}
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