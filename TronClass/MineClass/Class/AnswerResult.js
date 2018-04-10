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

import CommitDone from './TestCommitDone'
import UnCommit from './TestUnCommit'

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

type Props = {};
export default class AnswerResult extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle:'答题结果',
	headerRight:<TouchableOpacity onPress={()=>navigation.navigate('ClassMovieExercises', {title:'测试题目'})}>
	  				<Text style={{color:'white', marginRight:10}}>
					  试题
					</Text>
	  			</TouchableOpacity>
  });
  
  render() {
	return (
		<ScrollableTabView
			renderTabBar={() => <DefaultTabBar/>}
			tabBarUnderlineStyle={{
			  height: 1,
			  backgroundColor: '#20A1A1',
			}}
			tabBarBackgroundColor='#ffffff'
			tabBarActiveTextColor='#20A1A1'
			tabBarInactiveTextColor="#333333"
			scrollWithoutAnimation={true}
			initialPage={0}
		>
		  <CommitDone
			  tabLabel='已交（0）'
		  />
		  <UnCommit
			  tabLabel='未交（42）'
		  />
		</ScrollableTabView>
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
  fullScreen: {
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
  },
});