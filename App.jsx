import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from "./src/assets/logo/Logo.svg"

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20 , fontFamily:"Sen-Bold"}}>
        this is App
      </Text>

      <Text style={{fontSize:20}}>
        Bold Text
      </Text>

       <Logo width={200} height={100} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"pink"
  },
 
})