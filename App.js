import React from 'react';
import { StyleSheet, Text, View , Component, SideMenu,Image,} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation';
import { DrawerNavigator, DrawerItems } from 'react-navigation';


import ResultScreen from './Screen/ResultScreen'

import AfterSkip from './Screen/AfterSkip'
import IITJEE from './Screen/IITJEE'
import CACPT from './Screen/CACPT'
import NEET from './Screen/NEET'
import CAFOUNDATION from './Screen/CAFOUNDATION'
import REGISTRATION from './Screen/REGISTRATION'
import SplashScreen from './Screen/SplashScreen'
import { Ionicons } from '@expo/vector-icons';
import SignUp from './Screen/SignUp'

import Test1 from './Screen/Test1'
import Test2 from './Screen/Test2'
import FindFriends from './Screen/FindFriends'
import Blogs from './Screen/Blogs'
import Setting from './Screen/Setting'
import Doubts from './Screen/Doubts'
import Share from './Screen/Share'
const MyNavigator = createDrawerNavigator({

  AfterSkip: {
    screen: AfterSkip,
    navigationOptions:{

        drawerLabel:'StudyDuniya',



    },
  },

    LOGIN: {
        screen: REGISTRATION,
        navigationOptions:{

            drawerLabel:'LOGIN',
            drawerIcon: () => (
               <Image source={require('./logout.png')}
              style={{width: 25, height: 25,  }} />
              ),

        },
    },

    Share: {
        screen: Share,
        navigationOptions:{

            drawerLabel:'Share',
            drawerIcon: () => (
               <Image source={require('./share.png')}
              style={{width: 25, height: 25,  }} />
              ),

        },
    },


})
const MyNavigator1 = createDrawerNavigator({

  IITJEE: {screen: IITJEE,

},

LOGIN: {
    screen: REGISTRATION,
    navigationOptions:{


        drawerLabel:'Login',
           drawerIcon: () => (
              <Image source={require('./logout.png')}
             style={{width: 25, height: 25, }} />
             ),

    },
},
  Feeds: {
        screen:REGISTRATION,
        navigationOptions:{

            drawerLabel:'Feeds',
               drawerIcon: () => (
                  <Image source={require('./feeds.png')}
                 style={{width: 25, height: 25,   }} />
                 ),

        },
    },
    share: {
          screen:Share,
          navigationOptions:{

              drawerLabel:'share',
                 drawerIcon: () => (
                    <Image source={require('./share.png')}
                   style={{width: 25, height: 25,  }} />
                   ),

          },
      },
})
const MyNavigator2 = createDrawerNavigator({

  CACPT: {screen: CACPT,
    navigationOptions:{
      headerTitle:'CACPT',
    },
  },
  LOGIN: {
      screen: REGISTRATION,
      navigationOptions:{

          drawerLabel:'Login',
             drawerIcon: () => (
                <Image source={require('./logout.png')}
               style={{width: 25, height: 25,  }} />
               ),

      },
  },
    Feeds: {
          screen:REGISTRATION,
          navigationOptions:{

              drawerLabel:'Feeds',
                 drawerIcon: () => (
                    <Image source={require('./feeds.png')}
                   style={{width: 25, height: 25,  }} />
                   ),

          },
      },
      share: {
            screen:Share,
            navigationOptions:{

                drawerLabel:'share',
                   drawerIcon: () => (
                      <Image source={require('./share.png')}
                     style={{width: 25, height: 25,   }} />
                     ),

            },
        },

})
const MyNavigator3 = createDrawerNavigator({

  NEET: {screen: NEET,
      navigationOptions:{
        headerTitle:'NEET',
      },
    },
    LOGIN: {
        screen: REGISTRATION,
        navigationOptions:{

            drawerLabel:'Login',
               drawerIcon: () => (
                  <Image source={require('./logout.png')}
                 style={{width: 25, height: 25,   }} />
                 ),

        },
    },
      Feeds: {
            screen:REGISTRATION,
            navigationOptions:{

                drawerLabel:'Feeds',
                   drawerIcon: () => (
                      <Image source={require('./feeds.png')}
                     style={{width: 25, height: 25,  }} />
                     ),

            },
        },
        share: {
              screen:Share,
              navigationOptions:{

                  drawerLabel:'share',
                     drawerIcon: () => (
                        <Image source={require('./share.png')}
                       style={{width: 25, height: 25,   }} />
                       ),

              },
          },

})
const MyNavigator4 = createDrawerNavigator({

  CAFOUNDATION: {screen: CAFOUNDATION,
    navigationOptions:{
      headerTitle:'CAFOUNDATION',
    },
  },
  LOGIN: {
      screen: REGISTRATION,
      navigationOptions:{

          drawerLabel:'Login',
             drawerIcon: () => (
                <Image source={require('./logout.png')}
               style={{width: 25, height: 25,  }} />
               ),

      },
  },
    Feeds: {
          screen:REGISTRATION,
          navigationOptions:{

              drawerLabel:'Feeds',
                 drawerIcon: () => (
                    <Image source={require('./feeds.png')}
                   style={{width: 25, height: 25,   }} />
                   ),

          },
      },
      share: {
            screen:Share,
            navigationOptions:{

                drawerLabel:'share',
                   drawerIcon: () => (
                      <Image source={require('./share.png')}
                     style={{width: 25, height: 25,   }} />
                     ),

            },
        },

})
const MyNavigator5 = createDrawerNavigator({

  REGISTRATION: {screen: REGISTRATION,
    navigationOptions:{

      headerStyle: {
        backgroundColor: '#00bfff',

      },

      headerLeft: null,
    },
  },

Feeds: {
      screen: REGISTRATION,
      navigationOptions:{

          drawerLabel:'Feeds',
             drawerIcon: () => (
                <Image source={require('./feeds.png')}
               style={{width: 25, height: 25,  }} />
               ),

      },
  },
      LOGIN: {
          screen: FindFriends,
          navigationOptions:{

              drawerLabel:'Find Friends',
                 drawerIcon: () => (
                    <Image source={require('./images.png')}
                   style={{width: 25, height: 25,   }} />
                   ),

          },
      },
      Doubts: {
            screen:Doubts,
            navigationOptions:{

                drawerLabel:'Doubts',
                   drawerIcon: () => (
                      <Image source={require('./doubt.png')}
                     style={{width: 25, height: 25,  }} />
                     ),

            },
        },
        settings: {
              screen:Setting,
              navigationOptions:{

                  drawerLabel:'settings',
                     drawerIcon: () => (
                        <Image source={require('./setting.png')}
                       style={{width: 25, height: 25,  }} />
                       ),

              },
          },
          Share: {
                screen:Share,
                navigationOptions:{

                    drawerLabel:'Share',
                       drawerIcon: () => (
                          <Image source={require('./share.png')}
                         style={{width: 25, height: 25,   }} />
                         ),

                },
            },

              Blogs: {
                    screen:Blogs,
                    navigationOptions:{

                        drawerLabel:'Blogs',
                           drawerIcon: () => (
                              <Image source={require('./blogs.png')}
                             style={{width: 25, height: 25,  }} />
                             ),

                    },
                },
                Logput: {
                      screen:REGISTRATION,
                      navigationOptions:{

                          drawerLabel:'Logout',
                             drawerIcon: () => (
                                <Image source={require('./logout.png')}
                               style={{width: 25, height: 25,  }} />
                               ),

                      },
                  },
})

MyNavigator.navigationOptions = {

  headerTitle:'             StudyDuniya',
  headerStyle: {
    backgroundColor: '#00bfff'
  },
  headerTintColor: 'white',
   headerLeft: null,
};
MyNavigator1.navigationOptions = {

    headerTitle:'         StudyDuniya',
    headerStyle: {
      backgroundColor: '#00bfff'
    },
headerTintColor: 'white',
   headerLeft: null,

};
MyNavigator2.navigationOptions = {

    headerTitle:'         StudyDuniya',
    headerStyle: {
      backgroundColor: '#00bfff'
    },
headerTintColor: 'white',
   headerLeft: null,

};
MyNavigator3.navigationOptions = {

    headerTitle:'         StudyDuniya',
    headerStyle: {
      backgroundColor: '#00bfff'
    },
headerTintColor: 'white',
   headerLeft: null,

};
MyNavigator4.navigationOptions = {

    headerTitle:'         StudyDuniya',
    headerStyle: {
      backgroundColor: '#00bfff'
    },
headerTintColor: 'white',
   headerLeft: null,

};
MyNavigator5.navigationOptions = {

    headerTitle:'         StudyDuniya',
    headerStyle: {
      backgroundColor: '#00bfff',

    },
headerTintColor: 'white',
  fontFamily: 'Montserrat',
   headerLeft: null,

};


const AppNavigator = createStackNavigator({



  ResultScreen:{screen:ResultScreen,
     navigationOptions:{

       headerTitle:'                 STUDYDUNIYA',
       headerStyle: {
         backgroundColor: '#00bfff',

       },

       headerTintColor: 'white',
     },
      headerMode: 'screen',

  },
  Drawer:{screen: MyNavigator,

  },
  Drawer1: {screen: MyNavigator1,
  navigationOptions: ({navigation}) => ({

   gesturesEnabled: true,
   headerLeft: <Text onPress={() => { navigation.navigate('DrawerToggle')}}>Menu</Text>
 })
},
  Drawer2: MyNavigator2,
  Drawer3: MyNavigator3,
Drawer4: MyNavigator4,
Drawer5: MyNavigator5,


  SignUp: {screen: SignUp,
    navigationOptions:{
      headerTitle:'STUDYDUNIYA',
      headerStyle: {
        backgroundColor: '#00bfff',

      },
headerTintColor: 'white',
      headerLeft: null,

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
