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
  TouchableOpacity,
  SectionList
} from 'react-native';

import SubAll from '../ClassAllOption/SubAll'
import SubFile from '../ClassAllOption/SubFile'
import SubLink from '../ClassAllOption/SubLink'
import SubMovie from '../ClassAllOption/SubMovie'
import SubHomeWork from '../ClassAllOption/SubHomeWork'

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

type Props = {};
export default class ClassChapter extends Component<Props> {
  constructor(props) {
	super(props);
	this.state = {}
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle: navigation.state.params.ClassItem.name
  })
  
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
		  <SubAll
			  tabLabel='全部'
			  clickCallBack={(item) => {
				this.pushVC(item)
			  }}
		  />
		  <SubFile
			  tabLabel='参考文件'
		  />
		  <SubLink
			  tabLabel='线上链接'
		  />
		  <SubMovie
			  tabLabel='影音教材'
			  clickMovieItemCallBack={()=>{this.pushMovieBasic()}}
		  />
		  <SubHomeWork
			  tabLabel='作业'
		  />
		</ScrollableTabView>
	);
  }
  
  pushVC(item) {
	// console.log(item);
	this.props.navigation.navigate('HtmlDes', {ClassItem: item.item.title})
  }
  
  pushMovieBasic() {
	this.props.navigation.navigate('MovieBasic')
  }
}