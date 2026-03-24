import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Back1 from "../../assets/image/back.svg";
import DBox from "../../assets/image/DBox.svg";
import Save from "../../assets/image/Save.svg";
import Foodlogo from "../../assets/image/foodlogo.svg";
import Rate from "../../assets/image/Rate.svg";
import Free from "../../assets/image/Free.svg";
import Min from "../../assets/image/Min.svg";
import Size10 from "../../assets/image/size10.svg";
import Size14 from "../../assets/image/size14.svg";
import Size16 from "../../assets/image/size16.svg";
import Dicon1 from "../../assets/image/Dicon1.svg";
import Dicon2 from "../../assets/image/Dicon2.svg";
import Dicon3 from "../../assets/image/Dicon3.svg";
import Dicon4 from "../../assets/image/Dicon4.svg";
import Dicon5 from "../../assets/image/Dicon5.svg";
import DBox1 from "../../assets/image/DBox1.svg";

const FoodDetailsScreen = ({ navigation }) => {

  const [selectedSize, setSelectedSize] = useState(null);

  console.log("FoodDetails Screen Loaded")

  const basePrice = 32;
  const [qty, setQty] = useState(1);

  const increase = () => {
    setQty(qty + 1);
  };

  const decrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const totalPrice = basePrice * qty;

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

        <View style={{ justifyContent: "center", alignItems: "center", width: 70  }}>
          <Text style={styles.title}>Details</Text>
        </View>

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20  , }}>
          <DBox width={357} height={200} />
        </View>

        <View style={styles.saveBtn}>
          <TouchableOpacity>
            <Save width={37} height={37} />
          </TouchableOpacity>
        </View>

        <View style={styles.restaurantBox}>
          <TouchableOpacity style={styles.restaurantTag}>
            <Foodlogo width={21} height={21} />
            <Text style={styles.restaurantText}>
              Uttara Coffe House
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.foodTitleBox}>
          <Text style={styles.foodTitle}>Burger Calzone European</Text>
        </View>

        <View style={styles.descBox}>
          <Text style={styles.description}>
            Prosciutto e funghi is a pizza variety that is{"\n"}
            topped with tomato sauce.
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <View style={styles.iconRow}>
            <Rate width={47} height={20} />
            <Free width={62} height={20} />
            <Min width={74} height={20} />
          </View>
        </View>

        <View style={{ marginTop: 20, flexDirection: "row", paddingHorizontal: 20 }}>

          <Text style={styles.title1}>SIZE:</Text>

          <View style={styles.row}>

            <TouchableOpacity
              style={[
                styles.sizeBox,
                selectedSize === 10 && styles.activeSize
              ]}
              onPress={() => setSelectedSize(10)}
            >
              <Size10 width={45} height={45} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.sizeBox,
                selectedSize === 14 && styles.activeSize
              ]}
              onPress={() => setSelectedSize(14)}
            >
              <Size14 width={45} height={45} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.sizeBox,
                selectedSize === 16 && styles.activeSize
              ]}
              onPress={() => setSelectedSize(16)}
            >
              <Size16 width={45} height={45} />
            </TouchableOpacity>

          </View>

        </View>

        <View style={{ height: 30, justifyContent: "flex-end", paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 13, fontFamily: "Sen-Regular" }}>
            INGRIDENTS
          </Text>
        </View>

        <View style={{ flexDirection: "row", padding: 10, gap: 20, }}>
          <TouchableOpacity><Dicon1 width={50} height={84} /></TouchableOpacity>
          <TouchableOpacity><Dicon2 width={50} height={84} /></TouchableOpacity>
          <TouchableOpacity><Dicon3 width={50} height={84} /></TouchableOpacity>
          <TouchableOpacity><Dicon4 width={50} height={84} /></TouchableOpacity>
          <TouchableOpacity><Dicon5 width={50} height={84} /></TouchableOpacity>
        </View>

        <View style={styles.priceRow}>

          <Text style={styles.price}>
            ${totalPrice}
          </Text>

          <View style={styles.counterContainer}>

           <View>
             <DBox1 width={375} height={184} />
           </View>

            <Text style={styles.price}>${totalPrice}</Text>

            <View style={styles.qtyContainer}>

              <TouchableOpacity onPress={decrease} style={styles.circleBtn}>
                <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.qty}>{qty}</Text>

              <TouchableOpacity onPress={increase} style={styles.circleBtn}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>

        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.cartText}>Add To Cart</Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  )
}

export default FoodDetailsScreen


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15
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

  saveBtn: {
    position: "absolute",
    top: 170,
    right: 28,
  },

  restaurantBox: {
    marginTop: 16,
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 10
  },

  restaurantTag: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#ffffff",
    alignSelf: "flex-start"
  },

  restaurantText: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    marginLeft: 8
  },

  foodTitleBox: {
    paddingHorizontal: 15,
    height: 30,
    justifyContent: "center",
  },

  foodTitle: {
    fontSize: 19,
    fontFamily: "Sen-Bold",
  },

  descBox: {
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 15,
  },

  description: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    color: "#8a8a8a",
    lineHeight:20
  },

  iconContainer: {
    marginTop: 5,
    paddingHorizontal: 20
  },

  iconRow: {
    flexDirection: "row",
    gap: 40,
    marginTop: 8
  },

  title1: {
    fontSize: 14,
    fontFamily: "Sen-Medium",
    marginTop: 20
  },

  row: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 10
  },

  sizeBox: {
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd"
  },

  activeSize: {
    backgroundColor: "#FF7622",
    borderColor: "#FF7622"
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },

 price:{
  position:"absolute",
  left:20,
  top:20,
  fontSize:26,
  fontFamily:"Sen-Regular",
  color:"#000000"
},

 qtyContainer:{
    position:"absolute",
    right:30,
    top:19,
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#000000",
    paddingHorizontal:20,
    paddingVertical:9,
    borderRadius:50
  },
  btn: {
    padding: 10
  },

  btnText: {
    fontSize: 20,
    fontFamily:"Sen-Regular",
    color:"#fff"
  },

  counterContainer:{
  justifyContent:"center",
  alignItems:"center",
 
},

  qty: {
    fontSize: 18,
    marginHorizontal: 10,
    color:"#fff"
  },

  cartBtn: {
    marginTop: 30,
    height: 55,
    backgroundColor: "#FF7622",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    position:"absolute",
    top:700,
    paddingHorizontal:110,
    left:20
  },

  cartText: {
    color: "#fff",
    fontSize: 17,
   fontFamily:"Sen-Bold"
  },
  circleBtn:{
    width:24,
    height:24,
    borderRadius:20,
    backgroundColor:"#433a35",
    justifyContent:"center",
    alignItems:"center"
  },

  

})