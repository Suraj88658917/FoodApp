import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

import Back1 from "../../assets/image/back.svg";
import ProfileCircle from "../../assets/image/ProfileCircle.svg";
import Info from "../../assets/image/Info.svg";
import Email from "../../assets/image/email.svg";
import Phone from "../../assets/image/phone1.svg";

const PersonalInfoScreen = ({ navigation, route }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [subTitle, setSubtitle] = useState("");

  useEffect(() => {
    if (route?.params) {
      setName(route.params.name || "");
      setEmail(route.params.email || "");
      setPhone(route.params.phone || "");
      setImage(route.params.image || null);
      setSubtitle(route.params.subTitle || "");
    }
  }, [route?.params]);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() =>
            navigation.navigate("ProfileScreen", { name, image, subTitle  , email , phone })
          }
        >
          <Back1 width={20} height={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Personal Info</Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditScreen", {
              name,
              email,
              phone,
              image,
              subTitle,
            })
          }
          style={styles.editBtn}
        >
          <Text style={styles.editText}>EDIT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileRow}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profileImg} />
        ) : (
          <ProfileCircle width={85} height={85} />
        )}

        <View style={styles.profileText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subText}>{subTitle}</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>

        <View style={styles.card}>
          <Info width={35} height={35} />
          <View style={styles.info}>
            <Text style={styles.label}>FULL NAME</Text>
            <Text style={styles.value}>{name}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Email width={35} height={35} />
          <View style={styles.info}>
            <Text style={styles.label}>EMAIL</Text>
            <Text style={styles.value}>{email}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Phone width={35} height={35} />
          <View style={styles.info}>
            <Text style={styles.label}>PHONE</Text>
            <Text style={styles.value}>{phone}</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default PersonalInfoScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 55,
    paddingHorizontal: 20,
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
    color: "#000",
    paddingHorizontal: 20
  },

  editBtn: { position: "absolute", right: 20 },

  editText: {
    color: "#FF7622",
    fontSize: 13,
    fontFamily: "Sen-Bold"
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 20
  },

  profileImg: { width: 85, height: 85, borderRadius: 50 },

  profileText: { marginLeft: 20 },

  name: { fontSize: 20, fontFamily: "Sen-Bold" },

  subText: { fontSize: 13, color: "#888", marginTop: 5 },

  cardContainer: { marginTop: 30, paddingHorizontal: 20 },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F8FA",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15
  },

  info: { marginLeft: 15 },

  label: { fontSize: 12, color: "#999" },

  value: {
    fontSize: 15,
    fontFamily: "Sen-Bold",
    marginTop: 3
  }
});