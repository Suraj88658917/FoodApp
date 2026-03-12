import {StyleSheet,Text,View,TextInput,TouchableOpacity,FlatList,Modal} from "react-native";
import React, { useState, useEffect } from "react";

import Search1 from "../../assets/image/Search.svg";
import Vector1 from "../../assets/image/Vector.svg";
import Squar from "../../assets/image/Squar.svg";
import Squarlarge from "../../assets/image/Squarlarge.svg";
import Rate from "../../assets/image/Rate.svg";
import Free from "../../assets/image/Free.svg";
import Min from "../../assets/image/Min.svg";

import LinearGradient from "react-native-linear-gradient";
import Elements from "../../assets/image/Elements.svg";
import Cut from "../../assets/image/Cut.svg";

const categories = [
  { id: "1", title: "Pizza" },
  { id: "2", title: "Burger" },
  { id: "3", title: "Sandwich" },
  { id: "4", title: "Coffee" },
  { id: "5", title: "Burger" },
  { id: "6", title: "Pizza" },
  { id: "7", title: "Sandwich" },
];

const restaurants = [
  {
    id: "1",
    title: "Rose Garden Restaurant",
    subtitle: "Burger - Chicken - Rice - Wings",
  },
  {
    id: "2",
    title: "Food Palace",
    subtitle: "Pizza - Pasta - Sandwich",
  },
   {
    id: "3",
    title: "Rose Garden Restaurant",
    subtitle: "Burger - Chicken - Rice - Wings",
  },
  {
    id: "4",
    title: "Food Palace",
    subtitle: "Pizza - Pasta - Sandwich",
  },
   {
    id: "5",
    title: "Rose Garden Restaurant",
    subtitle: "Burger - Chicken - Rice - Wings",
  },
  {
    id: "6",
    title: "Food Palace",
    subtitle: "Pizza - Pasta - Sandwich",
  },
];


 const renderCategory = ({ item }) => {
    return (
      <View style={{ height: 150, paddingHorizontal: 7 }}>
        <TouchableOpacity style={styles.card}>
          <Squar width={120} height={70} />
        </TouchableOpacity>

        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const renderRestaurant = ({ item }) => {
    return (
      <View style={styles.restaurantCard}>

       <TouchableOpacity>
         <Squarlarge width={350} height={170} />

        <View style={{ marginTop: 8 }}>
          <Text style={styles.resTitle}>{item.title}</Text>
          <Text style={styles.resSub}>{item.subtitle}</Text>

          <View style={styles.iconRow}>
            <Rate width={47} height={20} />
            <Free width={62} height={20} />
            <Min width={74} height={20} />
          </View>
        </View>
       </TouchableOpacity>

      </View>
    );
  };

const HomeScreen = ({navigation}) => {

  const [name, setName] = useState("");
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowOffer(true);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>

      <Modal transparent visible={showOffer} animationType="fade">
        <View style={styles.modalContainer}>

         <View>
           <LinearGradient
            colors={["#FFEB34", "#E76F00"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.popup}
          >

            <TouchableOpacity
              onPress={() => setShowOffer(false)}
              style={styles.cutBtn}
            >
              <Cut width={45} height={45} />
            </TouchableOpacity>

            <Text style={styles.title1}>Hurry Offers!</Text>

            <Elements width={250} height={170}  style={styles.Elements}/>

            <Text style={styles.message}>#1243CD2</Text>

            <Text style={styles.desc}>
              Use the coupon get 25% discount
            </Text>

            <TouchableOpacity
              style={styles.closeBtn}
            >
              <Text style={styles.btnText}>GOT IT</Text>
            </TouchableOpacity>

          </LinearGradient>
         </View>

        </View>
      </Modal>

       <View style={{ flexDirection: "row", marginTop: 17 }}>
              <Text style={styles.text}>Hey Halal, </Text>
              <Text style={styles.text1}>Good Afternoon!</Text>
            </View>

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderRestaurant}
        showsVerticalScrollIndicator={false}

        ListHeaderComponent={
          <>
            <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}
            >
              <View style={styles.searchContainer}>
              <TextInput
                placeholder="Search dishes, restaurants"
                placeholderTextColor="#6d6e70"
                value={name}
                onChangeText={setName}
                style={styles.input}
              />
                  <Search1 style={styles.Search1} />
            </View>
            </TouchableOpacity>


            <View style={styles.headerRow}>
              <Text style={styles.headerText}>All Categories</Text>

              <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginRight: 5 }}>See All</Text>
                <Vector1 width={6} height={10} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={categories}
              renderItem={renderCategory}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />

            <View style={styles.headerRow1}>
              <Text style={styles.headerText}>Open Restaurants</Text>

              <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginRight: 5 }}>See All</Text>
                <Vector1 width={6} height={10} />
              </TouchableOpacity>
            </View>

          </>
        }

      />

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15
  },

  text: {
    fontFamily: "Sen-Regular",
    fontSize: 14
  },

  text1: {
    fontFamily: "Sen-Bold",
    fontSize: 14
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 12,
    marginTop: 20,
    paddingHorizontal: 45,
    height: 55,
  },

  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: "Sen-Regular",
  },

  Search1: {
    position: "absolute",
    left: 20
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25
  },

  headerRow1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  headerText: {
    fontSize: 19,
    fontFamily: "Sen-Bold"
  },

  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 100,
    width: 120,
    elevation: 2,
    marginTop: 16
  },

  title: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: "Sen-Bold",
    textAlign: "center"
  },

  restaurantCard: {
    marginTop: 15
  },

  resTitle: {
    fontSize: 18,
    fontFamily: "Sen-Bold",
    color: "#000"
  },

  resSub: {
    fontSize: 14,
    color: "#8e8e8e"
  },

  iconRow: {
    flexDirection: "row",
    gap: 15,
    marginTop: 8
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },

  popup: {
    width: 327,
    height:395,
    padding: 20,
    borderRadius: 30,
    alignItems: "center"
  },

  cutBtn: {
    position: "absolute",
    top:-10,
    left:280
  },

  title1: {
    fontSize: 40,
    fontFamily: "Sen-Bold",
    color: "#fff",
    position:"absolute",
    top:75
    
  },

  message: {
    fontSize: 30,
    color: "#fff",
    fontFamily:"Sen-Bold",
    top:150
  },

  desc: {
    color: "#fff",
    textAlign: "center",
    fontFamily:"Sen-Bold",
    fontSize:16,
    lineHeight:60,
    position:"absolute",
    top:230
  },

  closeBtn: {
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 15,
    borderColor:"#fff",
    borderWidth:2,
    position:"absolute",
    top:290
  },

  btnText: {
    color: "#fff",
    fontFamily: "Sen-Bold",
  },
  Elements:{
    position:"absolute",
    top:40
  }

});