import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Back1 from "../../assets/image/back.svg";
import PriceIcon from "../../assets/image/$60.svg";
import Location from "../../assets/image/Location.svg";
import OStar from "../../assets/image/OStar.svg";
import ORate from "../../assets/image/ORate.svg";

import Dicon1 from "../../assets/image/Dicon1.svg";
import Dicon2 from "../../assets/image/Dicon2.svg";
import Dicon3 from "../../assets/image/Dicon3.svg";
import Dicon4 from "../../assets/image/Dicon4.svg";
import Dicon5 from "../../assets/image/Dicon5.svg";
import Dicon6 from "../../assets/image/Dicon6.svg";
import Dicon7 from "../../assets/image/Dicon7.svg";
import Dicon8 from "../../assets/image/Dicon8.svg";
import Dicon9 from "../../assets/image/Dicon9.svg";

const { width } = Dimensions.get("window");

const data = [
  { id: "1", image: require("../../assets/image/image1.jpeg") },
  { id: "2", image: require("../../assets/image/image2.jpeg") },
  { id: "3", image: require("../../assets/image/image1.jpeg") },
  { id: "4", image: require("../../assets/image/image2.jpeg") },
  { id: "5", image: require("../../assets/image/image1.jpeg") },

];

const renderSlider = ({ item }) => (
  <View style={styles.imageWrapper}>
    <Image source={item.image} style={styles.image} />
  </View>
);

const ChefFoodDetailsScreen = ({ navigation }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  console.log(" ChefFoodDetailsScreen Loaded")

  const onScroll = (event) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Back1 width={20} height={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Food Details</Text>

        <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={{ fontSize: 13, fontFamily: "Sen-Regular", color: "#ffa200" }}>
            EDIT
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={data}
          horizontal
          pagingEnabled
          onScroll={onScroll}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderSlider}
        />
      </View>

      <View style={styles.dotContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot
            ]}
          />
        ))}
      </View>

      <View style={{
        marginTop: 30,
        backgroundColor: "#FFFFFFCC",
        borderRadius: 61,
        position: "absolute",
        top: 300,
        left: 30,
        paddingHorizontal: 15,
        paddingVertical: 6
      }}>
        <Text style={{ fontSize: 14, fontFamily: "Sen-Regular" }}>Breakfast</Text>
      </View>

      <View style={{
        marginTop: 30,
        backgroundColor: "#FFFFFFCC",
        borderRadius: 61,
        position: "absolute",
        top: 300,
        left: 300,
        paddingHorizontal: 15,
        paddingVertical: 6
      }}>
        <Text style={{ fontSize: 14, fontFamily: "Sen-Regular" }}>Delivery</Text>
      </View>

      <View style={{ marginTop: 30, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 16, fontFamily: "Sen-Bold" }}>Chicken Thai Biriyani</Text>
        <PriceIcon width={30} height={22} />
      </View>

      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5
      }}>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 25,
          height: 30,
          borderRadius: 15
        }}>
          <Location width={12} height={12} />

          <Text style={{
            fontSize: 13,
            fontFamily: "Sen-Regular",
            color: "#AFAFAF",
            marginLeft: 6
          }}>
            Kentucky 39495
          </Text>
        </View>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          height: 30,
          borderRadius: 15
        }}>
          <OStar width={16} height={16} />
          <ORate width={19} height={19} />

          <Text style={{
            marginLeft: 6,
            color: "#888"
          }}>
            (10 Review)
          </Text>
        </View>

      </View>

      <View style={{ width: 420, alignItems: "center", paddingHorizontal: 20 }}>
        <View style={styles.underline} />
      </View>

      <View style={{ height: 40, justifyContent: "flex-end", paddingHorizontal: 20  }}>
        <Text style={{ fontSize: 14, fontFamily: "Sen-Regular" }}>INGRIDENTS</Text>
      </View>

      <View style={{ flexDirection: "row", padding: 10, gap: 30, paddingHorizontal: 20,  }}>
        <TouchableOpacity><Dicon1 width={50} height={84} /></TouchableOpacity>
        <TouchableOpacity><Dicon2 width={50} height={84} /></TouchableOpacity>
        <TouchableOpacity><Dicon3 width={50} height={84} /></TouchableOpacity>
        <TouchableOpacity><Dicon4 width={50} height={84} /></TouchableOpacity>
        <TouchableOpacity><Dicon5 width={50} height={84} /></TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", padding: 10, gap: 20, paddingHorizontal: 20 }}>
        <TouchableOpacity><Dicon6 width={50} height={84} /></TouchableOpacity>
        <TouchableOpacity><Dicon7 width={50} height={84} /></TouchableOpacity>
        <TouchableOpacity><Dicon8 width={50} height={84} /></TouchableOpacity>
        <TouchableOpacity><Dicon9 width={50} height={84} /></TouchableOpacity>
      </View>

        <View style={{ width: 420, alignItems: "center", paddingHorizontal: 20 }}>
        <View style={styles.underline} />
      </View>

      <View style={{paddingHorizontal:20 , height:40 , justifyContent:"center"}}>
        <Text style={{fontSize:14 , fontFamily:"Sen-Regular"}}>Description</Text>
      </View>

      <View style={{paddingHorizontal:20 , height:70 , justifyContent:"center" }}>
        <Text style={{fontSize:13 , fontFamily:"Sen-Regular" , lineHeight:17 , color:"#747783"}}>Lorem ipsum dolor sit amet, consetdur Maton {"\n"}
          adipiscing elit. Bibendum in vel, mattis et amet dui {"\n"} 
           mauris turpis.</Text>
      </View>

    </View>
  )
}

export default ChefFoodDetailsScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  imageWrapper: {
    width: width,
    alignItems: "center",
  },

  image: {
    width: width - 40,
    height: 250,
    borderRadius: 20,
    marginTop: 30
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 21,
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },

  title: {
    fontSize: 18,
    fontFamily: "Sen-Regular",
    color: "#000"
  },

  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -30
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 2,
  },

  activeDot: {
    backgroundColor: "#ffffff",
    width: 15,
    height: 10,

  },
  underline: {
    height: 2,
    width: "100%",
    backgroundColor: "#f2efee",
    marginTop: 15,
    paddingHorizontal: 20
  },

});