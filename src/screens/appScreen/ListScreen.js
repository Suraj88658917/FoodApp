import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import Back1 from "../../assets/image/back.svg";

const ListScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={{ width: 80, justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Back1 width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", width: 200  }}>
          <Text style={styles.title}>My Food List</Text>
        </View>
      </View>

    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
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
    fontSize: 18,
    fontFamily: "Sen-Regular",
    color: "#373434"
  },

})