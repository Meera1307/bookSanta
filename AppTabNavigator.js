import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonationScreen from '../screens/BookDonationScreen';
import BookRequestScreen from '../screens/BookRequestScreen';
//import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export const AppTabNavigator = createBottomTabNavigator({

donateBooks: {screen: BookDonationScreen, 
navigationOptions: {
tabBarIcon: <Image source= {require("../assets/bookDonate.jpg")} style = {{width: 20, height: 20}} />
}},
requestBook: {screen: BookRequestScreen, 
navigationOptions: {
tabBarIcon: <Image source= {require("../assets/bookRequest.jpg")} style = {{width: 20, height: 20}}/>
}},
})
