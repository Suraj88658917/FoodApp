import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import TabNavigation from "./TabNavigation";
import DetailsScreen from "../screens/appScreen/DetailsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 15 }}
            onPress={() => navigation.toggleDrawer()}
          >
            <Icon name="menu" size={28} />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="HomeScreen" component={TabNavigation} />
      <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;