import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/appScreen/HomeScreen";
import ListScreen from "../screens/appScreen/ListScreen";
import NotificationScreen from "../screens/appScreen/NotificationScreen";
import ProfileScreen from "../screens/appScreen/ProfileScreen";
import AddScreen from "../screens/appScreen/AddScreen";

import Home from "../assets/image/Home.svg";
import List from "../assets/image/List.svg";
import Add from "../assets/image/add.svg";
import Notification from "../assets/image/notification.svg";
import Profile from "../assets/image/profile.svg"; 

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 110,  
        },
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Home width={25} height={24} marginTop={50} fill={focused ? "#FF7622" : "#999"} />
          ),
        }}
      />

      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <List width={25} height={24}  marginTop={50} fill={focused ? "#FF7622" : "#999"} />
          ),
        }}
      />
       <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Add width={57} height={57}   marginTop={50} fill={focused ? "#FF7622" : "#999"} />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
         options={{
          tabBarIcon: ({ focused }) => (
            <Notification width={25} height={24}  marginTop={50} fill={focused ? "#FF7622" : "#999"} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
         options={{
          tabBarIcon: ({ focused }) => (
            <Profile width={24} height={24}   marginTop={50} fill={focused ? "#FF7622" : "#999"} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default TabNavigation;