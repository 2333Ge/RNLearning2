import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
} from 'react-native';

export  default class testParams extends React.Component{
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('title', 'title'),
        // title样式
        headerStyle: {
          backgroundColor: '#f4511e',
          
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        /**
          headerStyle：一个应用于 header 的最外层 View 的 样式对象， 如果你设置 backgroundColor ，他就是header 的颜色。
          headerTintColor：返回按钮和标题都使用这个属性作为它们的颜色。 在下面的例子中，我们将 tint color 设置为白色（#fff），所以返回按钮和标题栏标题将变为白色。
          headerTitleStyle：如果我们想为标题定制fontFamily，fontWeight和其他Text样式属性，我们可以用它来完成。
         */
      };
    }

    /* 
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      };
    }
    可这样设置可变标题
    传递给navigationOptions函数的参数是具有以下属性的对象：

    navigation - 页面的 导航属性 ，在页面中的路由为navigation.state。
    screenProps - 从导航器组件上层传递的 props
    navigationOptions - 如果未提供新值，将使用的默认或上一个选项
    */
    constructor(props){
        super(props);
    }
    render(){
      const {text} = this.props.navigation.state.params;// 
      // this.props.navigation.getParam();//也可这样获得参数
        return(
          <View>
            <Text>{text}</Text>
            <Button title='navigation.setParams更新navigationOptions' 
            onPress={()=>{this.props.navigation.setParams({title:'update title'})}}
             />
          </View>
        );
    }
}