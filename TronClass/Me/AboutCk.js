import React, {Component} from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";

var {width} = Dimensions.get('window').width;
export default class AboutCk extends Component {
    static navigationOptions = {
        headerTitle: '关于畅课',
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <ImageBackground style={{justifyContent:'center',alignItems:'center',height:240}}   source={require('./Img/about_bg.png')}>
                     <View style={{flexDirection:'row',alignItems:'center'}}>
                         <Image style={{width:50,height:50}} source={require('./Img/logo_ico.png')}/>
                         <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Tron</Text>
                         <Text style={{fontSize:35,color:'white'}}>Class</Text>
                     </View>
                    <Text style={{fontSize:12,color:'white',marginTop:10}}>让教与学更简单</Text>
                </ImageBackground>
                <View style={{justifyContent:'space-between',flexDirection:'row',height:50,alignItems:'center',backgroundColor:'white'}}>
                    <Text style={{color:'#333333',fontSize:17,marginLeft:10}}>当前版本：1.3.10</Text>
                    <Text style={{marginRight:10}}>检查新版本</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
});