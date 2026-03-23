import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CardClose from "../../assets/image/CardClose.svg";

const MessageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View>
          <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <CardClose width={45} height={45} />
        </TouchableOpacity>
        </View>

       <View style={{width:290}}>
         <Text style={styles.title}>Robert Fox</Text>
       </View>

      </View>

      

    </View>
  )
}

export default MessageScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    paddingHorizontal: 20,
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
  }

});