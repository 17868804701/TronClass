/**
 * Created by qismsom on 2018/3/26.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Alert,
    SectionList,
    TouchableOpacity,
    Text
} from 'react-native';
type Props = {};
export default class KechengMulu extends Component{
    constructor(props){
        super(props);
        this.state={
            show:"flex",
            sections:[]
        }
    }
    //渲染列表
    _renderItem = (info) => {
        const item = info.item.title;
        const show = info.section.show;
        // alert(show)
        return <View style={{flexDirection:"row",justifyContent:"center",height:35,alignItems:"center",display:show}}>
                    <View style={{width:"100%",height:35,justifyContent:"center"}}>
                        <Text style={{marginLeft:30}}>{item}</Text>
                    </View>
                </View>
    };
    componentWillMount(){
        const section = [
            {id:0, key: "第一章  Excle的基本操作",show:this.state.show, data: [{title:"第一节  复制与粘贴"},{title:"第二节  文档排版"},{title:"第二节  文档排版"},{title:"第二节  文档排版"},{title:"第二节  文档排版"}] },
            {id:1, key: "第二章  Excle的基本操作",show:this.state.show, data: [{title:"第一节  复制与粘贴"},{title:"第二节  文档排版"},{title:"第二节  文档排版"},{title:"第二节  文档排版"},{title:"第二节  文档排版"}] },
            {id:1, key: "第三章  Excle的基本操作",show:this.state.show, data: [{title:"第一节  复制与粘贴"},{title:"第二节  文档排版"},{title:"第二节  文档排版"},{title:"第二节  文档排版"},{title:"第二节  文档排版"}] },
        ];
        this.setState({
           sections:section
        })
    };
    //header
    _sectionComp = (info) => {
        const txt = info.section.key;
        return<TouchableOpacity onPress={()=>{
            info.section.show ==='none'?info.section.show ='flex':info.section.show ='none';
            this.setState({
                sections:this.state.sections
            })
        }}><View style={{ height: 45, textAlign: 'left',borderColor:"#e0e0e0",borderBottomWidth:0, justifyContent:"center",backgroundColor: 'white', color: 'black', fontSize: 14 }}>
            <Text style={{marginLeft:10}}>{txt}</Text>
            <Image source={require('../../images/down.png')} style={{position:"absolute",right:20,width:25,height:25}}></Image>
        </View>
        </TouchableOpacity>
    };

    render() {
        return (
            <View style={{ flex: 1 ,backgroundColor: 'white',}}>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={this.state.sections}
                    //设置列表之间的样式，边框
                    ItemSeparatorComponent={() => <View style={{height:1,backgroundColor:"#e0e0e0"}}></View>}
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
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});