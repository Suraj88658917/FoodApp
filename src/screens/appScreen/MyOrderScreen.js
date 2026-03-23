import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';

import Back1 from "../../assets/image/back.svg";
import PFilter from "../../assets/image/PFilter.svg";
import Squar0rder from "../../assets/image/squar0rder.svg";

const categories = [
  { id: "1", title: "Ongoing" },
  { id: "2", title: "History" },
];

const data = [
  { id: "1", title: "Pizza Hut", price: "$35.25", item: "03 Items", code: "#162432" },
  { id: "2", title: "McDonald", price: "$40.25", item: "02 Items", code: "#232432" },
 { id: "3", title: "Starbucks", price: "$10.25", item: "04 Items", code: "#562432" }, 
 { id: "4", title: "Pizza Hut", price: "$35.25", item: "07 Items", code: "#962432" },
];

const data1 = [
  { id: "1", title: "Pizza Hut", price: "$35.25", item: "03 Items", code: "#162432" },
  { id: "2", title: "McDonald", price: "$40.25", item: "02 Items", code: "#232432" },
 { id: "3", title: "Starbucks", price: "$10.25", item: "04 Items", code: "#562432" }, 
 { id: "4", title: "Pizza Hut", price: "$35.25", item: "07 Items", code: "#962432" },
];

const MyOrderScreen = ({ navigation }) => {

  const [selected, setSelected] = useState(categories[0]);

  const renderItem = ({ item }) => (
    <View style={styles.row}>

      <View style={{ flexDirection: "row" }}>
        <Squar0rder width={60} height={60} />

        <View style={styles.textContainer}>
          <Text style={styles.title1}>{item.title}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.time}>{item.price}</Text>
            <Text style={styles.itemText}>{item.item}</Text>
          </View>
        </View>
        <View style={{marginLeft:50}}>
          <Text style={styles.code}>{item.code}</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.trackBtn}>
          <Text style={styles.trackText}>Track Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

  const renderItem1 = ({ item }) => (
    <View style={styles.row}>

      <View style={{ flexDirection: "row" }}>
        <Squar0rder width={60} height={60} />

        <View style={styles.textContainer}>
          <Text style={styles.title1}>{item.title}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.time}>{item.price}</Text>
            <Text style={styles.itemText}>{item.item}</Text>
          </View>
        </View>
        <View style={{marginLeft:50}}>
          <Text style={styles.code}>{item.code}</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.trackBtn}>
          <Text style={styles.trackText}>Track Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

    </View>
  );


  const renderCategory = ({ item }) => {
    const isSelected = selected.id === item.id;

    return (
      <TouchableOpacity
        onPress={() => setSelected(item)}
        style={styles.categoryItem}
      >
        <Text style={[styles.categoryText, isSelected && styles.activeText]}>
          {item.title}
        </Text>

        {isSelected && <View style={styles.underline} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Back1 width={20} height={20} />
        </TouchableOpacity>

        <View style={{ width: 250 }}>
          <Text style={styles.title}>My Orders</Text>
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <PFilter width={20} height={20} />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderCategory}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>

       <View style={{ height: 40, justifyContent: "flex-end", paddingHorizontal: 30 }}>
        <Text style={{ fontSize: 14, fontFamily: "Sen-Regular" }}>Food</Text>
      </View> 

     <View>
       <FlatList
        data={selected.id === "1" ? data : data1}
        keyExtractor={(item) => item.id}
        renderItem={selected.id === "1" ? renderItem : renderItem1}
        contentContainerStyle={{ padding: 20 }}
      />
     </View>

    </View>
  );
};

export default MyOrderScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },

  title: {
    fontSize: 16,
    fontFamily: "Sen-Regular",
    color: "#000",
  },

  categoryItem: {
    marginRight: 30,
    alignItems: "center",
    marginTop: 15,
  },

  categoryText: {
    fontSize: 14,
    color: "#aaa",
    paddingHorizontal: 50,
    padding: 10,
  },

  activeText: {
    color: "#FF7622"
  },

  underline: {
    height: 2,
    width: "100%",
    backgroundColor: "#FF7622",
    marginTop: 5,
  },

  row: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 12,
    marginBottom: 15,
  },

  row1: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },

  textContainer: {
    marginTop: 4,
    paddingHorizontal: 15
  },

  title1: {
    fontSize: 14,
    color: "#000",
    fontFamily: "Sen-Bold"
  },

  title2: {
    fontSize: 16,
    fontFamily: "Sen-Bold"
  },

  subtitle1: {
    fontSize: 13,
    color: "#000000",
  },

  time: {
    fontSize: 12,
    color: "#000000",
    marginTop: 5,
    fontFamily: "Sen-Bold"
  },

  time1: {
    fontSize: 12,
    color: "#000000",
    marginBottom: 5,
  },

  rightContainer: {
    alignItems: "flex-end",
  },

  itemText: {
    fontSize: 12,
    color: "#817878",
    marginTop: 4,
    fontFamily: "Sen-Regular",
    paddingHorizontal: 14
  },

  code: {
    fontSize: 12,
    color: "#817878",
    marginTop: 5,
    fontFamily: "Sen-Regular",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal:6,
    height:40
  },

  trackBtn: {
    flex: 1,
    backgroundColor: "#FF7622",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },

  trackText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Sen-Bold",
  },

  cancelBtn: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: "#FF7622",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  cancelText: {
    color: "#FF7622",
    fontSize: 14,
    fontFamily: "Sen-Bold",
  },

  iconButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#ECF0F4",
  },

});