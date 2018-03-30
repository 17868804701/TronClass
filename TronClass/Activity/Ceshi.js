import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View} from "react-native";

var {width} = Dimensions.get('window').width;
export default class Ceshi extends Component {


    render() {
        return (
            <View style={styles.containerStyle}>
                {/*<Image style={styles.ImageStyle} source={require('./Img/empty-download.png')}>*/}
                {/*</Image>*/}
                <Text style={{marginTop:10}}>暂无数据</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },

    ImageStyle: {
        height: 60,
        width: 60,
    },
});