import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";

/**
 * 自定义组件  图片文字
 * TouchableHighlight underlayColor 属性来改变按下的颜色
 * TouchableOpacity 通过在按下去改变视图的不透明度来表示按钮被点击的
 */
var {width} =  Dimensions.get('window').width;
export default class ImageText extends Component{
    //自定义方法使用属性定义
    customPress=()=>{
        const {OnClickListener}=this.props;
        OnClickListener();
    }
    render(){
        const {text,imgPath}=this.props;
        return(
            <TouchableHighlight
                activeOpacity={0.5} //透明度设置
                underlayColor="#B5B5B5"  //点击后颜色
                style={styles.buttonBg}
                onPress={this.customPress}>
                <View style={styles.containerStyle}>
                    <Image style={styles.logoImage} source={{uri:imgPath}}>
                    </Image>
                    <Text style={styles.textStyle}>{text}</Text>
                    <Image style={styles.rightImage} source={require('../../Configure/Resource/right.png')}></Image>
                </View>
            </TouchableHighlight>
        );
    }

}

const styles=StyleSheet.create({
    containerStyle:{
        height:55,
        width:width,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        alignItems:'center',
    },
    logoImage:{
        width:35,
        height:35,
        marginLeft:16
    },
    rightImage:{
        width:20,
        height:20,
        marginRight:16
    },
    textStyle:{
        flex:1,
        color:'#333333',
        fontSize:15,
        marginLeft:10
    },
    buttonBg:{
        height:55,
        marginTop:10,
        width:width,
        backgroundColor:'white',
    },
    buttonText:{
        textAlign:'center',
        color:'white'
    }

});