import React from 'react';
import PageBase from './PageBase';
import {View} from 'react-native';
export default class Test extends PageBase{
    constructor(props){
        super(props);
    }
    render(){
        return <View style={{flex:1, backgroundColor:'#f000ff'}}/>;
    }
}