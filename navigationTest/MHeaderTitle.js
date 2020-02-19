import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
} from 'react-native';

const Header = () => {
    return(
        <View style={{alignItems:'center',flex:1}}>
        <Text>自定义组件
            headerTitle: 组件
          </Text>
        </View>
    );
}
export  default class MHeaderTitle extends React.Component{
    static navigationOptions = {
      headerTitle: <Header />,
      headerRight: (
        <Button
          onPress={() => alert('headerRight!')}
          title="00"
          color="#ff000f"
        />
      ),
      headerLeft:(
        <Button
          onPress={() => alert('headerLeft!')}
          title="headerLeft"
          color="#ff000f"
        />
      ),
    }
    render(){
        return(
          <Text> MHeaderTitle </Text>
        );
    }
}
