import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Back1 from "../../assets/image/back.svg";
import FBox from "../../assets/image/FBox.svg";
import OStar from "../../assets/image/OStar.svg";
import ORate from "../../assets/image/ORate.svg";
import FDote from "../../assets/image/FDote.svg";
import PriceIcon from "../../assets/image/$60.svg"; 

const categories = [
  { id: "1", title: "All" },
  { id: "2", title: "Breakfast" },
  { id: "3", title: "Lunch" },
  { id: "4", title: "Dinner" },
];

const foodData = [
  { id: "1", name: "Chicken Thai Biriyani", type: "Breakfast" },
  { id: "2", name: "Chicken Bhuna", type: "Breakfast" },
  { id: "3", name: "Mazalichiken Halim", type: "Breakfast" },
  { id: "4", name: "Pancake", type: "Breakfast" },
  { id: "5", name: "Omelette", type: "Breakfast" },
  { id: "6", name: "Sandwich", type: "Breakfast" },
  { id: "7", name: "French Toast", type: "Breakfast" },
  { id: "8", name: "Burger", type: "Lunch" },
  { id: "9", name: "Rice Bowl", type: "Lunch" },
  { id: "10", name: "Chicken Biryani", type: "Lunch" },
  { id: "11", name: "Veg Thali", type: "Lunch" },
  { id: "12", name: "Pizza", type: "Dinner" },
  { id: "13", name: "Pasta", type: "Dinner" },
  { id: "14", name: "Grilled Chicken", type: "Dinner" },
  { id: "15", name: "Dal Roti", type: "Dinner" },
];


const renderFood = ({ item }, navigation) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ChefFoodDetailsScreen", { item })}
      style={styles.foodBox}
    >
      <View style={{ marginRight: 12 }}>
        <FBox width={102} height={102} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodType}>{item.type}</Text>

        <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <OStar width={16} height={16} />
            <ORate width={19} height={19} />
          </View>

          <Text style={{ marginLeft: 8, color: "#888" }}>
            (10 Review)
          </Text>
        </View>
      </View>

      <View style={{ justifyContent: "space-between", height: 100 }}>
        <TouchableOpacity>
          <FDote width={23} height={23} />
        </TouchableOpacity>

        <PriceIcon width={30.12} height={30.12} />

        <Text style={{ fontSize: 12, marginTop: 5 }}>Pick Up</Text>
      </View>
    </TouchableOpacity>
  );
};


const ListScreen = ({ navigation }) => {

  const [selected, setSelected] = useState("All");
  console.log("My Food List loaded")

  const filteredData =
    selected === "All"
      ? foodData
      : foodData.filter(item => item.type === selected);

  const renderCategory = ({ item }) => {
    const isSelected = selected === item.title;

    return (
      <View style={{ marginRight: 10, paddingHorizontal: 15, marginTop: 17 }}>
        <TouchableOpacity
          onPress={() => setSelected(item.title)}
          style={{ alignItems: "center" }}
        >
          <Text
            style={{
              color: isSelected ? "#FF7622" : "#000",
              fontSize: 14,
              fontFamily: "Sen-Regular",
            }}
          >
            {item.title}
          </Text>

          {isSelected && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>
    );
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

        <Text style={styles.title}>My Food List</Text>
      </View>

      <View>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderCategory}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          style={{ marginVertical: 15 }}
        />
      </View>

      <View style={styles.countBox}>
        <Text style={styles.countText}>
          Total {filteredData.length} items
        </Text>
      </View>

      <View>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={(item) => renderFood(item, navigation)}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

  underline: {
    height: 2,
    width: "150%",
    backgroundColor: "#FF7622",
    marginTop: 20,
  },

  countBox: {
    paddingHorizontal: 30,
    height: 30,
    justifyContent: "center"
  },

  countText: {
    fontSize: 14,
    color: "#888",
    fontFamily: "Sen-Regular",
  },

  foodBox: {
    padding: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  foodName: {
    fontSize: 16,
    fontFamily: "Sen-Bold",
    color: "#000",
  },

  foodType: {
    color: "#ff6207",
    marginTop: 10,
    backgroundColor: "#FF762233",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    textAlign: "center",
    overflow: "hidden",
  }
});