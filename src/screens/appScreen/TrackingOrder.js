import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import BlackArrow from "../../assets/image/BlackArrow.svg";
import TrackOrder from "../../assets/image/TrackOrder.svg";
import Card from "../../assets/image/WhiteBG.svg";
import TrackCube from "../../assets/image/TrackCube.svg";
import Otick from "../../assets/image/Otick.svg";
import OReload from "../../assets/image/OReload.svg";
import Octick from "../../assets/image/Octick.svg";
import ProfileImage from "../../assets/image/ProfileImage.svg";
import CallIcon from "../../assets/image/CallIcon.svg";
import Chaticon from "../../assets/image/Chaticon.svg"

const TrackingOrder = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <BlackArrow width={48} height={48} />
        </TouchableOpacity>

        <View style={{ justifyContent: "center", alignItems: "center", width: 120 }}>
          <Text style={styles.title}>Track Order</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <TrackOrder width={243.5} height={305} />
      </View>

      <View style={styles.cardContainer}>
        <Card width={"100%"} height={680} />

        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >

          <View style={styles.sectionHeader}>
            <TrackCube width={63} height={53} />
            <View>
              <Text style={{ fontSize: 16, fontFamily: "Sen-Regular", paddingHorizontal: 10 }}>Uttara Coffee House</Text>
              <Text style={{ fontSize: 12, fontFamily: "Sen-Regular", paddingHorizontal: 10, lineHeight: 20, color: "#c5c0c0" }}>Order At 06 Sept, 10:00pm</Text>
            </View>
          </View>

          <View style={{ gap: 5 }}>
            <View style={{ flexDirection: "row", paddingHorizontal: 70, gap: 10 }}>
              <Text style={{ fontSize: 15, fontFamily: "Sen-Bold" }}>2X</Text>
              <Text style={{ fontSize: 15, fontFamily: "Sen-Regular", color: "#6b6767" }}>Burger</Text>
            </View>
            <View style={{ flexDirection: "row", paddingHorizontal: 70, gap: 10 }}>
              <Text style={{ fontSize: 15, fontFamily: "Sen-Bold" }}>4X</Text>
              <Text style={{ fontSize: 15, fontFamily: "Sen-Regular", color: "#6b6767" }}>Sanwitch</Text>
            </View>
          </View>

          <View style={{ height: 80, justifyContent: "flex-end", alignItems: "center" }}>
            <Text style={{ fontSize: 30, fontFamily: "Sen-Bold" }}>20 min</Text>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 14, fontFamily: "Sen-Regular", lineHeight: 24, color: "#8d8686" }}>ESTIMATED DELIVERY TIME </Text>
          </View>

          <View style={{ marginTop: 40 }}>

            <View style={styles.stepContainer}>
              <View style={styles.iconContainer}>
                <Otick width={16} height={16} />
                <View style={styles.line} />
              </View>

              <Text style={styles.stepText1}>Your order has been received</Text>
            </View>

            <View style={styles.stepContainer}>
              <View style={styles.iconContainer}>
                <OReload width={16} height={16} />
                <View style={styles.line1} />
              </View>

              <Text style={styles.stepText}>The restaurant is preparing your food</Text>
            </View>

            <View style={styles.stepContainer}>
              <View style={styles.iconContainer}>
                <Octick width={16} height={16} />
                <View style={styles.line1} />
              </View>

              <Text style={styles.stepText}>Your order has been picked up for delivery</Text>
            </View>

            <View style={styles.stepContainer}>
              <View style={styles.iconContainer}>
                <Octick width={16} height={16} />
              </View>

              <Text style={styles.stepText}>Order arriving soon!</Text>
            </View>

          </View>

          <View style={styles.courierCard}>

            <ProfileImage width={54} height={54} />

            <View style={styles.courierInfo}>
              <Text style={styles.name}>Robet F.</Text>
              <Text style={styles.role}>Courier</Text>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity  onPress={() => navigation.navigate("CallScreen")}
              style={{ marginTop:10}}>
                <CallIcon width={90} height={90} />
              </TouchableOpacity>

              <TouchableOpacity  onPress={() => navigation.navigate("MessageScreen")} 
              style={styles.iconBtn}>
                <Chaticon width={45} height={45} />
              </TouchableOpacity>
            </View>

          </View>


        </ScrollView>
      </View>

    </View>
  )
}

export default TrackingOrder

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#D0D9E1"
  },

  header: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 10,
    flexDirection: "row"
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
    fontSize: 16,
    fontFamily: "Sen-Regular",
    color: "#373434"
  },

  imageContainer: {
    marginTop: 150,
    alignItems: "center"
  },

  cardContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center"
  },

  scrollContent: {
    position: "absolute",
    top: 60,
    width: "85%"
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 200,
  },

  sectionTitle: {
    fontSize: 14,
    color: "#999",
    fontFamily: "Sen-Regular"
  },

  editAddress: {
    color: "#FF7622",
    fontSize: 14,
    fontFamily: "Sen-Regular"
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  iconContainer: {
    alignItems: "center",
    marginRight: 15
  },

  line: {
    width: 1,
    height: 30,
    backgroundColor: "#FF7622",
    marginTop: 5
  },
  line1: {
    width: 1,
    height: 30,
    backgroundColor: "#7f7f7f",
    marginTop: 5
  },

  stepText: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    color: "#999",
    flex: 1
  },
  stepText1: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    color: "#FF7622",
    flex: 1
  },
  courierCard: {
    marginTop: 20,
    height: 90,
    backgroundColor: "#fff",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15
  },

  courierInfo: {
    marginLeft: 15,
    flex: 1
  },

  name: {
    fontSize: 18,
    fontFamily: "Sen-Bold",
    color: "#000"
  },

  role: {
    fontSize: 14,
    fontFamily: "Sen-Regular",
    color: "#7a7a7a",
    marginTop: 3
  },

  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:10
  },

  


})