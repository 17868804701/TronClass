import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
var {width} = Dimensions.get('window').width;



export default class Yjfk extends Component<{}> {
    static navigationOptions = {
        headerTitle: '意见反馈',
    };
    // constructor(props){
    //     super(props);
    //     this.state={photos:[]};
    // }
    render() {
        // const {photos}=this.state;
        return (
            <View style={styles.containerStyle}>

                <View style={{backgroundColor: 'white', marginTop: 5}}>
                    <View style={{flexDirection:'row', alignItems:'center',paddingTop:10}}>
                        <Text style={{color:'#ff0000',marginLeft:10}}>*</Text>
                        <Text style={{marginLeft: 3,}}>
                            问题和意见
                        </Text>
                    </View>

                    <View style={styles.TextInoutStyle}>
                    <TextInput
                        placeholder={'请填写10字以上的问题描述以便我们提供更好的帮助'}
                        multiline={true}
                        underlineColorAndroid={'transparent'}/>
                    </View>
                    <Text style={{marginLeft:10}}>
                        图片（选填、提供问题的截图）
                    </Text>
                    <Image style={{width:70,height:70,marginLeft:10,marginTop:10}} source={require('./Img/btn_photo.png')}>

                    </Image>
                    <Text style={{marginLeft:10,marginTop:10,marginBottom:20}}>最多添加6张</Text>
                </View>
                <View style={{backgroundColor:'white',marginTop:10}}>
                    <Text style={{marginLeft:10,marginTop:10}}>联系方式（选填，电话或邮箱便于我们与你联系）</Text>
                    <TextInput
                        style={{height: 45,
                            borderRadius: 3,
                            margin:10,
                            borderWidth: 1,
                            borderColor: '#555555',}}
                            underlineColorAndroid={'transparent'}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },


    TextInoutStyle: {
        height: 100,
        borderRadius: 5,
        margin:10,
        borderWidth: 1,
        borderColor: '#555555',
    },
});