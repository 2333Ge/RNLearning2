
import React from 'react';
import { BackHandler } from 'react-native';

export default class PageBase extends React.Component{
  constructor(props){
      super(props);
      this.handleBackSignal = this.handleBackSignal.bind(this);
  }
  handleBackSignal() {
    const {onBackPress = ()=>{}} = this.props;
    onBackPress();
    return true;
}
componentDidMount() {
    if ( Platform.OS === "android" )
        BackHandler.addEventListener('hardwareBackPress', this.handleBackSignal);// 挂钩
}
componentWillUnmount() {
    alert('123');
    if ( Platform.OS === "android" )
        BackHandler.removeEventListener('hardwareBackPress',this.handleBackSign);
}
}

