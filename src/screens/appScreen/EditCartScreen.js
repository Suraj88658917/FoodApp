import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import Warrow from "../../assets/image/Warrow.svg";
import Card from "../../assets/image/WhiteBG.svg";
import Arrow from "../../assets/image/arrow.svg";
import BlackBox from "../../assets/image/BlackBox.svg";

const EditCartScreen = ({ navigation }) => {

  const [address, setAddress] = useState("");

  const [cartData, setCartData] = useState([
    {
      id: "1",
      title: "Pizza Calzone European",
      price: 64,
      size: "14''",
      qty: 1,
    },
    {
      id: "2",
      title: "Pizza Calzone European",
      price: 32,
      size: "14''",
      qty: 1,
    },
  ]);

  const increaseQty = (id) => {
    const updated = cartData.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCartData(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartData.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    setCartData(updated);
  };

  const removeItem = (id) => {
    const updatedCart = cartData.filter(item => item.id !== id);
    setCartData(updatedCart);
  };

  const totalPrice = cartData.reduce((sum, item) => sum + item.price * item.qty, 0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>

        <View style={styles.imageBox}>
          <BlackBox width={136} height={137} />
        </View>

        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text style={styles.foodTitle}>{item.title}</Text>

          <Text style={styles.foodPrice}>${item.price}</Text>
          <Text style={styles.foodSize}>{item.size}</Text>

          <View style={styles.qtyContainer}>
            <TouchableOpacity onPress={() => decreaseQty(item.id)} style={styles.qtyBtn}>
              <Text style={styles.qtyText}>−</Text>
            </TouchableOpacity>

            <Text style={styles.qtyNumber}>{item.qty}</Text>

            <TouchableOpacity onPress={() => increaseQty(item.id)} style={styles.qtyBtn}>
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.cutBtn}>
            <Text style={styles.cutText}>x</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Warrow width={6} height={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Cart</Text>

        <TouchableOpacity onPress={() => navigation.navigate("MyCartScreen")}
          style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={styles.editText}>DONE</Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
        data={cartData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 20, marginTop: 20, paddingBottom: 250 }}
      />
      </View>

      <View style={styles.cardContainer}>
        <Card width={"100%"} height={680} />

        <View style={styles.form}>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>DELIVERY ADDRESS</Text>

            <TouchableOpacity>
              <Text style={styles.editAddress}>EDIT</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Enter Your Address"
            placeholderTextColor="#7E8A97"
            value={address}
            onChangeText={setAddress}
            style={styles.input}
          />

          <View style={styles.totalRow}>
            <View style={styles.totalLeft}>
              <Text style={styles.sectionTitle}>TOTAL:</Text>
              <Text style={styles.totalPrice}>${totalPrice}</Text>
            </View>

            <TouchableOpacity style={styles.breakdown}>
              <Text style={styles.breakdownText}>Breakdown</Text>
              <Arrow width={20} height={20} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>PLACE ORDER</Text>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  );
};

export default EditCartScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#121223"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 20
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 21,
    backgroundColor: "#585867",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },

  title: {
    fontSize: 18,
    fontFamily: "Sen-Regular",
    color: "#fff",
    flex: 1
  },

  editText: {
    fontSize: 15,
    fontFamily: "Sen-Regular",
    color: "#059C6A"
  },

  cartItem: {
    flexDirection: "row",
    marginBottom: 20,
    width: 327,
    height: 117,
  },

  imageBox: {
    backgroundColor: "#12122b",
    borderWidth: 1,
    borderColor: "#0c0303",
    borderRadius: 20
  },

  foodTitle: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "Sen-Regular",
  },

  foodPrice: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
    fontFamily: "Sen-Bold"
  },

  foodSize: {
    fontSize: 13,
    color: "#aaa",
    marginTop: 5,
    fontFamily: "Sen-Bold"
  },

  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "flex-end"
  },

  qtyBtn: {
    width: 30,
    height: 30,
    backgroundColor: "#2c2c44",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },

  qtyText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Sen-Bold"
  },

  qtyNumber: {
    color: "#fff",
    marginHorizontal: 12,
    fontSize: 16
  },

  cutText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Sen-Bold",
    position:"absolute",
    left:180,
    bottom:80,
     backgroundColor: "#ff3b30",
      paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  
  },

  cardContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    marginTop:490
  },

  form: {
    position: "absolute",
    top: 70,
    width: "85%"
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  sectionTitle: {
    fontSize: 14,
    color: "#999",
    fontFamily: "Sen-Regular"
  },

  editAddress: {
    color: "#FF7622",
    fontSize: 14,
    fontFamily: "Sen-Regular"
  },

  input: {
    height: 60,
    backgroundColor: "#F0F5FA",
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 14
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },

  totalLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },

  totalPrice: {
    fontSize: 22,
    fontFamily: "Sen-Bold",
    color: "#000"
  },

  breakdown: {
    flexDirection: "row",
    alignItems: "center"
  },

  breakdownText: {
    marginRight: 5,
    color: "#FF7622",
    fontSize: 14
  },

  button: {
    height: 55,
    backgroundColor: "#FF7622",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Sen-Bold",
    letterSpacing: 1
  }

});