
import React from 'react';
import { StyleSheet, Text, View , Component} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import {DrawerNavigator} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation';

import FirstScreen from  '../Screen/FirstScreen'

import ResultScreen from '../Screen/ResultScreen'
import Home1 from '../Screen/Home1'
import AfterSkip from '../Screen/AfterSkip'
import IITJEE from '../Screen/IITJEE'
import CACPT from '../Screen/CACPT'
import NEET from '../Screen/NEET'
import CAFOUNDATION from '../Screen/CAFOUNDATION'
import REGISTRATION from '../Screen/REGISTRATION'
import SplashScreen from '../Screen/SplashScreen'
import { Ionicons } from '@expo/vector-icons';
import SignUp from '../Screen/SignUp'


const AppNavigator = createStackNavigator({



  ResultScreen:{screen:ResultScreen,
     navigationOptions:{
       headerTitle:'                 STUDYDUNIYA',

     },
  },
  AfterSkip: {screen: AfterSkip,
    navigationOptions:{
      headerTitle:'STUDYDUNIYA',
    },
  },
  IITJEE: {screen: IITJEE,
  navigationOptions:{
    headerTitle:'IITJEE',
  },
},
CACPT: {screen: CACPT,
  navigationOptions:{
    headerTitle:'CACPT',
  },
},
NEET: {screen: NEET,
    navigationOptions:{
      headerTitle:'NEET',
    },
  },
  CAFOUNDATION: {screen: CAFOUNDATION,
    navigationOptions:{
      headerTitle:'CAFOUNDATION',
    },
  },
  REGISTRATION: {screen: REGISTRATION,
    navigationOptions:{
      headerTitle:'REGISTRATION',
    },
  },

  SignUp: {screen: SignUp,
    navigationOptions:{

    },
  },

})
export default  class App extends React.Component {

  render() {

    return (
        <AppNavigator />

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
