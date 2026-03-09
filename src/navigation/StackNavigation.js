import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/authScreen/SplashScreen";
import OnboardingScreen from "../screens/authScreen/OnboardingScreen";
import LoginScreen from  "../screens/authScreen/LoginScreen";
import RegisterScreen from "../screens/authScreen/RegisterSceen";

import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="SplashScreen" component={SplashScreen}/>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen  name="RegisterScreen" component={RegisterScreen}/>
      <Stack.Screen name="HomeScreen" component={DrawerNavigation}/>

    </Stack.Navigator>
  );
};

export default StackNavigation;