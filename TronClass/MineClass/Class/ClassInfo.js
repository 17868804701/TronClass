/**
 * Created by qismsom on 2018/3/28.
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SectionList
} from 'react-native';

type Props = {};
export default class ClassInfo extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
	console.log(this.props.navigation);
  }
  
  static navigationOptions = ({navigation}) => ({
	headerTitle: navigation.state.params.ClassItem.name
  })
  
  _renderItemComponent = ({item}) => {
    return(
    	<View></View>
	);
  }
  
  render() {
    
    var sections = [];
    
    var itemArray = [];
    
    itemArray.push()
    
    sections.push({data: itemArray});
    
	return (
		<SectionList
			renderItem={this._renderItemComponent}
			renderSectionHeader={this._renderSectionHeaderComponent}
			sections={sections}
			ItemSeparatorComponent={()=><View style={{height:0.5}}></View>}
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