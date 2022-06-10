import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import RootStackScreen from './screens/RootStackScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer headerShown='false'>
      <RootStackScreen />
    </NavigationContainer>
  )
}