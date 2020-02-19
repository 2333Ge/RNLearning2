
import React from 'react';
import ChosePage from './ChosePage';
// import ChosePageReactNavigation from './ChosePage2';
import Test from './Test';
import Test2 from './Text2';
import MView from './MView';
import TestParams from './navigationTest/testParams';
import TestMHeaderTitle from './navigationTest/MHeaderTitle'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import T from 'react-native-ych-test';
import {
  View,
  Text,
} from 'react-native';
const titles = ['首页','测试无状态组件默认属性','继承+重写返回键','View效果'];
const titlesReactNavigation = ['navigate:MView','push:chosePage','navigate:chosePage','传递数据+header Title', '自定义header'];
const tools = ['自定义插件'];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pageIndex: 0
    };
  }
  render(){
    return(
      <View>
      {this.page()}
       <Text style={{alignSelf:'center', fontSize:20}}>react-navigation切换页面</Text>
       <ChosePage 
         onItemPress={(index) => {
           switch(index){
             case 0: this.props.navigation.navigate('MVV');break;
             case 1: this.props.navigation.push('Home');break;// 可入栈统一页面,navigation.popToTop() `，它可以返回到堆栈中的第一个页面。navigation.goback返回上一页面
             case 2: this.props.navigation.navigate('Home');break; // 参照
             case 3: this.props.navigation.navigate('TestParams',{text: '传递的数据'});break; // 传数据
             case 4: this.props.navigation.navigate('testHeader');break; // 参照
           }
           }}
         items={titlesReactNavigation}
       />
       <Text style={{alignSelf:'center', fontSize:20}}>功能测试</Text>
       <ChosePage 
         onItemPress={(index) => {
           switch(index){
             case 0:  T.show("自定义原生插件", T.SHORT); // SHORT: 原生端预定义的             ;
           }
           }}
         items={tools}
       />
    </View>
    );
  }
  /**
   * stage更换当前页面
   */
  page = () => {
    const pages =[
      <ChosePage 
        onItemPress={(index) => {
          this.setState({pageIndex: index})
          }}
        items={titles}
      />,
      <Test number='te'/>,
      <Test2 onBackPress={()=> {this.setState({pageIndex:0})}}/>,
      <MView />,
    ]
    const {pageIndex} = this.state;
    return(
      pages[pageIndex]
    );
  }
}

//======== 路由 =========
const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
});
//简写，对Home唯一的路由配置是页面组件，我们不需要使用{screen：HomeScreen}配置格式，我们可以直接使用页面组件
const AppNavigator_jianXie = createStackNavigator({
  Home: App,
});
// 添加多个页面
const AppNavigatorMorePage = createStackNavigator(
  {
    Home: App,
    MVV: MView,
    TestParams:TestParams,
    testHeader: TestMHeaderTitle,
  },
  {
    initialRouteName: 'Home',

    //  默认属性
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ff00ff',
      },
      headerTintColor: '#0ffff0',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default createAppContainer(AppNavigatorMorePage);

