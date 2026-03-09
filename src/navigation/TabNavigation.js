import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/appScreen/HomeScreen";
import ListScreen from "../screens/appScreen/ListScreen";
import NotificationScreen from "../screens/appScreen/NotificationScreen";
import ProfileScreen from "../screens/appScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator  screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ListScreen" component={ListScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;