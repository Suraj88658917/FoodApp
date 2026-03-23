import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PaymentSuccessBox from "../../assets/image/PaymentSuccessBox.svg";

const PaymentSuccessfully = ({navigation}) => {

  console.log(" PaymentSuccessfully loaded")
  return (
    <View style={styles.container}>
      <View style={styles.PaymentSuccessBox}>
        <PaymentSuccessBox width={228} height={207} />
      </View>
      <View style={{ paddingHorizontal: 20, justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontFamily: "Sen-Bold" }}>Congratulations!</Text>
      </View>
      <View style={{ justifyContent:"center" , alignItems:"center" ,height:80 }}>
        <Text style={{fontSize:14 , fontFamily:"Sen-Regular" , textAlign:"center" , lineHeight:20}}>You successfully maked a payment,{"\n"}
          enjoy our service!</Text>
      </View>
       <View style={{marginTop:120}}>
              <TouchableOpacity onPress={() => navigation.navigate("TrackingOrder")}
               style={styles.button} >
                <Text style={styles.buttonText}>ADD & MAKE PAYMENT</Text>
              </TouchableOpacity>
            </View>
    </View>
  )
}

export default PaymentSuccessfully

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  PaymentSuccessBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 270
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