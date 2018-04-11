import React, {Component} from "react";
import {Image, Text, TouchableHighlight, View} from "react-native";

export default class CheckBox extends Component {

    constructor(props) {
        super(props);
        this.state = {cb_check: false}
        const {isChecked} = this.props;
        this.state.cb_check = isChecked;
    }

    _onPress = () => {
        this.setState(previousState => {
            const iscb = !previousState.cb_check
            const {dianji} = this.props;
            dianji(iscb);
            return {cb_check: iscb};
        });


    }

    render() {
        return (
            <TouchableHighlight
                activeOpacity={0.5} //透明度设置
                underlayColor="#B5B5B5"  //点击后颜色
                onPress={this._onPress.bind(this)}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    paddingLeft: 16,
                    alignItems: 'center',
                    minHeight: 50
                }}>
                    {this.state.cb_check ?
                        <Image
                            style={{width: 20, height: 20, marginLeft: 20, marginRight: 10}}
                            source={require('../../Configure/Resource/check.png')}
                        />
                        :
                        <Image
                            style={{width: 20, height: 20, marginLeft: 20, marginRight: 10}}
                            source={require('../../Configure/Resource/checknone.png')}
                        />}
                    <Text style={{marginRight: 20, color: '#333333'}}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}