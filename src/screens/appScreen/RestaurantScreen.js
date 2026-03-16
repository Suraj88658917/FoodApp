import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  Modal
} from "react-native";

import Back1 from "../../assets/image/back.svg";
import RFilter from "../../assets/image/RFilter.svg";
import Rate from "../../assets/image/Rate.svg";
import Free from "../../assets/image/Free.svg";
import Min from "../../assets/image/Min.svg";
import Oadd from "../../assets/image/Oadd.svg";
import Cut from "../../assets/image/Cut2.svg";
import OStar from "../../assets/image/OStar.svg";

const { width } = Dimensions.get("window");

const data = [
  { id: "1", image: require("../../assets/image/image1.jpeg") },
  { id: "2", image: require("../../assets/image/image2.jpeg") },
  { id: "3", image: require("../../assets/image/image1.jpeg") },
  { id: "4", image: require("../../assets/image/image2.jpeg") },
];

const categories = [
  { id: "1", title: "Burger", screen: "BurgerScreen" },
  { id: "2", title: "Sandwich", screen: "SandwichScreen" },
  { id: "3", title: "Pizza", screen: "PizzaScreen" },
  { id: "4", title: "Burger", screen: "BurgerScreen" },
  { id: "5", title: "Sandwich", screen: "SandwichScreen" },
];

const restaurantData = [
  { id: "1", title: "Burger Bistro", place: "Rose Garden", price: "$40" },
  { id: "2", title: "Smokin' Burger", place: "Cafenio Restaurant", price: "$60" },
  { id: "3", title: "Buffalo Burger", place: "Kaji Firm Kitchen", price: "$75" },
  { id: "4", title: "Bullseye Burger", place: "Kabab Restaurant", price: "$95" },
];

const RestaurantScreen = ({ navigation }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  console.log("RestaurantScreen Loaded")

  const onScroll = (event) => {
    const slide = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setActiveIndex(slide);
  };

  const renderSlider = ({ item }) => (
    <View style={styles.imageWrapper}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  const renderCategory = ({ item }) => {

    const isSelected = selectedCategory === item.id;

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedCategory(item.id);
          navigation.navigate(item.screen);
        }}
      >
        <View
          style={[
            styles.categoryButton,
            { backgroundColor: isSelected ? "#FF7622" : "#fff" }
          ]}
        >
          <Text
            style={{
              color: isSelected ? "#fff" : "#000",
              fontSize: 16,
              fontFamily: "Sen-Regular"
            }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFood = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("FoodDetailsScreen")}
    >
      <View style={styles.foodCard}>

        <Image
          source={require("../../assets/image/image1.jpeg")}
          style={styles.foodImage}
        />

        <Text style={styles.foodTitle}>{item.title}</Text>
        <Text style={styles.foodPlace}>{item.place}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>

          <TouchableOpacity onPress={() => setFilterVisible(true)}>
            <Oadd width={28} height={28} />
          </TouchableOpacity>
        </View>

      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

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

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <Back1 width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setFilterVisible(true)}
        >
          <RFilter width={20} height={20} />
        </TouchableOpacity>

      </View>

      <View style={styles.iconContainer}>
        <View style={styles.iconRow}>
          <Rate width={47} height={20} />
          <Free width={62} height={20} />
          <Min width={74} height={20} />
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, height: 40, justifyContent: "center" }}>
        <Text style={styles.restaurantTitle}>Spicy restaurant</Text>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.description}>
          Maecenas sed diam eget risus varius blandit sit {"\n"}
          amet non magna. Integer posuere erat a ante {"\n"}
          venenatis dapibus posuere velit aliquet.
        </Text>
      </View>

      <View>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategory}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
        />
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontFamily: "Sen-Regular" }}>Burger (10)</Text>
      </View>

      <View>
        <FlatList
          data={restaurantData}
          keyExtractor={(item) => item.id}
          renderItem={renderFood}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>


      <Modal visible={filterVisible} animationType="slide" transparent>

        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>

            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter your search</Text>
              <TouchableOpacity onPress={() => setFilterVisible(false)}>
                <Cut width={45} height={45} />
              </TouchableOpacity>
            </View>


            <Text style={styles.sectionTitle}>OFFERS</Text>

            <View style={styles.optionRow}>

              <TouchableOpacity style={styles.option}>
                <Text style={{ fontFamily: "Sen-Regular" }}>Delivery</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option}>
                <Text style={{ fontFamily: "Sen-Regular" }}>Pick Up</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option}>
                <Text style={{ fontFamily: "Sen-Regular" }}>Offers</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option}>
                <Text style={{ fontFamily: "Sen-Regular" }}>Online Payment available</Text>
              </TouchableOpacity>

            </View>

            <Text style={styles.sectionTitle}>DELIVERY TIME</Text>

            <View style={styles.optionRow}>
              {["10-15 min", "20 min", "30 min"].map((item) => {

                const selected = selectedDelivery === item;

                return (
                  <TouchableOpacity
                    key={item}
                    onPress={() => setSelectedDelivery(item)}
                    style={[
                      styles.option,
                      { backgroundColor: selected ? "#FF7622" : "#fff" }
                    ]}
                  >
                    <Text style={{ color: selected ? "#fff" : "#000" }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )

              })}
            </View>

            <Text style={styles.sectionTitle}>PRICE</Text>

            <View style={styles.optionRow}>
              {["$", "$$", "$$$"].map((item) => {

                const selected = selectedPrice === item;

                return (
                  <TouchableOpacity
                    key={item}
                    onPress={() => setSelectedPrice(item)}
                    style={[
                      styles.option,
                      { backgroundColor: selected ? "#FF7622" : "#fff" }
                    ]}
                  >
                    <Text style={{ color: selected ? "#fff" : "#000" }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )

              })}
            </View>

            <Text style={styles.sectionTitle}>RATING</Text>


            <View style={styles.optionRow}>
              {[1, 2, 3, 4, 5].map((item) => {

                const selected = selectedRating === item;

                return (
                  <TouchableOpacity
                    key={item}
                    onPress={() => setSelectedRating(item)}
                    style={[
                      styles.option,
                      { backgroundColor: selected ? "#d2cbc5" : "#ffffff" }
                    ]}
                  >

                    <OStar  width={18.15} height={18.15} style={{ color: selected ? "#fff" : "#000", fontSize: 18 }} />
                  </TouchableOpacity>
                )

              })}
            </View>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => setFilterVisible(false)}
            >
              <Text style={styles.filterText}>FILTER</Text>
            </TouchableOpacity>

          </View>
        </View>

      </Modal>

    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  imageWrapper: {
    width: width,
  },

  image: {
    width: width,
    height: 321,
    borderRadius: 20
  },

  dotContainer: {
    position: "absolute",
    top: 270,
    alignSelf: "center",
    flexDirection: "row"
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4
  },

  activeDot: {
    backgroundColor: "#fff",
    width: 10
  },

  header: {
    position: "absolute",
    top: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },

  iconButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fff"
  },

  iconContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    height: 40,
    justifyContent: "center"
  },

  iconRow: {
    flexDirection: "row",
    gap: 40
  },

  restaurantTitle: {
    fontSize: 20,
    fontFamily: "Sen-Bold"
  },

  description: {
    color: "#A0A5BA",
    marginTop: 5,
    lineHeight: 22,
    fontFamily: "Sen-Regular",
  },

  categoryButton: {
    paddingHorizontal: 20,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ddd",
    marginLeft: 10
  },

  foodCard: {
    width: 180,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 10,
    elevation: 3,
    marginTop: 20
  },

  foodImage: {
    width: "100%",
    height: 100,
    borderRadius: 10
  },

  foodTitle: {
    fontSize: 16,
    fontFamily: "Sen-Regular",
    marginTop: 5
  },

  foodPlace: {
    color: "#777",
    fontFamily: "Sen-Regular"
  },

  price: {
    color: "#000000",
    fontSize: 13,
    fontFamily: "Sen-Bold"
  },

  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",

  },

  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    width: 327,
    height: 630,
    borderRadius: 20

  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 17,
    fontFamily: "Sen-Regular"
  },

  sectionTitle: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    marginTop: 20
  },

  optionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,

  },

  option: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 30,
    paddingHorizontal: 13,
    paddingVertical: 15,
    marginRight: 10,
    marginBottom: 10,
  },

  filterButton: {
    backgroundColor: "#FF7622",
    marginTop: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  filterText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Sen-Bold"
  }

});