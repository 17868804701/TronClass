/**
 * Created by qismsom on 2018/3/27.
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type Props = {};
export default class ClassExamination extends Component<Props> {
  render() {
	return (
		<View style={styles.container}>
		  <Text style={styles.welcome}>
			测试
		  </Text>
		</View>
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