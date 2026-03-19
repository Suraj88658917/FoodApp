import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image
} from 'react-native';
import React, { useState } from 'react';
import Back1 from "../../assets/image/back.svg";
import Additem from "../../assets/image/Additem.svg";
import { launchImageLibrary } from 'react-native-image-picker';
import Vector2 from "../../assets/image/Vector2.svg";

const AddScreen = ({ navigation }) => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([null, null, null, null, null]);
  const [pickup, setPickup] = useState(false);
  const [delivery, setDelivery] = useState(false);

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

  const data = [0, 1, 2, 3, 4];

  const renderItem = ({ item, index }) => {
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

      <View style={styles.labelContainer}>
        <Text style={styles.label}>ITEM NAME</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Mazali Chicken Halim"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      <View style={styles.uploadTextContainer}>
        <Text style={styles.uploadText}>UPLOAD PHOTO/VIDEO</Text>
      </View>

      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />

      </View>

      <View style={{ height: 40, justifyContent: "center", paddingHorizontal: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 13, fontFamily: "Sen-Regular" }}>PRICE</Text>
      </View>

      <View style={styles.priceRow}>
        <TextInput
          placeholder="Price"
          placeholderTextColor="#999"
          value={price}
          onChangeText={setPrice}
          style={styles.input1}
          keyboardType={"number-pad"}
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

      <View style={styles.headerRow2}>
        <Text style={styles.headerText}>Basic</Text>

        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 5, color: "#999" }}>See All</Text>
          <Vector2 width={6} height={10} />
        </TouchableOpacity>
      </View>

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
    color: "#000",
    flex: 1
  },

  resetText: {
    fontSize: 15,
    fontFamily: "Sen-Regular",
    color: "#ffa200"
  },

  labelContainer: {
    marginTop: 25,
    paddingHorizontal: 25
  },

  label: {
    fontSize: 15,
    fontFamily: "Sen-Regular",
    color: "#000"
  },

  inputContainer: {
    marginTop: 10,
    paddingHorizontal: 25
  },

  input: {
    height: 55,
    fontFamily: "Sen-Regular",
    backgroundColor: "#f3f3f35d",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#e9e2e2"
  },

  uploadTextContainer: {
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 20
  },

  uploadText: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    color: "#32343E"
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
    paddingHorizontal: 20,
    marginTop: 5
  },

  input1: {
    height: 50,
    backgroundColor: "#f3f3f35d",
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e9e2e2",
    width: 120,
    fontFamily: "Sen-Regular"
  },

  checkboxContainer: {
    flexDirection: "row",
    marginLeft: 20
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    marginRight: 8,
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
    fontSize: 14,
    fontFamily: "Sen-Regular",
    color: "#999"
  },
  headerRow2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Sen-Regular",
    color: "#999"
  },

});