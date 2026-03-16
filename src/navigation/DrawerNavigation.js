import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigation from "./TabNavigation";
import DetailsScreen from "../screens/appScreen/DetailsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen
        name="MyProfileScreen"
        component={TabNavigation}
        options={{ title: "My Profile" }}
      />

      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Details" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;