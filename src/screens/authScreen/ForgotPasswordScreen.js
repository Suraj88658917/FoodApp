import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Card from "../../assets/image/WhiteBG.svg";
import Back from "../../assets/image/back.svg";
import { storage } from "../../storage/storage";

const ForgotPasswordScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");

  const handleReset = () => {

    if (!email) {
      alert("Please enter email");
      return;
    }

    // Save email in MMKV
    storage.set("forgotEmail", email);

    // log check
    console.log("Saved Email:", storage.getString("forgotEmail"));

    navigation.navigate("VerificationScreen");
  };


  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Back width={18} height={18} />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Forgot Password</Text>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
         Please sign in to your existing account
        </Text>
      </View>

      <View style={styles.cardContainer}>

        <Card width={"100%"} height={730} />

        <View style={styles.form}>

          <Text style={styles.label}>EMAIL</Text>

          <TextInput
            placeholder="example@gmail.com"
            placeholderTextColor="#7E8A97"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleReset}
          >
            <Text style={styles.buttonText}>SEND CODE</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#050222",
  },

  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5
  },

  titleContainer: {
    position: "absolute",
    top: 118,
    left: 70,
  },

  title: {
    color: "#ffffff",
    fontSize: 30,
    fontFamily: "Sen-Bold"
  },

  subtitleContainer: {
    position: "absolute",
    top: 157,
    left: 42
  },

  subtitle: {
    color: "#bbb6b6",
    fontSize: 16,
    fontFamily: "Sen-Regular",
    lineHeight: 26
  },

  cardContainer: {
    position: "absolute",
    top: 180,
    width: "100%",
    alignItems: "center"
  },

  form: {
    position: "absolute",
    width: "85%",
    top: 60
  },

  label: {
    fontSize: 13,
    color: "#000000",
    marginTop: 20,
    marginBottom: 6,
    fontFamily: "Sen-Regular"
  },

  input: {
    height: 58,
    backgroundColor: "#F0F5FA",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 14
  },

  button: {
    backgroundColor: "#FF7622",
    marginTop: 30,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Sen-Bold"
  }

});