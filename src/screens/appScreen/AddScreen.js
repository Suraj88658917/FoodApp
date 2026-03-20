import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import Back1 from "../../assets/image/back.svg";
import Additem from "../../assets/image/Additem.svg";
import { launchImageLibrary } from 'react-native-image-picker';
import Vector2 from "../../assets/image/Vector2.svg";

import Dicon1 from "../../assets/image/Dicon1.svg";
import AWicon1 from "../../assets/image/AWicon1.svg";
import Dicon3 from "../../assets/image/Dicon3.svg";
import AWicon2 from "../../assets/image/AWicon2.svg";
import Dicon5 from "../../assets/image/Dicon5.svg";
import AWicon3 from "../../assets/image/AWicon3.svg";

import Fruit1 from "../../assets/image/fruit1.svg";
import Fruit2 from "../../assets/image/fruit2.svg";
import Fruit3 from "../../assets/image/fruit3.svg";
import Fruit4 from "../../assets/image/fruit4.svg";
import Fruit5 from "../../assets/image/fruit5.svg";
import Fruit6 from "../../assets/image/fruit6.svg";

const AddScreen = ({ navigation }) => {

  console.log("AddScreen Loaded");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([null, null, null, null, null]);
  const [pickup, setPickup] = useState(false);
  const [delivery, setDelivery] = useState(false);


  const handleSave = () => {

  const itemData = {
    name: name,
    price: price,
    images: images,
    pickup: pickup,
    delivery: delivery
  };

  console.log("Saved Item Data:", itemData);

  navigation.navigate("Home", { newItem: itemData });

};

  const handleReset = () => {
    setName("");
    setPrice("");
    setPickup(false);
    setDelivery(false);
    setImages([null, null, null, null, null]);
  };

  const openGallery = (index) => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          const newImages = [...images];
          newImages[index] = response.assets[0].uri;
          setImages(newImages);
        }
      }
    );
  };

  const renderItem = ({ index }) => {
    return (
      <TouchableOpacity onPress={() => openGallery(index)}>
        <View style={styles.imageBox}>
          {images[index] ? (
            <Image source={{ uri: images[index] }} style={styles.image} />
          ) : (
            <Additem width={111} height={101} />
          )}
        </View>
      </TouchableOpacity>
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

        <Text style={styles.title}>Add New Items</Text>

        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.resetText}>RESET</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>


        <Text style={styles.label}>ITEM NAME</Text>

        <TextInput
          placeholder="Mazali Chicken Halim"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Text style={styles.label}>UPLOAD PHOTO/VIDEO</Text>

        <View style={{ marginTop: 10 }}>
          <FlatList
            data={[0, 1, 2, 3, 4]}
            keyExtractor={(item) => item.toString()}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20 }}
          />
        </View>

        <Text style={styles.label}>PRICE</Text>

        <View style={styles.priceRow}>
          <TextInput
            placeholder="Price"
            placeholderTextColor="#999"
            value={price}
            onChangeText={setPrice}
            style={styles.priceInput}
            keyboardType="number-pad"
          />

          <View style={styles.checkboxContainer}>

            <TouchableOpacity
              style={styles.checkboxRow}
              onPress={() => setPickup(!pickup)}
            >
              <View style={[styles.checkbox, pickup && styles.checked]}>
                {pickup && <Text style={styles.tick}>✓</Text>}
              </View>
              <Text style={styles.checkboxText}>Pick Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.checkboxRow}
              onPress={() => setDelivery(!delivery)}
            >
              <View style={[styles.checkbox, delivery && styles.checked]}>
                {delivery && <Text style={styles.tick}>✓</Text>}
              </View>
              <Text style={styles.checkboxText}>Delivery</Text>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Basic</Text>

          <TouchableOpacity style={styles.seeAll}>
            <Text style={styles.seeAllText}>See All</Text>
            <Vector2 width={6} height={10} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 20 }}>
          <View style={styles.iconRow}>
            <TouchableOpacity><Dicon1 width={50} height={84} /></TouchableOpacity>
            <TouchableOpacity><AWicon1 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><Dicon3 width={50} height={84} /></TouchableOpacity>
            <TouchableOpacity><AWicon2 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><Dicon5 width={50} height={84} /></TouchableOpacity>
            <TouchableOpacity><AWicon3 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><AWicon2 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><Dicon5 width={50} height={84} /></TouchableOpacity>
            <TouchableOpacity><AWicon3 width={50} height={70} /></TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Fruit</Text>

          <TouchableOpacity style={styles.seeAll}>
            <Text style={styles.seeAllText}>See All</Text>
            <Vector2 width={6} height={10} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 20 }}>
          <View style={styles.iconRow}>
            <TouchableOpacity><Fruit1 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><Fruit2 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><Fruit3 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><Fruit4 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><Fruit5 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><Fruit6 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><Fruit4 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><Fruit5 width={50} height={70} /></TouchableOpacity>
            <TouchableOpacity><Fruit6 width={50} height={70} /></TouchableOpacity>
          </View>
        </ScrollView>


        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 15, fontFamily: "Sen-Regular" }}>DETAILS</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adips{"\n"}
            cing elit. Bibendum in vel, mattis et amet dui{"\n"}
            mauris turpis.
          </Text>
        </View>

        <View style={styles.saveContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveText}>SAVE CHANGES</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </View>
  );
};

export default AddScreen;

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
    marginBottom: 10
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
    flex: 1
  },

  resetText: {
    fontSize: 15,
    fontFamily: "Sen-Regular",
    color: "#ffa200"
  },

  label: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    color: "#000",
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 8
  },

  input: {
    height: 55,
    marginHorizontal: 20,
    backgroundColor: "#f3f3f35d",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#e9e2e2"
  },

  imageBox: {
    backgroundColor: "#F4F5F7",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },

  image: {
    width: 111,
    height: 101,
    borderRadius: 12
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20
  },

  priceInput: {
    height: 50,
    backgroundColor: "#f3f3f35d",
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e9e2e2",
    width: 120,
    marginRight: 15,
    paddingVertical: 10
  },

  checkboxContainer: {
    flexDirection: "row",
    paddingHorizontal: 10
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 50
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    marginRight: 6,
    justifyContent: "center",
    alignItems: "center"
  },

  checked: {
    borderColor: "#ffa200"
  },

  tick: {
    color: "#ffa200",
    fontSize: 14,
    fontWeight: "bold"
  },

  checkboxText: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    color: "#555"
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    paddingHorizontal: 20
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: "Sen-Regular",
    color: "#000"
  },

  seeAll: {
    flexDirection: "row",
    alignItems: "center"
  },

  seeAllText: {
    marginRight: 5,
    color: "#999",
    fontSize: 13
  },

  iconRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 15
  },
  infoBox: {
    marginTop: 10,
    width: "90%",
    height: 103,
    borderRadius: 8,
    borderColor: "#E8EAED",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },

  infoText: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    lineHeight: 18,
    color: "#555"
  },
  saveContainer: {
  paddingHorizontal: 20,
  paddingVertical: 20,
  backgroundColor: "#fff"
},

saveButton: {
  height: 55,
  backgroundColor: "#FF7622",
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center"
},

saveText: {
  color: "#fff",
  fontSize: 15,
  fontFamily: "Sen-Bold",
  letterSpacing: 1
}


});