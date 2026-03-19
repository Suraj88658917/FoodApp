import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Back1 from "../../assets/image/back.svg";
import ProfileCircle from "../../assets/image/ProfileCircle.svg";
import Pen from "../../assets/image/Pen.svg";
import * as ImagePicker from 'react-native-image-picker';

const EditScreen = ({ navigation, route }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [subTitle, setSubtitle] = useState("");   

  useEffect(() => {
    console.log(" EditScreen OPENED");

    if (route.params) {
      console.log(" Data received from PersonalInfoScreen:", route.params);

      setName(route.params.name || "");
      setEmail(route.params.email || "");
      setPhone(route.params.phone || "");
      setImage(route.params.image || null);
      setSubtitle(route.params.subTitle || "");   
    }
  }, []);

  const pickImage = () => {
    console.log(" Opening Image Picker");

    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (res) => {
      if (!res.didCancel && res.assets) {
        setImage(res.assets[0].uri);
      } else {
        console.log(" Image selection cancelled");
      }
    });
  };

  const handleSave = () => {
    console.log(" SAVE button clicked");

    navigation.navigate("PersonalInfoScreen", {
      name,
      email,
      phone,
      image,
      subTitle,    
    });
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Back1 width={20} height={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Edit Profile</Text>
        <View style={{ width: 45 }} />
      </View>

      <View style={styles.profileWrapper}>
        <TouchableOpacity onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.profileImg} />
          ) : (
            <ProfileCircle width={120} height={120} />
          )}
          <View style={styles.penIcon}>
            <Pen width={22} height={22} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>

        <Text style={styles.label}>FULL NAME</Text>
        <TextInput
        placeholder="Enter Your Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />


        <Text style={styles.label}>EMAIL</Text>
        <TextInput
        placeholder="Enter Your Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>PHONE</Text>
        <TextInput
        placeholder="Enter Your Phone Number"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

       <View>
         <Text style={styles.label}>BIO</Text>
        <TextInput
        placeholder="Write your Bio"
          style={styles.input1}
          value={subTitle}
          onChangeText={setSubtitle}
          
        />
       </View>

      </View>

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>SAVE</Text>
      </TouchableOpacity>

    </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 55,
    paddingHorizontal: 20
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    flex: 1,
    fontSize: 17,
    fontFamily: "Sen-Regular",
     paddingHorizontal: 20
  },

  profileWrapper: {
    alignItems: "center",
    marginTop: 20,
  },

  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60
  },

  penIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FF7622",
    padding: 8,
    borderRadius: 20
  },

  form: {
    marginTop: 40,
    paddingHorizontal: 20
  },

  label: {
    fontSize: 12,
    color: "#000000",
    marginBottom: 5,
    fontFamily:"Sen-Bold"
  },

  input: {
    backgroundColor: "#F6F8FA",
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontFamily:"Sen-Regular",
    color:"#999"
  },
   input1: {
    backgroundColor: "#F6F8FA",
    borderRadius: 10,
    paddingVertical: 60,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontFamily:"Sen-Regular",
    color:"#999",
  },

  saveBtn: {
    backgroundColor: "#FF7622",
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center"
  },

  saveText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Sen-Bold"
  }
});