import React,{ Component } from 'react';

import {
  Text,View,Image,TouchableHighlight
} from 'react-native';
import {Info} from '../ScreenName';
const backgroundColor ='#0067a7';
export default class HomeComponent extends Component{
  static navigationOptions ={{navigation}}=>{
    let driverLable ='Home';
    let drawerIcon ={}=>(
      <Image
      source={require('../icons/home-icon.png')}
      style={{width:26,height:26,tintcolor:backgroundColor}}
    />
  );
    return{drawerLabel,drawerIcon};
    render(){
      return (<View style={{
        flex: 1,
        flexDirection:'coloum',
        <View style={{
          flex:1;
           backgroundColor:backgroundColor,
          alignItems:'center',
          justifyContent:'center'
        }}>
      <Text style ={{fontWeight:'bold',fontSize:22,color:'white'}}>
this is home Screen
</Text>
<TouchableHighlight style={{
  margin:20,
  width:200,
  height:45,
  backgroundColor:'darkblue',
  padding:10,
  alignItems:'center',
}}
onPress={()=>{
  const {
    navigate
  }= this.props.navigation;
  navigate(Info);

}}>
</View>
</View>
);
    }
  }
