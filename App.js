import * as React from 'react';
//import { View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import BookDonationScreen from './screens/BookDonationScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



export default class App extends React.Component {
  render() {
    return (
<SafeAreaProvider>

   <AppContainer/>
   </SafeAreaProvider>
   
    );
  }
}
const switchNavigator = createSwitchNavigator({
WelcomeScreen:{screen:WelcomeScreen},
BottomTab: {screen: AppTabNavigator},
})
const AppContainer = createAppContainer(switchNavigator)