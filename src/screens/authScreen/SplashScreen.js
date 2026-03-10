import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../../../src/assets/logo/Logo.svg";

import { storage } from "../../storage/storage";

const SplashScreen = ({ navigation }) => {

  useEffect(() => {

    const checkOnboarding = () => {

      const value = storage.getBoolean("OnbordingScreen");
      console.log("Splash Value:", value);

      setTimeout(() => {

        if (storage.getBoolean("OnbordingScreen")) {
          navigation.replace("LoginScreen");
        } else {
          navigation.replace("OnbordingScreen");
        }

      }, 2000);

    };

    checkOnboarding();

  }, []);

  return (
    <View style={styles.container}>
      <Logo width={121.13} height={58.88} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});