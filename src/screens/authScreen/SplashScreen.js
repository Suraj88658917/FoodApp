import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../../../src/assets/logo/Logo.svg";

import { storage } from "../../storage/storage";

const SplashScreen = ({ navigation }) => {

  useEffect(() => {

    const checkAppFlow = () => {

      const OnboardingScreen = storage.getBoolean("OnboardingScreen");
      const loginStatus = storage.getBoolean("isLoggedIn");

      console.log("Onboarding Status:", OnboardingScreen);
      console.log("Login Status:", loginStatus);

      setTimeout(() => {

        if (!OnboardingScreen) {

          console.log("Navigate → OnboardingScreen");
          navigation.replace("OnboardingScreen");

        } else if (loginStatus) {

          console.log("Navigate → HomeScreen");
          navigation.replace("MainApp");

        } else {

          console.log("Navigate → LoginScreen");
          navigation.replace("LoginScreen");

        }

      }, 2000);

    };

    checkAppFlow();

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