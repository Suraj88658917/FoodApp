import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Back1 from "../../assets/image/back.svg";
import Cash from "../../assets/image/Cash.svg";
import Visa from "../../assets/image/Visa.svg";
import MasterCard from "../../assets/image/MasterCard.svg";
import PayPal from "../../assets/image/PayPal.svg";
import NoMasterCard from "../../assets/image/No mastercard.svg";

const data = [
  { id: "1", icon: Cash },
  { id: "2", icon: Visa },
  { id: "3", icon: MasterCard },
  { id: "4", icon: PayPal },
];

const PaymentScreen = ({ navigation }) => {

  const renderItem = ({ item }) => {
    const Icon = item.icon;

    return (
      <View style={styles.card}>
        <Icon width={85} height={93} />
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={{ width: 68, justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Back1 width={20} height={20} />
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center", width: 70 }}>
          <Text style={styles.title}>Payment</Text>
        </View>

      </View>

      <View>
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
      </View>

      <View style={{ justifyContent:"center" , alignItems:"center"  }}>
        <NoMasterCard  width={"100%"} height={357}/>
      </View>

    </View>
  )
}

export default PaymentScreen

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

  card: {
    width: 85,
    height: 93,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginTop:20
  }
});