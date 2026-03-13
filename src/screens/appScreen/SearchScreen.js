import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Back1 from "../../assets/image/back.svg";
import Cart1 from "../../assets/image/Cart.svg";
import Search2 from "../../assets/image/Search.svg"
import Cut from "../../assets/image/Cut1.svg"
import Squar from "../../assets/image/Squar1.svg";
import Rate1 from "../../assets/image/Rate.svg";
import Box from "../../assets/image/Box.svg";
import WhiteBox from "../../assets/image/WhiteBox.svg";


const data = [
  {
    id: "1",
    title: "Burger",
     screen: "BurgerScreen"
  },
  {
    id: "2",
    title: "Sandwich",
    screen: "SandwichScreen"
  },
  {
    id: "3",
    title: "Pizza",
    screen: "PizzaScreen"
  },
  {
    id: "4",
    title: "Burger",
     screen: "BurgerScreen"
  },
  {
    id: "5",
    title: "Sandwich",
    screen: "SandwichScreen"
  },
  {
    id: "6",
    title: "Burger",
     screen: "BurgerScreen"
  },
  {
    id: "7",
    title: "Pizza",
    screen: "PizzaScreen"
  },
  {
    id: "8",
    title: "Sandwich",
    screen: "SandwichScreen"
  },
]


const SearchScreen = ({ navigation }) => {

  const [name, setName] = useState("");

  const renderItem = ({ item }) => {
  return (
    <View style={{ height: 70, justifyContent: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
        <View
          style={{
            fontSize: 18,
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 33,
            borderColor: "#d5cece",
            borderWidth: 1,
            justifyContent: "center",
            height: 46,
            width: 94,
            alignItems: "center",
            marginLeft: 10,
          }}>
          <Text style={{ fontFamily: "Sen-Medium", fontSize: 16 }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

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

        <View style={{ justifyContent: "center", alignItems: "center", width: 70 }}>
          <Text style={styles.title}>Search</Text>
        </View>

        <View style={{ width: 220, justifyContent: "center", alignItems: "flex-end" }}>
          <TouchableOpacity style={styles.filterBtn}>
            <Cart1 width={45} height={49} />
          </TouchableOpacity>
        </View>

      </View>



      <View style={styles.searchContainer}>

        <Search2 style={styles.SearchIcon} />

        <TextInput
          placeholder=""
          placeholderTextColor="#6d6e70"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        {name.length > 0 && (
          <TouchableOpacity onPress={() => setName("")}>
            <Cut width={20} height={20} />
          </TouchableOpacity>
        )}

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}

      >
        <View style={{ height: 50, justifyContent: "flex-end", paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 22, fontFamily: "Sen-Regular" }}>Recent Keywords</Text>
        </View>

        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ height: 60, justifyContent: "flex-end", paddingHorizontal: 10, justifyContent: "center" }}>
          <Text style={{ fontSize: 20, fontFamily: "Sen-Regular" }}>Suggested Restaurants</Text>
        </View>

        <View style={{ paddingHorizontal: 10 }}>

          <TouchableOpacity>
            <View style={styles.card}>
              <Squar width={60} height={50} />

              <View style={styles.info}>
                <Text style={{ fontSize: 16, fontFamily: "Sen-Regular" }}>Pansi Restaurant</Text>
                <Rate1 width={47} height={20} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity>
            <View style={styles.card}>
              <Squar width={60} height={50} />

              <View style={styles.info}>
                <Text style={{ fontSize: 16, fontFamily: "Sen-Regular" }}>American Spicy Burger</Text>
                <Rate1 width={47} height={20} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity>
            <View style={styles.card}>
              <Squar width={60} height={50} />

              <View style={styles.info}>
                <Text style={{ fontSize: 16, fontFamily: "Sen-Regular" }}>Cafenio Coffiee Club</Text>
                <Rate1 width={47} height={20} />
              </View>
            </View>
          </TouchableOpacity>

        </View>

        <View style={{ height: 40, justifyContent: "center", paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 20, fontFamily: "Sen-Regular" }}>Popular Fast Food</Text>
        </View>

        <View style={{ flexDirection: "row", }}>
        <TouchableOpacity>
            <View style={styles.card1}>

            <Box width={122} height={84} style={styles.box} />

            <WhiteBox
              width={193}
              height={102}
              style={styles.whiteBox}
            />

            <View style={styles.textContainer}>
              <Text style={styles.foodTitle}>European Pizza</Text>
              <Text style={styles.subtitle}>Uttora Coffee House</Text>
            </View>

          </View>
        </TouchableOpacity>

         <TouchableOpacity>
           <View style={styles.card1}>

            <Box width={122} height={84} style={styles.box} />

            <WhiteBox
              width={193}
              height={102}
              style={styles.whiteBox}
            />

            <View style={styles.textContainer}>
              <Text style={styles.foodTitle}>European Pizza</Text>
              <Text style={styles.subtitle}>Uttora Coffee House</Text>
            </View>

          </View>
         </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", }}>
         <TouchableOpacity>
           <View style={styles.card1}>

            <Box width={122} height={84} style={styles.box} />

            <WhiteBox
              width={193}
              height={102}
              style={styles.whiteBox}
            />

            <View style={styles.textContainer}>
              <Text style={styles.foodTitle}>European Pizza</Text>
              <Text style={styles.subtitle}>Uttora Coffee House</Text>
            </View>

          </View>
         </TouchableOpacity>

         <TouchableOpacity>
           <View style={styles.card1}>

            <Box width={122} height={84} style={styles.box} />

            <WhiteBox
              width={193}
              height={102}
              style={styles.whiteBox}
            />

            <View style={styles.textContainer}>
              <Text style={styles.foodTitle}>European Pizza</Text>
              <Text style={styles.subtitle}>Uttora Coffee House</Text>
            </View>

          </View>
         </TouchableOpacity>
        </View>




      </ScrollView>

    </View>
  )
}

export default SearchScreen

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
    elevation: 2
  },

  title: {
    fontSize: 18,
    fontFamily: "Sen-Regular",
    color: "#000"
  },

  filterBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 12,
    marginTop: 10,
    paddingHorizontal: 15,
    height: 62,
  },

  input: {
    flex: 1,
    fontSize: 14,
    marginLeft: 10,
    fontFamily: "Sen-Regular"
  },
  SearchIcon: {
    marginRight: 5,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    borderRadius: 12,
    marginBottom: 12,
  },
  info: {
    marginLeft: 10,
    justifyContent: "center"
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
  },
  card1: {
    width: 170,
    height: 150,
    alignItems: "center",
  },

  box: {
    position: "absolute",
    top: 0,
    zIndex: 3
  },

  whiteBox: {
    position: "absolute",
    top: 30,
    zIndex: 1,
    left: -1

  },

  textContainer: {
    position: "absolute",
    top: 90,
    alignItems: "center",
    zIndex: 2
  },

  foodTitle: {
    fontSize: 15,
    fontFamily: "Sen-Bold",
    lineHeight: 22
  },

  subtitle: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    color: "#5e5555"
  }

})