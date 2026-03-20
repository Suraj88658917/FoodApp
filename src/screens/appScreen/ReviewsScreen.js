import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Back1 from "../../assets/image/back.svg";
import Rcircle from "../../assets/image/Rcircle.svg";
import Rating5 from "../../assets/image/Rating5.svg";
import Dote from "../../assets/image/3dote.svg";

const data = [
  {
    id: "1",
    date: "20/12/2020",
    title: "Great Food and Service",
    subtitle: `This Food so tasty & delicious. Breakfast 
so fast Delivered in my place. Chef is very 
friendly. I’m really like chef for Home Food 
Order. Thanks. `
  },
  {
    id: "2",
    date: "20/12/2020",
    title: "Awesome and Nice",
    subtitle: `This Food so tasty & delicious. Breakfast 
so fast Delivered in my place.`
  },
  {
    id: "3",
    date: "20/12/2020",
    title: "Awesome and Nice",
    subtitle: `This Food so tasty & delicious. Breakfast 
so fast Delivered in my place. Chef is very 
friendly. I’m really like chef for Home Food 
Order. Thanks.`
  },
  {
    id: "4",
    date: "20/12/2020",
    title: "Great Food and Service",
    subtitle: `This Food so tasty & delicious.`
  },
  {
    id: "5",
    date: "20/12/2020",
    title: "Awesome and Nice",
    subtitle: `This Food so tasty & delicious. Breakfast 
so fast Delivered in my place. Chef is very 
friendly. I’m really like chef for Home Food 
Order. Thanks.`
  },
];

const ReviewsScreen = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.reviewRow}>

        <TouchableOpacity>
          <Rcircle width={48} height={48} />
        </TouchableOpacity>

        <View style={styles.card}>

          <View style={styles.rowBetween}>
            <Text style={styles.date}>{item.date}</Text>

            <TouchableOpacity>
              <Dote width={18} height={4} />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text style={styles.title1}>{item.title}</Text>

            <Rating5 width={72} height={13} />

            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>

        </View>
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

        <Text style={styles.title}>Reviews</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}
      />

    </View>
  );
};

export default ReviewsScreen;

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

  reviewRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20
  },

  card: {
    backgroundColor: "#F6F8FA",
    padding: 15,
    borderRadius: 12,
    marginLeft: 15,
    flex: 1
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  date: {
    fontSize: 13,
    color: "#888",
    fontFamily: "Sen-Regular"
  },

  content: {
    marginTop: 10
  },

  title1: {
    fontSize: 15,
    fontFamily: "Sen-Bold",
    color: "#000",
    marginBottom: 5
  },

  subtitle: {
    marginTop: 5,
    fontSize: 13,
    color: "#666",
    fontFamily: "Sen-Regular",
    lineHeight: 18
  }

});