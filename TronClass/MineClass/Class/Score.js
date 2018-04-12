/**
 * Created by qismsom on 2018/3/27.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    SectionList,
    ScrollView,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';
import Echarts from "native-echarts";
import Dimensions from 'Dimensions';
const {width} = Dimensions.get('window');
export default class Score extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            apple:[2, 4, 7, 2, 2],
        }
    }

    static navigationOptions = ({navigation}) => ({
        headerTitle: '成绩'
    });
    render() {
        const option = {
            //点击某一个点的数据的时候，显示出悬浮窗
            tooltip : {
                trigger: 'axis'
            },
            //可以手动选择现实几个图标
            legend: {
                data:['人']
            },
            //各种表格
            toolbox: {
                //改变icon的布局朝向
                //orient: 'vertical',
                show : false,
                showTitle:true,
                feature : {
                    //show是否显示表格，readOnly是否只读
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        //折线图  柱形图    总数统计 分开平铺
                        type: ['line', 'bar','stack','tiled'],
                    },

                }
            },
            xAxis : [
                {
                    //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                    boundaryGap:true,
                    type : 'category',
                    data : ['90分以上','80~89分','70~79分','60~69分','60分以下']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '人数(人)'
                }
            ],
            //图形的颜色组
            color:['rgb(32, 178, 170)'],
            //需要显示的图形名称，类型，以及数据设置
            series : [
                {
                    name:'人数',
                    //默认显
                    type:'bar',
                    data:this.state.apple
                }
            ]
        };
        return (
        <ScrollView>
            <View style={{flex:1,backgroundColor:"white"}}>
                <View style={{flexDirection:"row",height:130,marginTop:10}}>
                    <View style={{width:"48%",alignItems:"center",justifyContent:"space-around",borderRightColor:"#e0e0e0",borderRightWidth:1}}>
                        <Text>李公子</Text>
                        <Text style={{fontSize:18,color:"#333"}}>李明全</Text>
                    </View>
                    <View style={{width:"48%",alignItems:"center",justifyContent:"space-around"}}>
                        <Text style={{fontSize:17,color:"#333"}}>最终成绩</Text>
                        <Text style={{fontSize:50,color:"#20a1a1",fontWeight:"bold"}}>67</Text>
                        <Text>原始成绩：66.7</Text>
                    </View>
                </View>

                <View style={{borderTopColor:"#F0F0F0",borderTopWidth:8,borderBottomColor:"#F0F0F0",borderBottomWidth:8,marginTop:10,width:"100%",alignItems:"center"}}>
                    <Text style={{marginTop:20}}>学生成绩分布图</Text>
                    <Echarts option={option} height={300} width={width}/>
                </View>
                <View style={{justifyContent:'space-around',flexDirection:'row',alignItems:'center',width:'100%',height:44,marginTop:20}}>
                    <View style={{borderWidth:1, borderColor:"white", height:50,width:365,flexDirection:"row",marginLeft:"1%"}}>
                        <View style={{width:120,height:35,justifyContent:"center",flexDirection:'row',alignItems:"center",backgroundColor:"#20a1a1",borderColor:"#20a1a1",borderWidth:1}}>
                            <Text style={{color:"white",marginTop:-3}}>考勤</Text>
                        </View>
                        <View style={{width:120,height:35,justifyContent:"center",flexDirection:'row',alignItems:"center",backgroundColor:"white",borderColor:"#20a1a1",borderWidth:1}}>
                            <Text style={{color:"#1bb6b7",marginTop:-3}}>课堂表现</Text>
                        </View>
                        <View style={{width:120,height:35,justifyContent:"center",flexDirection:'row',alignItems:"center",backgroundColor:"white",borderColor:"#20a1a1",borderWidth:1}}>
                            <Text style={{color:"#20a1a1",marginTop:-3}}>学习活动</Text>
                        </View>
                    </View>
                </View>
                <View style={{width:"100%",flexDirection:"row",backgroundColor:"#F8F8F8"}}>
                    <View style={{height:90,width:"30%",alignItems:"center",justifyContent:"space-around",}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>考勤成绩</Text>
                    </View>
                    <View style={{height:90,width:"20%",alignItems:"center",justifyContent:"space-around"}}>
                        <Text>得分</Text>
                        <Text style={{fontWeight:"bold",fontSize:20,color:"#20a1a1"}}>80</Text>
                    </View>
                    <View style={{height:90,width:"20%",alignItems:"center",justifyContent:"space-around"}}>
                        <Text>比例</Text>
                        <Text style={{fontWeight:"bold",fontSize:20,color:"#20a1a1"}}>5.0</Text>
                    </View>
                    <View style={{height:90,width:"30%",alignItems:"center",justifyContent:"space-around"}}>
                        <Text>实际得分</Text>
                        <Text style={{fontWeight:"bold",fontSize:20,color:"#20a1a1"}}>4.0</Text>
                    </View>
                </View>
            </View>
            <View style={{width:"100%",height:50,flexDirection:"row",backgroundColor:"white",marginTop:40}}>
                <View style={{width:"50%",alignItems:"center",justifyContent:"center",borderColor:"#e0e0e0",borderWidth:1}}>
                    <Text style={{fontSize:18}}>上一个</Text>
                </View>
                <View style={{width:"50%",alignItems:"center",justifyContent:"center",borderColor:"#e0e0e0",borderWidth:1}}>
                    <Text style={{fontSize:18}}>下一个</Text>
                </View>
            </View>
        </ScrollView>
        );
    }
}
type Props = {};
const styles = StyleSheet.create({
    select: {
        width: '33%',
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0"
    }
});
