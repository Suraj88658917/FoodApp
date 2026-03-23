import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CardClose from "../../assets/image/CardClose.svg";

const AddCardScreen = ({ navigation }) => {

  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handleAddCard = () => {

    if (!name || !cardNumber || !expiry || !cvc) {
      Alert.alert("Error", "Please fill all details");
      return;
    }

    const newCard = {
      name,
      cardNumber,
      expiry,
      cvc
    };

     console.log("Card Saved:", newCard);

    navigation.navigate("PaymentScreen", { newCard });
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={{ width: 68, justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <CardClose width={45} height={45} />
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center", width: 120 }}>
          <Text style={styles.title}>Add Card</Text>
        </View>

      </View>

      <View style={styles.form}>

        <Text style={styles.label}>CARD HOLDER NAME</Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Text style={styles.label}>CARD NUMBER</Text>
        <TextInput
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
          style={styles.input}
        />

        <View style={styles.row}>

          <View style={{ width: "48%" }}>
            <Text style={styles.label}>EXPIRE DATE</Text>
            <TextInput
              placeholder="MM/YY"
              value={expiry}
              onChangeText={setExpiry}
              style={styles.halfInput}
            />
          </View>

          <View style={{ width: "48%" }}>
            <Text style={styles.label}>CVC</Text>
            <TextInput
              placeholder="CVC"
              value={cvc}
              onChangeText={setCvc}
              keyboardType="numeric"
              style={styles.halfInput}
            />
          </View>

        </View>

      </View>

      <View style={{ marginTop: 330 }}>
        <TouchableOpacity style={styles.button} onPress={handleAddCard}>
          <Text style={styles.buttonText}>ADD & MAKE PAYMENT</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default AddCardScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: "row",
    marginTop: 40,
    height: 70
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 21,
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontFamily: "Sen-Regular",
    color: "#373434"
  },

  form: {
    paddingHorizontal: 20,
    marginTop: 20
  },

  label: {
    fontSize: 12,
    fontFamily: "Sen-Regular",
    color: "#A0A5BA",
    marginBottom: 6
  },

  input: {
    height: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    paddingHorizontal: 15,
    fontSize: 14,
    marginBottom: 15,
    backgroundColor: "#F0F5FA",
    fontFamily: "Sen-Regular"
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  halfInput: {
    height: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: "#F0F5FA"
  },

  button: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#FF7622",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Sen-Bold"
  }

})