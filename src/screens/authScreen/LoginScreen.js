import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Card from "../../assets/image/WhiteBG.svg";
import CheckBox from "@react-native-community/checkbox";
import Ionicons from "react-native-vector-icons/Ionicons";
import Facebook from "../../assets/image/Facebook.svg";
import Twitter from "../../assets/image/twitter.svg";
import Apple from "../../assets/image/apple.svg";
import { storage } from "../../storage/storage";

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Save data in MMKV
    storage.set("isLoggedIn", true);
    storage.set("userEmail", email);

    // Log saved data
    console.log("Login Saved:", storage.getBoolean("isLoggedIn"));
    console.log("User Email:", storage.getString("userEmail"));

    navigation.replace("MainApp");
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Log In</Text>
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
                placeholder="*  *  *  *  *  *  *  *  *  *"
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

            <View style={styles.row}>

              <View style={styles.rememberContainer}>

                <CheckBox
                  value={remember}
                  onValueChange={setRemember}
                  tintColors={{ true: "#FF7622", false: "#ccc" }}
                  style={styles.CheckBox}
                />

                <Text style={styles.remember}>Remember me</Text>

              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPasswordScreen")}
              >
                <Text style={styles.forgot}>Forgot password</Text>
              </TouchableOpacity>

            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>

            <View style={styles.signupRow}>

              <Text style={styles.accountText}>
                Don't have an account?
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate("RegisterScreen")}
              >
                <Text style={styles.accountText1}> SIGN UP</Text>
              </TouchableOpacity>

            </View>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
              <Text style={{ fontSize: 16, fontFamily: "Sen-Regular", lineHeight: "100%", color: "#7E8A97" }}>Or</Text>
            </View>



            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                gap: 30,
              }}
            >

              <TouchableOpacity onPress={() => openLink("https://www.facebook.com")}>
                <Facebook width={60} height={62} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => openLink("https://twitter.com")}>
                <Twitter width={60} height={62} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => openLink("https://www.apple.com")}>
                <Apple width={60} height={62} />
              </TouchableOpacity>

            </View>

          </View>

        </View>

      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#050222",
  },

  titleContainer: {
    position: "absolute",
    top: 70,
    left: 138
  },

  subtitleContainer: {
    position: "absolute",
    top: 110,
    left: 42
  },

  subtitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Sen-Regular",
    lineHeight: 26
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Sen-Bold"
  },

  cardContainer: {
    position: "absolute",
    top: 100,
    width: "100%",
    alignItems: "center",
  },

  form: {
    position: "absolute",
    width: "100%",
    top: 90,
    paddingHorizontal: 15
  },

  label: {
    fontSize: 13,
    color: "#32343E",
    marginTop: 20,
    marginBottom: 6,
    fontFamily: "Sen-Regular",
    width: 70,
    height: 16

  },

  input: {
    height: 60,
    backgroundColor: "#F0F5FA",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    marginTop: 5,
    width: 380,

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
    fontSize: 14,
  },

  eyeIcon: {
    paddingHorizontal: 15
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18
  },

  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  remember: {
    fontSize: 14,
    color: "#7E8A97",
    fontFamily: "Sen-Regular"
  },

  forgot: {
    fontSize: 14,
    color: "#FF7622",
    fontFamily: "Sen-Regular",
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
  },
  CheckBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    paddingHorizontal: 16
  }

});