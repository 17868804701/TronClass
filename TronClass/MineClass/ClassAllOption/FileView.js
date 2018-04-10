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

import OpenFileTool from 'react-native-doc-viewer';
var RNFS = require('react-native-fs');
var SavePath = Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;

type Props = {};

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class MovieBasic extends Component<Props> {
  
  constructor(props) {
	super(props);
	this.state = {};
  }
  
  render() {
	return (
		<View>
		</View>
	);
  }
  
}

const styles = StyleSheet.create({

});