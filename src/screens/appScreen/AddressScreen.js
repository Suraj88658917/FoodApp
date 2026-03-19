import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Back1 from "../../assets/image/back.svg";
import Home1 from "../../assets/image/Home1.svg";
import Work from "../../assets/image/Work.svg";
import Editicon from "../../assets/image/editicon.svg";
import Deleteicon from "../../assets/image/Deleteicon.svg";

const AddressScreen = ({ navigation, route }) => {
  const [addresses, setAddresses] = useState([]);


useEffect(() => {

  if (!route?.params) return;

  const newAddress = route.params;

  if (newAddress.editIndex !== null && newAddress.editIndex !== undefined) {

    const updated = [...addresses];
    updated[newAddress.editIndex] = newAddress;
    setAddresses(updated);

  } else {
    setAddresses(prev => [...prev, newAddress]);
  }

}, [route?.params]);

  const handleDelete = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
  };

  const handleEdit = (item, index) => {
    navigation.navigate("ADDaddress", { ...item, editIndex: index });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      {item.label === "Home" ? (
        <Home1 width={50} height={50} />
      ) : (
        <Work width={50} height={50} />
      )}

      <View style={{ flex: 1, marginLeft: 15 ,  }}>
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.address}>{item.address}</Text>
       <View style={{flexDirection:"row"}}>
         <Text style={styles.small}>Street: {item.street}</Text>
        <Text style={styles.small}> Post Code: {item.postCode}</Text>
       </View>
       <Text style={styles.small}>Apartment: {item.apartment}</Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity onPress={() => handleEdit(item, index)}>
          <Editicon width={18} height={18} />
        </TouchableOpacity>

        <View style={{ height: 18 }} />

        <TouchableOpacity onPress={() => handleDelete(index)}>
          <Deleteicon width={18} height={18} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <Back1 width={20} height={20} />
        </TouchableOpacity>

        <Text style={styles.title}>My Addresses</Text>

        <View style={{ width: 45 }} />
      </View>

      <FlatList
        data={addresses}
        keyExtractor={( _ , index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 140 }}
      
      />

      <View style={styles.bottomBtn}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate("ADDaddress")}
        >
          <Text style={styles.addText}>ADD NEW ADDRESS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 55,
    paddingHorizontal: 20,
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    flex: 1,
    fontSize: 17,
    fontFamily: "Sen-Bold",
    textAlign: "center",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F7FB",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },

  label: {
    fontSize: 13,
    color: "#FF7622",
    fontFamily: "Sen-Bold",
    marginBottom: 2,
  },

  address: {
    fontSize: 15,
    fontFamily: "Sen-Bold",
    marginBottom: 2,
  },

  small: {
    fontSize: 12,
    color: "#777",
    fontFamily: "Sen-Regular",
  },

  bottomBtn: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
  },

  addBtn: {
    backgroundColor: "#FF7622",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
  },

  addText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Sen-Bold",
    letterSpacing: 0.5,
  },
});