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

type Props = {};
export default class TestCommitDone extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  render() {
	return (
		<View style={styles.container}></View>
	);
  }
  
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'white',
  }
});