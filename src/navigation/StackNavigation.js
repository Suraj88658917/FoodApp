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
import ChefFoodDetailsScreen from "../screens/appScreen/ChefFoodDetailsScreen.js";
import WithdrawScreen from "../screens/appScreen/WithdrawScreen.js";
import PersonalInfoScreen from "../screens/appScreen/PersonalInfoScreen.js";
import EditScreen from "../screens/appScreen/EditScreen.js";
import ProfileScreen from "../screens/appScreen/ProfileScreen.js";
import AddressScreen from "../screens/appScreen/AddressScreen.js";
import ADDaddress from "../screens/appScreen/ADDaddress.js";

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

      <Stack.Screen name="ChefFoodDetailsScreen" component={ChefFoodDetailsScreen} />
      <Stack.Screen name="WithdrawScreen" component={WithdrawScreen} />
      <Stack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} />
      <Stack.Screen name="EditScreen" component={EditScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
       <Stack.Screen name="AddressScreen" component={AddressScreen} />
          <Stack.Screen name="ADDaddress" component={ADDaddress} />

      <Stack.Screen name="MainApp" component={DrawerNavigation} />

    </Stack.Navigator>
  );
};

export default StackNavigation;