/**
 * Created by qismsom on 2018/4/10.
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import MoviePlayer from '../../Common/moviePlayer'

type Props = {};

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class MovieBasic extends Component<Props> {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  static navigationOptions = ({navigation}) => ({
	header: null
  });
  
  render() {
	return (
		<View>
		  <MoviePlayer
			  dismissCallBack={() => {this.dismissVC()}}
			  pushCallBack={() => {this.pushVC()}}
		  />
		  <ScrollView
			  showsVerticalScrollIndicator={false}
			  style={{height:height-250}}
		  >
			<View style={{backgroundColor:'white', justifyContent:'center', height:44}}>
			  <Text style={{marginLeft: 20,fontSize:17, fontWeight:'bold'}}>极限特工: 终极回归 中国版预告片</Text>
			</View>
			{this._renderCell('开放时间', '2018.01.22.15.05')}
			{this._renderCell('截止时间', '无截止')}
			{this._renderCell('总时长', '0小时0分30秒')}
		  </ScrollView>
		</View>
	);
  }
  
  _renderCell(name,value) {
	return(
		<View style={{backgroundColor:'white',flexDirection:'row', alignItems:'center', justifyContent:'space-between', height:44}}>
		  <Text style={{marginLeft: 20,fontSize:15}}>
			{name}
		  </Text>
		  <Text style={{marginRight: 20,fontSize:15, color:'gray'}}>
			{value}
		  </Text>
		</View>
	);
  }
  
  dismissVC() {
	this.props.navigation.goBack();
  }
  
  pushVC() {
	this.props.navigation.navigate('ClassMovieExercises', {title:'视频课程提问'});
  }
}

const styles = StyleSheet.create({

});