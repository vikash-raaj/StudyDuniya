import React,{ Component } from 'react';

import {
  Text,View,Image,TouchableHighlight
} from 'react-native';
export default class HomeComponent extends Component{
  render (){
    return (<View style ={{
      height:90,
      flexDirection:'row',
      justifyContent:'flex-start',
      alighItems:'center'
    }}>
TouchableHighlight style ={{marginLeft:10,marginTop:20}}
onPress={(=>
{
  const { navigate }=this.props.navigation;
  navigate('DrawerOpen');
  }
})}
  )
  }
}
