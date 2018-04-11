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
export default class KeTangInfo extends Component<Props> {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => ({
        headerTitle: "教学反馈"
    })
    render() {
        return (
        <ScrollView>
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{flexDirection:"row",alignItems:"center",borderBottomWidth:1,borderBottomColor:"#e0e0e0",height:60}}>
                    <Text style={{fontSize:17,marginLeft:20}}>数据类型章节教学反馈</Text>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",height:50}}>
                    <Text style={{fontSize:17,marginLeft:20}}>在这里查看教学反馈</Text>
                </View>
                <View style={styles.item}>
                    <View style={styles.items}>
                        <Text style={{marginLeft:10}}>我懂了</Text>
                    </View>
                    <Text>10</Text>
                </View>
                <View style={styles.item}>
                    <View style={styles.items}>
                        <Text style={{marginLeft:10}}>没有</Text>
                    </View>
                    <Text>0</Text>
                </View>
                <View style={styles.item}>
                    <View style={styles.items}>
                        <Text style={{marginLeft:10}}>好</Text>
                    </View>
                    <Text>10</Text>
                </View>
                <View style={styles.item}>
                    <View style={styles.items}>
                        <Text style={{marginLeft:10}}>挺好</Text>
                    </View>
                    <Text>10</Text>
                </View>

                <View style={styles.item}>
                    <View style={styles.items}>
                        <Text style={{marginLeft:10}}>有趣</Text>
                    </View>
                    <Text>10</Text>
                </View>

                <View style={{width:"93%",height:40,justifyContent:"center",backgroundColor:"#20a1a1",marginLeft:"3%",alignItems:"center",borderRadius:7,marginTop:10}}>
                    <Text style={{color:"white"}}>加个反馈</Text>
                </View>
            </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    img:{
        width:40,height:40,borderRadius:20,marginLeft:10
    },
    item:{
        width:"100%",height:40,flexDirection:"row",alignItems:"center",marginBottom:10
    },
    items:{
        borderWidth:1,borderColor:"#e0e0e0",borderRadius:3,height:40,width:"85%",justifyContent:"center",marginLeft:10,marginRight:"5%"
    }
});