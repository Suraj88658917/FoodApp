import React, { useRef, useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity, Image, } from "react-native";

import { storage } from "../../storage/storage";

const { width } = Dimensions.get("window");

const data = [
  {
    id: "1",
    image: require("../../assets/image/Rectangle.svg"),
    title: "All your favorites",
    subtitle: "Get all your loved foods in one once place,\n you just place the orer we do the rest"
  },
  {
    id: "2",
    image: require("../../assets/image/Rectangle.svg"),
    title: "All your favorites",
    subtitle: "Get all your loved foods in one once place,\n you just place the orer we do the rest"
  },
  {
    id: "3",
    image: require("../../assets/image/Rectangle.svg"),
    title: "Order from chosen chef",
    subtitle: "Get all your loved foods in one once place,\n you just place the orer we do the rest"
  },
  {
    id: "4",
    image: require("../../assets/image/Rectangle.svg"),
    title: "Free delivery offers",
    subtitle:  "Get all your loved foods in one once place,\n you just place the orer we do the rest"
  },
];

const Onboarding = ({ navigation }) => {

  const [index, setIndex] = useState(0);
  const flatListRef = useRef();

  const SkipOnbording = () => {

    storage.set("OnboardingScreen", true);

    console.log("All Keys:", storage.getAllKeys());
    console.log("Onboarding Value:", storage.getBoolean("OnboardingScreen"));

    navigation.replace("LoginScreen");


  };

  const onScrollEnd = (e) => {

    const slideIndex = Math.round(
      e.nativeEvent.contentOffset.x / width
    );

    setIndex(slideIndex);

  };

  const onNext = () => {

    if (index < data.length - 1) {

      flatListRef.current.scrollToIndex({
        index: index + 1,
        animated: true,
      });

    } else {

      SkipOnbording();

    }

  };

  return (

    <View style={styles.container}>

     <View>
       <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={onScrollEnd}
        renderItem={({ item }) => (
          <View style={styles.slide}>

            <Image source={item.image} style={styles.image} />

            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.desc}>{item.subtitle}</Text>

          </View>
        )}
      />
     </View>

      <View style={styles.pagination}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>

        {index === data.length - 1 ? (

          <View style={styles.buttonContainer1}>
            <TouchableOpacity style={styles.button1} onPress={SkipOnbording}>
              <Text style={styles.buttonText1}>Get Started</Text>
            </TouchableOpacity>
          </View>

        ) : (

          <>
          <View style={{justifyContent:"center" , alignItems:"center" , }}>
              <TouchableOpacity style={styles.button} onPress={onNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={SkipOnbording}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
          </View>
          </>

        )}

      </View>

    </View>

  );

};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"

  },

  slide: {
    width,
    alignItems: "center",
    marginTop: 70
  },

  image: {
    width: 240,
    height: 262,
    marginBottom: 50,
    backgroundColor: "#98A8B8",
    borderRadius: 12,
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 17,
    fontFamily: "Sen-Bold",
    color: "#000000",
  },

  desc: {
    fontSize: 16,
    textAlign: "center",
    color: "#999",
    lineHeight: 20,
    fontFamily: "Sen-Regular",
  

  },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 200,
    width: "100%",
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ebd399",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#FF7622",
    width: 8,
  },

  buttonContainer: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
    width: "100%",
  },

  buttonContainer1: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
    width: "100%",
  },

  skip: {
    fontSize: 16,
    color: "#999",
    marginTop: 10,
    fontFamily: "Sen-Regular",
  },

  button: {
    backgroundColor: "#FF7622",
    paddingVertical: 20,
    paddingHorizontal: 150,
    borderRadius: 12,
  },
  button1: {
    backgroundColor: "#FF7622",
    paddingVertical: 20,
    paddingHorizontal: 128,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Sen-Medium",
  },
  buttonText1: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Sen-Medium",
  },
});