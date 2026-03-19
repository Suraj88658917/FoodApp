import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Success from "../../assets/image/Success.svg";

const WithdrawScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Success}>
        <Success width={220.28} height={181}/>
       <View>
         <Text style={{fontSize:18 , fontFamily:"Sen-Regular" , marginTop:80}}>Withdraw Successful</Text>
      </View>
     <TouchableOpacity>
       <View style={{
        backgroundColor:"#FF7622",
        paddingHorizontal:140,
        paddingVertical:15,
        marginTop:20,
        borderRadius:10
      }}>
          <Text style={{fontSize:15 , fontFamily:"Sen-Regular" , color:"#fff"}}>Ok</Text>
      </View>
     </TouchableOpacity>

       </View>
    </View>
  )
}

export default WithdrawScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  Success:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:260
  }
})