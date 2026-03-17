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

      <Rectangle style={styles.rectangle} />

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
    justifyContent: "flex-end",
    alignItems: "center"
  },

  rectangle: {
    width:206,
    height:250,
    position: "absolute",
    top: 176,
    borderRadius:90
  },

  content: {
    alignItems: "center",
    marginBottom: 170
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF7622",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Sen-Bold",
    marginRight: 10
  },

  infoText: {
    marginTop: 20,
    fontSize: 13,
    fontFamily: "Sen-Regular",
    lineHeight: 24,
    textAlign: "center",
    color: "#6B7280"
  }

})