/**
 * Created by Dell on 2018/4/10.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    SectionList
} from 'react-native';

type Props = {};
export default class TaoLuninfo extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            show: "flex",
            sections: []
        }
    }
    static navigationOptions = {
        headerTitle: '讨论',
    };
    //渲染列表
    _renderItem = (info) => {
        const name = info.item.name;
        const time = info.item.time;
        const title = info.item.title;
        const desc = info.item.desc;
        // alert(show)
        return <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('TaolunDet')
        }}>
                <View style={{borderBottomWidth:1,borderColor:"#e0e0e0",paddingBottom:10}}>
                    <View style={{flexDirection: "row", justifyContent: "center",alignItems: "center",width:'100%'}}>
                        <View style={{width:'15%',justifyContent:"center",alignItems:"center", marginTop:10}}>
                            <Image source={require('../../../images/201291893228996.jpg')} style={{width:50,height:50,borderRadius:25}}>
                            </Image>
                        </View>
                        <View style={{width: "85%", justifyContent: "center",marginTop:10,marginLeft:-20}}>
                            <Text style={{marginLeft: 30,fontSize:18,fontWeight:"bold"}}>{name}</Text>
                            <Text style={{marginLeft: 30}}>{time} day ago</Text>
                        </View>
                    </View>
                    <View style={{width: "100%", justifyContent: "center",marginTop:10}}>
                        <Text style={{marginLeft: 15,fontSize:18,fontWeight:"bold"}}>{title}</Text>
                        <Text style={{marginLeft: 15,fontSize:17,marginTop:5}}>{desc}</Text>
                    </View>
               </View>
        </TouchableOpacity>
    };

    componentWillMount() {
        const section = [
            {
                key: "1",
                data: [
                    {key:"10",name: "胡广顺",time:"10",title:"对课堂教学的建议",desc:"大家好，这是一门新开课，希望大家喜欢，哈哈哈，欢迎光临，走进课堂。"},
                    {key:"20",name: "胡广顺",time:"10",title:"对课堂教学的建议",desc:"大家好，这是一门新开课，希望大家喜欢，哈哈哈，欢迎光临，走进课堂。"},
                    {key:"30",name: "胡广顺",time:"10",title:"对课堂教学的建议",desc:"大家好，这是一门新开课，希望大家喜欢，哈哈哈，欢迎光临，走进课堂。"},
                    {key:"40",name: "胡广顺",time:"10",title:"对课堂教学的建议",desc:"大家好，这是一门新开课，希望大家喜欢，哈哈哈，欢迎光临，走进课堂。"},
                   ]
            },
        ];
        this.setState({
            sections: section
        })
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white',}}>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={this.state.sections}
                    //设置列表之间的样式，边框
                    ItemSeparatorComponent={() => <View style={{height:0, backgroundColor: "#e0e0e0"}}></View>}
                    // ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
                    // ListFooterComponent={() => <View style={{ backgroundColor: '#20a1a1', alignItems: 'center', height: 20,justifyContent:'center'}}></View>}
                />
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