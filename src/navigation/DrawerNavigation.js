import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import Menu1 from "../assets/image/Menu.svg";
import TabNavigation from "./TabNavigation";
import DetailsScreen from "../screens/appScreen/DetailsScreen";
import Cart1 from "../assets/image/Cart.svg";
import { Text  , View} from "react-native";
import Polygon1 from "../assets/image/Polygon.svg";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
  screenOptions={({ navigation }) => ({
    headerTitle: "",
     headerShadowVisible: false,

    headerLeft: () => (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 15,
        }}
      >
        {/* Menu Button */}
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Menu1 size={24} />
        </TouchableOpacity>

        {/* Location Text */}
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: "#FF7622", fontSize: 12 , fontFamily:"Sen-Bold" }}>
            DELIVER TO
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontFamily: "Sen-Regular", fontSize: 13 , color:"#787373" , lineHeight:15 }}>
              Halal Lab office
            </Text>

           <TouchableOpacity>
             <Polygon1 size={12} style={{ marginLeft: 7 }} />
           </TouchableOpacity>
          </View>
        </View>
      </View>
    ),

    headerRight: () => (
      <TouchableOpacity style={{ marginRight: 15 }}>
        <Cart1 size={24} />
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