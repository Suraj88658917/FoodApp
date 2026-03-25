import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import {
  createDrawerNavigator,
} from "@react-navigation/drawer";

import TabNavigation from "./TabNavigation";
import DetailsScreen from "../screens/appScreen/DetailsScreen";

import Back1 from "../assets/image/back.svg";
import Info from "../assets/image/Info.svg";
import Arrow from "../assets/image/arrow.svg";
import Settings from "../assets/image/Settings.svg";
import History from "../assets/image/History.svg";
import Number from "../assets/image/Number.svg";
import User from "../assets/image/User.svg";
import Logout from "../assets/image/Logout.svg";


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {  

  const CustomDrawer = (props) => {
    return (
      <View style={styles.container}>
        
        <View style={styles.mboxContainer}>
          <View style={styles.headerRow}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => props.navigation.closeDrawer()}
            >
              <Back1 width={20} height={20} />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>My Profile</Text>
          </View>

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceAmount}>$500.00</Text>

            <TouchableOpacity
              style={styles.withdrawBtn}
              onPress={() => props.navigation.navigate("WithdrawScreen")}
            >
              <Text style={styles.withdrawText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>

       <ScrollView
       showsVerticalScrollIndicator={false}
       >
         <View style={{ marginTop: 25 }}>

          <TouchableOpacity
            style={styles.drawerRow}
            onPress={() => props.navigation.navigate("PersonalInfoScreen")}
          >
            <View style={styles.leftRow}>
              <Info width={40} height={40} />
              <Text style={styles.label}>Personal Info</Text>
            </View>

            <Arrow width={18} height={18} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drawerRow}
            // onPress={() => props.navigation.navigate()}
          >
            <View style={styles.leftRow}>
              <Settings width={40} height={40} />
              <Text style={styles.label}>Settings</Text>
            </View>

            <Arrow width={18} height={18} />
          </TouchableOpacity>

        </View>

         <View style={{ marginTop: 25 }}>

          <TouchableOpacity
            style={styles.drawerRow}
            // onPress={() => props.navigation.navigate()}
          >
            <View style={styles.leftRow}>
              <History width={40} height={40} />
              <Text style={styles.label}>Withdrawal History</Text>
            </View>

            <Arrow width={18} height={18} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drawerRow}
            // onPress={() => props.navigation.navigate()}
          >
            <View style={styles.leftRow}>
              <Number width={40} height={40} />
              <Text style={styles.label}>Number of Orders</Text>
            </View>

            <Text style={{fontSize:14 , fontFamily:"Sen-Regular" , color:"#626466"}}>29K</Text>
          </TouchableOpacity>

        </View>

         <View  style={{ marginTop: 25 }}>
           <TouchableOpacity
            style={styles.drawerRow}
            onPress={() => props.navigation.navigate("ProviderScreen")}
          >
            <View style={styles.leftRow}>
              <User width={40} height={40} />
              <Text style={styles.label}>ProviderScreen</Text>
            </View>

            <Arrow width={18} height={18} />
          </TouchableOpacity>

        </View>

        <View  style={{ marginTop: 25 }}>
           <TouchableOpacity
            style={styles.drawerRow}
            // onPress={() => props.navigation.navigate()}
          >
            <View style={styles.leftRow}>
              <User width={40} height={40} />
              <Text style={styles.label}>User Reviews</Text>
            </View>

            <Arrow width={18} height={18} />
          </TouchableOpacity>

        </View>

        <View  style={{ marginTop: 25 }}>
           <TouchableOpacity
            style={styles.drawerRow}
            // onPress={() => props.navigation.navigate()}
          >
            <View style={styles.leftRow}>
              <Logout width={30} height={40} />
              <Text style={styles.label}>Log Out</Text>
            </View>

            <Arrow width={18} height={18} />
          </TouchableOpacity>

        </View>

       </ScrollView>

      </View>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "100%",
        },
      }}
    >
      <Drawer.Screen
        name="MyProfileScreen"
        component={TabNavigation}
      />

      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  mboxContainer: {
    backgroundColor: "#FF7622",
    width: "100%",
    height: 270,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 16,
    fontFamily: "Sen-Regular",
    color: "#fff",
  },

  balanceContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  balanceLabel: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Sen-Regular",
  },

  balanceAmount: {
    fontSize: 36,
    fontFamily: "Sen-Bold",
    color: "#fff",
    marginTop: 5,
  },

  withdrawBtn: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 10,
  },

  withdrawText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Sen-Regular",
  },

  drawerRow: {
    backgroundColor: "#F6F6F6",
    marginHorizontal: 20,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:5
  },

  label: {
    marginLeft: 12,
    fontSize: 14,
    fontFamily: "Sen-Regular",
    color: "#000",
  },
});