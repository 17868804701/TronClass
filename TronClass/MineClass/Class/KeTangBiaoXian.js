/**
 * Created by qismsom on 2018/3/27.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    SectionList,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
export default class KeTangBiaoXian extends Component<Props> {
    constructor(props) {
        super(props);
        this.state={
            sections:[]
        }
    }
    static navigationOptions = ({navigation}) => ({
        headerTitle: '课堂表现'
    });

    //渲染列表
    _renderItem = (info) => {
        const name = info.item.name;
        const num = info.item.num;
        const banji = info.item.banji;
        const score = info.item.score;
        // alert(show)
        return <View style={{flexDirection:"row",justifyContent:"center",height:100,alignItems:"center",borderBottomWidth:1,borderColor:"#e0e0e0"}}>
                    <View style={{width:'20%',justifyContent:"center",alignItems:"center"}}>
                        <Image source={require('../../../images/201291893228996.jpg')} style={{width:70,height:70,borderRadius:35}}></Image>
                    </View>
                    <View style={{width:"80%",height:100,justifyContent:"center"}}>
                        <Text style={{marginLeft:10,fontSize:20,fontWeight:'bold',color:"#333"}}>{name}</Text>
                        <Text style={{marginLeft:10}}>{num}</Text>
                        <Text style={{marginLeft:10}}>{banji}</Text>
                        <Text style={{marginLeft:10,position:"absolute",top:65,right:20}}>分数：<Text style={{color:"#20a1a1"}}>{score}</Text>分</Text>
                    </View>
                </View>
    };
    // _sectionComp = (info) => {
    //     const txt = info.section.key;
    //     return<TouchableOpacity onPress={()=>{
    //         info.section.show ==='none'?info.section.show ='flex':info.section.show ='none';
    //         this.setState({
    //             sections:this.state.sections
    //         })
    //     }}><View style={{ height: 45, textAlign: 'left',borderColor:"#e0e0e0",borderBottomWidth:0, justifyContent:"center",backgroundColor: 'white', color: 'black', fontSize: 14 }}>
    //         <Text style={{marginLeft:10}}>{txt}</Text>
    //         <Image source={require('../../../images/down.png')} style={{position:"absolute",right:20,width:25,height:25}}></Image>
    //     </View>
    //     </TouchableOpacity>
    // };
    componentWillMount(){
        const section = [
            {key: "01",data: [{name:"黄森",num:14610801152313,banji:"软件工程 统本软件1401",score:"60"},{name:"黄森",num:14610801152313,banji:"软件工程 统本软件1401",score:"60"},{name:"黄森",num:14610801152313,banji:"软件工程 统本软件1401",score:"60"},{name:"黄森",num:14610801152313,banji:"软件工程 统本软件1401",score:"60"}]},
        ];
        this.setState({
            sections:section
        })
    };
    //header



    render() {
        return (
                <View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <ModalDropdown textStyle={{fontSize:16}} style={styles.select} dropdownStyle={{width:'100%',marginTop:11,marginLeft:'-8.5%'}} defaultValue="所有院系▼" options={['信息工程学院', '会计学院']}/>
                        <ModalDropdown textStyle={{fontSize:16}} style={styles.select} dropdownStyle={{width:'100%',marginTop:11,marginLeft:'-40%'}} defaultValue="所有年级▼" options={['14级', '16级']}/>
                        <ModalDropdown textStyle={{fontSize:16}} style={styles.select} dropdownStyle={{width:'100%',marginTop:11,marginLeft:"40%"}} defaultValue="所有班级▼" options={['软件1402班', '软件1602班',"会计1402班","会计1602班"]}/>
                    </View>
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
type Props = {};
const styles = StyleSheet.create({
    select:{
        width:'33%',
        alignItems:"center",
        height:50,
        fontSize:22,
        justifyContent:"center",
        borderBottomWidth:1,
        borderBottomColor:"#e0e0e0"
    }
});