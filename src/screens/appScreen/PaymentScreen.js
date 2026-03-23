import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Back1 from "../../assets/image/back.svg";
import Cash from "../../assets/image/Cash.svg";
import Visa from "../../assets/image/Visa.svg";
import MasterCard from "../../assets/image/MasterCard.svg";
import PayPal from "../../assets/image/PayPal.svg";
import NoMasterCard from "../../assets/image/No mastercard.svg";
import Oplus from '../../assets/image/oplus.svg';

const data = [
  { id: "1", icon: Cash },
  { id: "2", icon: Visa },
  { id: "3", icon: MasterCard },
  { id: "4", icon: PayPal },
];

const PaymentScreen = ({ navigation, route }) => {

  const newCard = route?.params?.newCard;

   console.log("Received Card Data:", newCard); 

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

      {newCard && (
        <View style={{
          marginTop: 20,
          marginHorizontal: 20,
          backgroundColor: "#F0F5FA",
          padding: 15,
          borderRadius: 12
        }}>
          <Text style={{ fontSize: 14, fontFamily: "Sen-Bold" }}>{newCard.name}</Text>

          <Text style={{ marginTop: 5 }}>
            **** **** **** {newCard.cardNumber.slice(-4)}
          </Text>

          <Text style={{ marginTop: 5 }}>
            Expiry: {newCard.expiry}
          </Text>
        </View>
      )}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <NoMasterCard width={"100%"} height={257} />
      </View>

      <View style={{ width: 390, paddingHorizontal: 20 }}>
        <TouchableOpacity

          onPress={() => navigation.navigate("AddCardScreen")}

          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#edeae8",
            paddingVertical: 15,
            justifyContent: "center"
          }}
        >
         <View>
           <Oplus width={14} height={14} />
         </View>

          <Text
            style={{
              fontSize: 13,
              fontFamily: "Sen-Bold",
              color: "#FF7622",
              marginLeft: 8,
            }}
          >
            ADD NEW
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.totalContainer}>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>TOTAL:</Text>
          <Text style={styles.totalPrice}>$96</Text>
        </View>

        <View style={{marginTop:10}}>
          <TouchableOpacity onPress={() => navigation.navigate("PaymentSuccessfully")}
         style={styles.payBtn}>
          <Text style={styles.payText}>PAY & CONFIRM</Text>
        </TouchableOpacity>
        </View>

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
    marginTop: 20
  },

  totalContainer: {
    paddingHorizontal: 20,
    marginTop: 70,
  },

  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20
  },

  totalLabel: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    color: "#c4bbbb",
  },

  totalPrice: {
    fontSize: 25,
    fontFamily: "Sen-Regular",
    color: "#000",
  },

  payBtn: {
    marginTop: 20,
    backgroundColor: "#FF7622",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  payText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Sen-Bold",
  },
});