import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';

import Back1 from "../../assets/image/back.svg";
import NCircle from "../../assets/image/NCircle.svg";
import NCube from "../../assets/image/NCube.svg";
import One1 from "../../assets/image/One1.svg";
import One2 from "../../assets/image/One2.svg";

const categories = [
  { id: "1", title: "Notifications", header: "Notifications" },
  { id: "2", title: "Messages (3)", header: "Messages" },
];

const data = [
  { id: "1", title: "Tanbir Ahmed", subtitle: "placed a new order", time: "20 min ago" },
  { id: "2", title: "Salim Smith", subtitle: "Left a 5 star review", time: "25 min ago" },
  { id: "3", title: "Royal Bengal", subtitle: "Agreed to cancel", time: "30 min ago" },
  { id: "4", title: "Pabel Vuiya", subtitle: "Placed a new order", time: "40 min ago" },
];

const data1 = [
  { id: "1", title: "Royal Parvaj", subtitle: "Sounds awesome!", time: "19:37", image: One1 },
  { id: "2", title: "Cameron Williamson", subtitle: "Ok, just hurry up...😊", time: "18:20", image: One2 },
  { id: "3", title: "Ralph Edwards", subtitle: "Thanks dude.", time: "17:10" },
  { id: "4", title: "Cody Fisher", subtitle: "How is going...?", time: "16:45" },
  { id: "5", title: "Eleanor Pena", subtitle: "Thanks for the awesome food!", time: "15:30" },
];

const NotificationScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(categories[0]);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <NCircle width={60} height={60} />

      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>
          <Text style={styles.title1}>{item.title} </Text>
          {item.subtitle}
        </Text>

        <Text style={styles.time}>{item.time}</Text>
      </View>

      <NCube width={50} height={50} />
    </View>
  );

  const renderItem1 = ({ item }) => (
    <View style={styles.row1}>
      <NCircle width={50} height={50} />

      <View style={styles.textContainer}>
        <Text style={styles.title2}>{item.title}</Text>
        <Text style={styles.subtitle1} numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.time1}>{item.time}</Text>

        {item.image && <item.image width={18} height={18} />}
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

        <Text style={styles.title}>{selected.header}</Text>
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

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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
    borderRadius: 22,
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },

  title: {
    fontSize: 18,
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
    color: "#aaa"
    
  },

  activeText: {
    color: "#FF7622"
  },

  underline: {
    height: 2,
    width: "140%",
    backgroundColor: "#FF7622",
    marginTop: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
    
  },

  row1: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },

  textContainer: {
    flex: 1,
    marginLeft: 10,
  },

  title1: {
    fontSize: 14,
    color: "#000",
  },

  title2: {
    fontSize: 16,
    fontFamily: "Sen-Bold"
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
  },

  subtitle1: {
    fontSize: 13,
    color: "#777",
  },

  time: {
    fontSize: 11,
    color: "#aaa",
    marginTop: 5
  },

  time1: {
    fontSize: 12,
    color: "#999",
    marginBottom: 5,
  },

  rightContainer: {
    alignItems: "flex-end",
  },
});