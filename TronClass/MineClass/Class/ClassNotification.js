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
  SectionList,
  TouchableOpacity
} from 'react-native';
type Props = {};
export default class Me extends Component<Props> {
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle: navigation.state.params.title
  });
  
  _renderItemCompent = ({item})=>{
    console.log(item);
	return(
		<TouchableOpacity onPress={()=>{this.pushVC(item)}}>
		  <View style={{backgroundColor:'white'}}>
			<View style={{flexDirection: 'row', height: 30, alignItems:'center'}}>
			  <Text style={{fontSize: 15, marginLeft: 10, marginRight: 10}}>
				{item.name}
			  </Text>
			  <Text style={{fontSize: 14, color: '#20A1A1'}}>
				{item.status}
			  </Text>
			</View>
			<Text style={{fontSize: 10, marginLeft: 10, marginRight: 10, height: 20, color:'gray'}}>
			  {item.time}
			</Text>
			<Text style={{fontSize: 15, marginLeft: 10, marginRight: 10, marginBottom: 10}}>
			  {item.content}
			</Text>
		  </View>
		</TouchableOpacity>
		
	);
  }
  
  pushVC(item) {
	this.props.navigation.navigate('HtmlDes', {ClassItem: item.name})
  }
  
  render() {
	var sections = [];
	var itemArray = [];
	itemArray.push({
	  name: '3月8号演讲人抽号结果',
	  status: '(已更新)',
	  time: '更新于2017.03.06 12：11',
	  content: '在张峰同学在场监督下,我们下课抽出了3月8日这次课演讲的人序号为28,为李桥同学,请做好准备。',
	  key: '1'
	});
	itemArray.push({
	  name: '3月10号演讲人抽号结果',
	  status: '(已更新)',
	  time: '更新于2017.03.08 16：11',
	  content: '在张峰同学在场监督下,我们下课抽出了3月8日这次课演讲的人序号为31,为李桥同学,请做好准备。',
	  key: '2'
	});
	sections.push({data: itemArray});
	return (
		<SectionList
			renderItem={this._renderItemCompent}
			sections={sections}
			ItemSeparatorComponent={() => <View style={{height: 0.5}}></View>}
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