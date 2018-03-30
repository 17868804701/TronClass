import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, TextInput, View} from "react-native";

var {width} = Dimensions.get('window').width;
export default class Sixin extends Component {
    static navigationOptions = {
        headerTitle: '私信',
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.inputEditStyle}>
                    <Image style={styles.ImageStyle} source={require('../Configure/Resource/seacch_hui.png')}>
                    </Image>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={'搜索姓名/人员编号'}
                        //输入框下划线
                        underlineColorAndroid={'transparent'}/>
                </View>
                <View style={{height: 1, width: width, backgroundColor: '#555555'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    inputEditStyle: {
        flexDirection: 'row',
        margin: 10,
        height: 45,
        width: width,
        backgroundColor: 'white',
        borderRadius: 3,
        alignItems: 'center',
    },
    ImageStyle: {
        height: 20,
        width: 20,
        marginLeft: 10
    },
    textInputStyle: {
        flex: 1,
        height: 45,
    }
});