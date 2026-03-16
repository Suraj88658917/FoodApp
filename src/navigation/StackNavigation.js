import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/authScreen/SplashScreen";
import OnboardingScreen from "../screens/authScreen/OnboardingScreen";
import LoginScreen from "../screens/authScreen/LoginScreen";
import RegisterScreen from "../screens/authScreen/RegisterSceen";
import ForgotPasswordScreen from "../screens/authScreen/ForgotPasswordScreen";
import DrawerNavigation from "./DrawerNavigation";
import VerificationScreen from "../screens/authScreen/VerificationScreen";
import LocationScreen from "../screens/authScreen/LocationScreen";
import SearchScreen from "../screens/appScreen/SearchScreen";
import BurgerScreen from "../screens/appScreen/BurgerScreen";
import SandwichScreen from "../screens/appScreen/SandwichScreen.js";
import PizzaScreen from "../screens/appScreen/PizzaScreen.js";
import FoodDetailsScreen from "../screens/appScreen/FoodDetailsScreen.js";
import RestaurantScreen from "../screens/appScreen/RestaurantScreen.js";
import MyProfileScreen from "../screens/appScreen/MyProfileScreen.js";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="LocationScreen" component={LocationScreen} />

      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="BurgerScreen" component={BurgerScreen} />
      <Stack.Screen name="SandwichScreen" component={SandwichScreen} />
      <Stack.Screen name="PizzaScreen" component={PizzaScreen} />
      <Stack.Screen name="FoodDetailsScreen" component={FoodDetailsScreen} />
      <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />

         <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      
      <Stack.Screen name="MainApp" component={DrawerNavigation} />

    </Stack.Navigator>
  );
};

export default StackNavigation;