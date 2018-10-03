import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Component  } from 'react-native';
export default class Splashh extends Component{
  static navigationOptions={
    header:null
  }
  componentWillMount()
{
  this.settimeout(()=>{
    this.props.navigation.navigate('Fi');
  },4000)
}
  render(){
    return(
      <View >
      <Text > Splash Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
