import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Rectangle from "../../assets/image/Rectangle2.svg"
import MapPin from "../../assets/image/Map.svg"

import { storage } from "../../storage/storage"

import { request, PERMISSIONS, RESULTS } from "react-native-permissions"

const LocationScreen = ({ navigation }) => {

  const handleLocationAccess = async () => {

    const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if (result === RESULTS.GRANTED) {

      // save permission in MMKV
      storage.set("locationAccess", true);

      console.log("Location Permission:", storage.getBoolean("locationAccess"));

      navigation.replace("MainApp");

    } else {

      alert("Location permission denied");

    }

  }

  return (
    <View style={styles.container}>

      <View style={{ justifyContent:"center" , alignItems:"center" , marginTop:130}}>
        <Rectangle width={206} height={250} />
      </View>

      <View style={styles.content}>

        <TouchableOpacity
          onPress={handleLocationAccess}
          style={styles.button}
        >
          <Text style={styles.buttonText}>ACCESS LOCATION</Text>

          <MapPin width={30} height={27} />
        </TouchableOpacity>

        <Text style={styles.infoText}>
          DFOOD WILL ACCESS YOUR LOCATION {"\n"}
          ONLY WHILE USING THE APP
        </Text>

      </View>

    </View>
  )
}

export default LocationScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fbfbfb",
  
  },

  content: {
    alignItems: "center",
    width:"100%",
    paddingHorizontal:30
    
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF7622",
    paddingVertical: 18,
    borderRadius: 12,
    marginTop:50,
    paddingHorizontal:80
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Sen-Bold",
    marginRight: 10
  },

  infoText: {
    marginTop: 30,
    fontSize: 15,
    fontFamily: "Sen-Regular",
    lineHeight: 24,
    textAlign: "center",
    color: "#999",
  }

})