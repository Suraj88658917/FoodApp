import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { storage } from "../../storage/storage";

const HomeScreen = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    const savedName = storage.getString("userName");
    const savedEmail = storage.getString("userEmail");

    if (savedName) {
      setName(savedName);
    }

    if (savedEmail) {
      setEmail(savedEmail);
    }

    console.log("User Name:", savedName);
    console.log("User Email:", savedEmail);

  }, []);

  const handleLogout = () => {

    storage.delete("isLoggedIn");

    console.log("User Logged Out");

    navigation.replace("LoginScreen");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome</Text>

      <Text style={styles.text}>Name: {name}</Text>

      <Text style={styles.text}>Email: {email}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>LOGOUT</Text>
      </TouchableOpacity>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20
  },

  text: {
    fontSize: 18,
    marginBottom: 10
  },

  button: {
    marginTop: 30,
    backgroundColor: "#FF7622",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }

});