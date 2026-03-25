import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";

import ArrowRight from "../../assets/image/ArrowRight.svg";
import Man from "../../assets/image/man.svg";
import OrangeCard from "../../assets/image/OrangeCard.svg";
import OStar1 from "../../assets/image/OStar1.svg";
import Rating from "../../assets/image/Rating.svg";
import Image01 from "../../assets/image/image01.svg";
import Ocard1 from "../../assets/image/Ocard1.svg";
import Wcard1 from "../../assets/image/Wcard1.svg";
import Image02 from "../../assets/image/image02.svg";
import Image03 from "../../assets/image/image03.svg";
import Image04 from "../../assets/image/image04.svg";
import Image05 from "../../assets/image/image05.svg";
import Image06 from "../../assets/image/image06.svg";
import Image07 from "../../assets/image/image07.svg";
import Image08 from "../../assets/image/image08.svg";
import Image09 from "../../assets/image/image09.svg";
import Female from "../../assets/image/female.svg";
import Point from "../../assets/image/point.svg";

const data = [
  {
    id: "1",
    card: Ocard1,
    image: Image01,
    title: "Hydra \nCrane"
  },
  {
    id: "2",
    card: Wcard1,
    image: Image02,
    title: "Farana \nCrane"
  },
  {
    id: "3",
    card: Wcard1,
    image: Image03,
    title: "Tyre \nCrane"
  },
  {
    id: "4",
    card: Wcard1,
    image: Image04,
    title: "Chain \nCranes"
  },
  {
    id: "5",
    card: Wcard1,
    image: Image05,
    title: "Forklift \nCranes"
  },
];

const data1 = [
  {
    id: "1",
    image: Image06,
    title: "12 Ton Hydra Crane",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus ex luctus."

  },
  {
    id: "2",
    image: Image07,
    title: "15 Ton Hydra Crane",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus ex luctus."

  },
  {
    id: "3",
    image: Image08,
    title: "16 Ton Hydra Crane",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus ex luctus."

  },
  {
    id: "4",
    image: Image09,
    title: "16 Ton Hydra Crane",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus ex luctus."

  }
]

const data2 = [
  {
    id: "1",
    image: Female,
    title: "Shreyashi Rosh",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus ex vel luctus sagittis.",
    subtitle1: "JCB"
  },
  {
    id: "2",
    image: Female,
    title: "Shreyashi Rosh",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus ex vel luctus sagittis.",
    subtitle1: "Farana Crane"
  },
  {
    id: "3",
    image: Female,
    title: "Shreyashi Rosh",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus ex vel luctus sagittis.",
    subtitle1: "Farana Crane"
  },
  {
    id: "4",
    image: Female,
    title: "Shreyashi Rosh",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus ex vel luctus sagittis.",
    subtitle1: "Farana Crane"
  },
  {
    id: "5",
    image: Female,
    title: "Shreyashi Rosh",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus ex vel luctus sagittis.",
    subtitle1: "Farana Crane"
  },
  {
    id: "6",
    image: Female,
    title: "Shreyashi Rosh",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus ex vel luctus sagittis.",
    subtitle1: "Farana Crane"
  },
]

const renderItem1 = ({ item }) => {
  return (
    <View style={styles.reviewCard}>

      <View style={styles.row1}>

        <item.image width={120} height={109} />

        <View style={styles.textBox1}>
          <View>
            <Text style={styles.title1}>{item.title}</Text>
          </View>

          <View>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        </View>

      </View>

      <View style={{ position: "absolute", top: 90, left: 140 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFBF4A",
            width: 102,
            height: 30,
            borderRadius: 17,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular", color: "#000" }}>View Details</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const renderItem2 = ({ item }) => {
  return (
    <View style={styles.reviewCard1}>

      <View style={styles.row2}>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <item.image width={34} height={34} />

          <View style={styles.textContainer1}>

            <Text style={styles.title3}>{item.title}</Text>

            <View style={styles.ratingRow1}>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <OStar1 width={12} height={12} />
                <Rating width={15} height={13} />
              </View>
              <Point width={4} height={4} />
              <Text style={styles.subtitle2}>{item.subtitle1}</Text>
            </View>

          </View>
        </View>

      </View>
      <View>
        <Text style={styles.reviewText}>{item.subtitle}</Text>
      </View>

    </View>
  );
};

const ProviderScreen = ({ navigation }) => {

  const [activeTab, setActiveTab] = useState("machine");
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = selectedId === item.id;

    return (
      <View>
        <TouchableOpacity
          style={[
            styles.cardBox,
            { backgroundColor: isSelected ? "#FFBF4A" : "#F6F7FC" }
          ]}
          onPress={() => setSelectedId(item.id)}
          activeOpacity={0.8}
        >
          <item.image width={46} height={38} style={styles.machineImage} />

        </TouchableOpacity>
        <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center" , marginRight:10 }}>
          <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular", color: "#757575" }}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowRight width={24} height={24} />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.title}>Detail</Text>
        </View>

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.profileContainer}>

          <View style={styles.orangeCard}>
            <OrangeCard width={110} height={86} />
          </View>

          <View style={styles.manImage}>
            <Man width={78} height={72} />
          </View>

          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>
              Techugo Crane{"\n"}Company
            </Text>

            <View style={styles.ratingRow}>
              <OStar1 width={12} height={12} />
              <Rating width={15} height={13} />
            </View>
          </View>

        </View>

        <View style={styles.card}>

          <Text style={styles.heading}>Vendor Detail</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Company Name:</Text>
            <Text style={styles.value}>Auto Crane Service</Text>
          </View>

          <View style={styles.rowColumn}>
            <Text style={styles.label}>Company Address</Text>
            <Text style={styles.valueAddress}>
              401 East Benton Place, Chicago, Cook County, Illinois, 60601
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.value}>+91-9876543210</Text>
          </View>

        </View>

        <View style={styles.tabContainer}>

          <TouchableOpacity
            style={activeTab === "machine" ? styles.activeTab : styles.inactiveTab}
            onPress={() => setActiveTab("machine")}
          >
            <Text style={activeTab === "machine" ? styles.activeText : styles.inactiveText}>
              Machine
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={activeTab === "review" ? styles.activeTab : styles.inactiveTab}
            onPress={() => setActiveTab("review")}
          >
            <Text style={activeTab === "review" ? styles.activeText : styles.inactiveText}>
              Reviews
            </Text>
          </TouchableOpacity>

        </View>

        {activeTab === "machine" ? (
          <View>
            <Text style={styles.contentText}>Category of crane</Text>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 18 }}
            />
            <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium", color: "#000", marginTop: 15, paddingHorizontal: 20 }}>Available Crane</Text>
            <FlatList
              data={data1}
              renderItem={renderItem1}
              keyExtractor={(item) => item.id}
              Vertical
              contentContainerStyle={{ paddingHorizontal: 20 }}
              scrollEnabled={false}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.contentText1}>Reviews</Text>
            <FlatList
              data={data2}
              renderItem={renderItem2}
              keyExtractor={(item) => item.id}
              Vertical
              contentContainerStyle={{ paddingLeft: 18 }}
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>

    </View>
  );
};

export default ProviderScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#373434"
  },

  profileContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 10
  },

  orangeCard: {
    marginTop: 10
  },

  manImage: {
    position: "absolute",
    top: 24,
    left: 32
  },

  companyInfo: {
    justifyContent: "flex-end",
    height: 85,
    paddingHorizontal: 14
  },

  companyName: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    lineHeight: 23
  },

  ratingRow: {
    flexDirection: "row",
    gap: 4,
    marginTop: 6
  },

  card: {
    backgroundColor: "#F6F7FC",
    margin: 18,
    padding: 12,
    borderRadius: 16
  },

  heading: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    marginBottom: 8
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },

  rowColumn: {
    marginBottom: 10
  },

  label: {
    fontSize: 12,
    fontFamily: "Poppins-Medium"
  },

  value: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#757575"
  },

  valueAddress: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#757575",
    marginTop: 2
  },

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#F6F7FC",
    marginHorizontal: 20,
    padding: 6,
    borderRadius: 10
  },

  activeTab: {
    flex: 1,
    backgroundColor: "#FFBF4A",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5
  },

  inactiveTab: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5
  },

  activeText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#000000"
  },

  inactiveText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#333"
  },
  contentText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    marginTop: 13,
    paddingHorizontal: 18
  },
  contentText1: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    marginTop: 13,
    paddingHorizontal: 18
  },
  cardBox: {
    width: 70,
    height: 70,
    marginRight: 12,
    marginTop: 13,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  cardBg: {
    position: "absolute",
  },

  machineImage: {
    alignSelf: "center",
    marginTop: 10,
  },

  machineName: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    width: "100%",
  },
  reviewCard: {
    backgroundColor: "#F6F7FC",
    marginTop: 12,
    borderRadius: 14,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: 325,
    height: 129


  },
  textBox: {
    paddingHorizontal: 13,
    flex: 1,

  },
  title1: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#000",
  },
  subtitle: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "#757575",

  },

  textBox1: {
    paddingHorizontal: 13,
    width: 200
  },
  row1: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10
  },
  reviewCard1: {
    backgroundColor: "#ffffff",
    marginTop: 12,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#f3efef",
    width: 325,

  },

  row2: {
    flexDirection: "row",
  },

  textContainer1: {
    flex: 1,
    marginLeft: 10,
  },

  title3: {
    fontSize: 13,
    fontFamily: "Poppins-Medium",
    color: "#000",
  },

  ratingRow1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  dot: {
    marginHorizontal: 6,
    fontSize: 12,
    color: "#757575",
  },

  subtitle2: {
    fontSize: 11,
    fontFamily: "Poppins-Regular",
    color: "#757575",
  },

  reviewText: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#757575",
    lineHeight: 17,
  },
});