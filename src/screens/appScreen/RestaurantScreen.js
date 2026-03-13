import React, { useState } from "react";
import { StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity } from "react-native";

import Back1 from "../../assets/image/back.svg";
import RFilter from "../../assets/image/RFilter.svg";

const { width } = Dimensions.get("window");

const data = [
  { id: "1", image: require("../../assets/image/image1.jpeg") },
  { id: "2", image: require("../../assets/image/image2.jpeg") },
  { id: "3", image: require("../../assets/image/image1.jpeg") },
  { id: "4", image: require("../../assets/image/image2.jpeg") },
];

const RestaurantScreen = ({ navigation }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (event) => {
    const slide = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setActiveIndex(slide);
  };

  const renderItem = ({ item }) => (
    <Image source={item.image} style={styles.image} />
  );

  return (
    <View style={styles.container}>


      {/* <View> */}
        <FlatList
        data={data}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {/* </View> */}


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


      <View style={styles.header}>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <Back1 width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <RFilter width={20} height={20} />
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#fff"
  },

  image:{
    width:width,
    height:300,
    resizeMode:"cover"
  },

  dotContainer:{
    position:"absolute",
    bottom:15,
    alignSelf:"center",
    flexDirection:"row"
  },

  dot:{
    width:8,
    height:8,
    borderRadius:4,
    backgroundColor:"#ccc",
    marginHorizontal:5
  },

  activeDot:{
    backgroundColor:"#fff",
    width:10,
    borderWidth:2,
    borderColor:"#b9afaf"
  },

  header:{
    position:"absolute",
    top:50,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:20
  },

  iconButton:{
    width:40,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    backgroundColor:"#fff"
  }

});