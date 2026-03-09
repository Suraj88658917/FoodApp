import React from "react";
import { View, Text, Button } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>Onboarding Screen</Text>

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
};

export default OnboardingScreen;