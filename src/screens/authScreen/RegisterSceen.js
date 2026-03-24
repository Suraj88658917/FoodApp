import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Card from "../../assets/image/WhiteBG.svg";
import Ionicons from "react-native-vector-icons/Ionicons";
import Back from "../../assets/image/back.svg";
import { storage } from "../../storage/storage";

const RegisterScreen = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    // Save data in MMKV
    storage.set("userName", name);
    storage.set("userEmail", email);
    storage.set("userPassword", password);
    storage.set("isLoggedIn", true);

    // Console logs
    console.log("User Name:", storage.getString("userName"));
    console.log("User Email:", storage.getString("userEmail"));
    console.log("User Password:", storage.getString("userPassword"));
    console.log("Login Status:", storage.getBoolean("isLoggedIn"));

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account Created Successfully");

    navigation.replace("LocationScreen");
  };

  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Back width={18} height={18} />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign up</Text>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
          Please sign up to get started
        </Text>
      </View>

      <View style={styles.cardContainer}>

        <Card width={"100%"} height={730} />

        <View style={styles.form}>

          <Text style={styles.label}>NAME</Text>

         <View>
           <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#7E8A97"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
         </View>

          <Text style={styles.label}>EMAIL</Text>

         <View>
           <TextInput
            placeholder="example@gmail.com"
            placeholderTextColor="#7E8A97"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
         </View>

          <Text style={styles.label}>PASSWORD</Text>

          <View style={styles.passwordContainer}>

            <TextInput
              placeholder="*  *  *  *  *  *  *  *"
              placeholderTextColor="#7E8A97"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={22}
                color="#777"
              />
            </TouchableOpacity>

          </View>

          <Text style={styles.label}>CONFIRM PASSWORD</Text>

          <View style={styles.passwordContainer}>

            <TextInput
              placeholder="*  *  *  *  *  *  *  *"
              placeholderTextColor="#7E8A97"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              style={styles.passwordInput}
            />

            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showConfirmPassword ? "eye" : "eye-off"}
                size={22}
                color="#777"
              />
            </TouchableOpacity>

          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSignup}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <View style={styles.signupRow}>
            <Text style={styles.accountText}>Already have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={styles.accountText1}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </ScrollView>
      </KeyboardAvoidingView >
    
  );
};

export default RegisterScreen;

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
    left: 138
  },

  subtitleContainer: {
    position: "absolute",
    top: 157,
    left: 82
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Sen-Bold"
  },

  subtitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Sen-Regular",
    lineHeight: 26
  },

  cardContainer: {
    position: "absolute",
    top: 230,
    width: "100%",
    alignItems: "center"
  },

  form: {
    position: "absolute",
    width: "100%",
    top: 60,
    paddingHorizontal: 15
  },

  label: {
    fontSize: 13,
    color: "#32343E",
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

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F5FA",
    borderRadius: 12,
    height: 58
  },

  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 14
  },

  eyeIcon: {
    paddingHorizontal: 15
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
  },

  signupRow: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20
  },

  accountText: {
    color: "#7E8A97",
    fontSize: 14,
    fontFamily: "Sen-Regular"
  },

  accountText1: {
    color: "#FF7622",
    fontSize: 13,
    fontFamily: "Sen-Bold",
    paddingHorizontal: 4
  }

});