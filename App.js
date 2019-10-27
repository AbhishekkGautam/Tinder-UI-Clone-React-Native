import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './screens/HomeScreen';
import Matches from './screens/MatchesScreen';
import Messages from './screens/MessagesScreen';
import Profile from './screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./assets/styles";


const MainApp = createBottomTabNavigator(
  {
    EXPLORE: Home,
    MATCHES: Matches ,
    CHAT: Messages,
    PROFILE: Profile,
  
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const iconFocused = focused ? "#7444C0" : "#363636";
        if (routeName === 'EXPLORE') {
          return (
            
							<Icon name="search" size={20}  color={tintColor}/>
					
          );
        } else if (routeName === 'MATCHES') {
          return (

            
							<Icon name="favorite" size={20}  color={tintColor}/>
					
          );
        } else if (routeName === 'CHAT') {
          return (
            
							<Icon name="chat-bubble" size={20}  color={tintColor}/>
					
          );
        
      } else {
        return (
         
							<Icon name="person" size={20}  color={tintColor}/>
					
        );
      
    } 
      }, 
      }),
    tabBarOptions: {
      activeTintColor: '#FF2152',
      inactiveTintColor: '#616C6F',
      
    },
    labelStyle: {
      upperCaseLabel: true,
      paddingTop: 10
    },
   
  }
);

export default createAppContainer(MainApp);
