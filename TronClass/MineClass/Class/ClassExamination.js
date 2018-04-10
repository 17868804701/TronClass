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

import MoviePlayer from '../../Common/moviePlayer'

type Props = {};
export default class ClassExamination extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  static navigationOptions = ({navigation}) => ({
	header: null
  });
  
  render() {
	return (
		<MoviePlayer
			dismissCallBack={() => {this.dismissVC()}}
			pushCallBack={() => {this.pushVC()}}
		/>
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
  fullScreen: {
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
  },
});