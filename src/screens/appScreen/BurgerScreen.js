import { StyleSheet, Text, View, TouchableOpacity, Modal  , FlatList} from 'react-native'
import React, { useState } from 'react'

import Back1 from "../../assets/image/back.svg";
import Filter from "../../assets/image/Filter.svg";
import Search1 from "../../assets/image/Search (1).svg";
import Polygon2 from "../../assets/image/Polygon1.svg";
import Box from "../../assets/image/Box.svg";
import WhiteBox from "../../assets/image/WhiteBox1.svg";
import Oadd from "../../assets/image/Oadd.svg";


const foodData = [
  { id: "1", title: "Burger Bistro", place: "Rose Garden", price: "$40" },
  { id: "2", title: "Smokin' Burger", place: "Cafenio Restourant", price: "$60" },
  { id: "3", title: "Buffalo Burger", place: "Kaji Firm Kitchen", price: "$75" },
  { id: "4", title: "Bullseye Burger", place: "Kabab Restourant", price: "$95" },
];

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.card1}>

        <Box width={122} height={84} style={styles.box} />

        <WhiteBox
          width={193}
          height={190}
          style={styles.whiteBox}
        />

        <View style={styles.textContainer}>
          <Text style={styles.foodTitle}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.place}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>

          <TouchableOpacity>
            <Oadd width={28} height={28} />
          </TouchableOpacity>
        </View>


      </View>
    </TouchableOpacity>
  );
};

const BurgerScreen = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={{ width: 78, justifyContent: "center", alignItems: "center", }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Back1 width={20} height={20} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => setModalVisible(true)}
        >

          <View style={{ justifyContent: "center", alignItems: "flex-end", width: 70 }}>
            <Text style={styles.title}>BURGER</Text>
          </View>

          <View style={{ justifyContent: "center" }}>
            <Polygon2 size={20} style={{ marginLeft: 7 }} />
          </View>

        </TouchableOpacity>

        <View style={{ width: 130, justifyContent: "center", alignItems: "flex-end" }}>
          <TouchableOpacity style={styles.filterBtn}>
            <Search1 width={45} height={49} />
          </TouchableOpacity>
        </View>

        <View style={{ width: 60, justifyContent: "center", alignItems: "flex-end" }}>
          <TouchableOpacity style={styles.filterBtn}>
            <Filter width={45} height={49} />
          </TouchableOpacity>
        </View>

      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
      >

        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >

          <View style={styles.modalBox}>

            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => {
                setModalVisible(false)
                navigation.navigate("BurgerScreen")
              }}
            >
              <Text style={styles.modalText}>Burger</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => {
                setModalVisible(false)
                navigation.navigate("SandwichScreen")
              }}
            >
              <Text style={styles.modalText}>Sandwich</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => {
                setModalVisible(false)
                navigation.navigate("PizzaScreen")
              }}
            >
              <Text style={styles.modalText}>Pizza</Text>
            </TouchableOpacity>

          </View>

        </TouchableOpacity>

      </Modal>

      <View style={{ paddingHorizontal: 20, height: 30, justifyContent: "flex-end" }}>
        <Text style={{ fontSize: 20, fontFamily: "Sen-Regular" }}>Popular Burgers</Text>
      </View>

      <View>
        <FlatList
          data={foodData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" , padding:10 }}
          showsVerticalScrollIndicator={false}
        />
      </View>



    </View>
  )
}

export default BurgerScreen


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: "row",
    marginTop: 40,
    height: 70,
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
    fontSize: 12,
    fontFamily: "Sen-Bold",
    color: "#000"
  },

  filterBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2
  },

  categoryBtn: {
    flexDirection: "row",
    borderWidth: 0.7,
    borderRadius: 33,
    width: 102,
    height: 45,
    alignItems: "center",
    marginTop: 13,
    borderColor: "#eae4e4",

  },

  modalOverlay: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
    paddingRight: 100
  },

  modalBox: {
    width: 130,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    borderColor: "#aaa5a5",
    borderWidth: 1

  },

  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },

  modalText: {
    fontSize: 16,
    fontFamily: "Sen-Medium"
  },
  card1: {
    width: 170,
    height: 150,
    alignItems: "center",
    marginBottom: 20,
  },

  box: {
    position: "absolute",
    top: 0,
    zIndex: 3
  },

  whiteBox: {
    position: "absolute",
    top: 20,
    zIndex: 1,
    left: 1,

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
  },
  priceContainer: {
    position: "absolute",
    bottom: -8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 120,
    zIndex:5
  },

  price: {
    fontSize: 16,
    fontFamily: "Sen-Bold",
    color: "#FF7622"
  }


})