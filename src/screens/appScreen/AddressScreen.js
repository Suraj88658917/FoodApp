import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React  , {useState} from 'react'

import Back1 from "../../assets/image/back.svg";

const AddressScreen = ({ navigation }) => {
  const[address , setAddress] = useState("");
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Back1 width={20} height={20} />
        </TouchableOpacity>

        <Text style={styles.title}>My Addresses</Text>

        <View style={{ width: 45 }} />
      </View>

      <View>
       <TouchableOpacity onPress={() => navigation.navigate("ADDaddress")}
        style={{
        backgroundColor:"#FF7622",
        width:327,
        height:50,
        borderRadius:12,
        // alignItems:"center",
        // justifyContent:"center",
        paddingHorizontal:20,
         flexDirection: "row",
    alignItems: "center",
    marginTop: 55,
    paddingHorizontal: 20
      
      }}>
         <Text>ADD NEW ADDRESS</Text>
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddressScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 55,
    paddingHorizontal: 20
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    flex: 1,
    fontSize: 17,
    fontFamily: "Sen-Regular",
    marginRight: 45,
    paddingHorizontal:20

  },

  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  emptyText: {
    fontSize: 15,
    color: "#999",
    fontFamily: "Sen-Regular"
  }

})