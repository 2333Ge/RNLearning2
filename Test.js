import React from "React";
import {View} from 'react-native';
import PropTypes from 'prop-types'; 

const Test = (number) =>{
    return <View style={{flex:1, backgroundColor:'#fff000'}}/>;
}
Test.propTypes = {
    number: PropTypes.number,
}// 无状态组件也可指定属性类型
export default Test;