/**
 * Created by qismsom on 2018/3/28.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    SectionList
} from 'react-native';

type Props = {};
export default class KeTang extends Component<Props> {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => ({
        headerTitle: "课堂"
    })
    render() {
        return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('KeTangInfo')
            }}>
                <View style={{marginTop:10,flexDirection:"row",alignItems:"center"}}>
                    <Image source={require("../../../images/201291893228996.jpg")} style={styles.img}></Image>
                    <Text style={{fontSize:17,marginLeft:10}}>数据类型章节教学反馈</Text>
                    <Text style={{color:"#20a1a1",fontSize:16,position:"absolute",right:20}}>进行中</Text>
                </View>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    img:{
        width:40,height:40,borderRadius:20,marginLeft:10
    }
});