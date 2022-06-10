import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator >
        <RootStack.Screen name="SplashScreen" component={SplashScreen} screenOptions={{headerShown:false}}/>
        <RootStack.Screen name="HomeScreen" component={HomeScreen} screenOptions={{headerShown:false}}/>  
    </RootStack.Navigator>
);

export default RootStackScreen;