import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import Logo from "../../../src/assets/logo/Logo.svg";


const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("OnboardingScreen");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
       <Logo width={121.13} height={58.88}/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"

  },

});