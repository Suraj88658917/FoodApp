import { StyleSheet, View, TouchableOpacity, Text, ScrollView,Image } from 'react-native'
import React , { useState, useEffect }from 'react'

import Back1 from "../../assets/image/back.svg";
import PFilter from "../../assets/image/PFilter.svg";
import ProfileCircle from "../../assets/image/ProfileCircle.svg";
import Info from "../../assets/image/Info.svg";
import Arrow from "../../assets/image/arrow.svg";
import Settings from "../../assets/image/Settings.svg";
import Cart1 from "../../assets/image/Cart1.svg";
import Favourite from "../../assets/image/Favourite.svg";
import Notification1 from "../../assets/image/Notification1.svg";
import Payment from "../../assets/image/Payment.svg";
import User from "../../assets/image/User.svg";
import Address from "../../assets/image/Address.svg";
import Logout from "../../assets/image/Logout.svg";
import Orderhistory from "../../assets/image/order-history.svg";


const ProfileScreen = ({ navigation , route}) => {
    const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [subTitle, setSubtitle] = useState("");
  const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

console.log("ProfileScreen loaded")

 useEffect(() => {
  if (route?.params?.name) setName(route.params.name);
  if (route?.params?.image) setImage(route.params.image);
  if (route?.params?.subTitle) setSubtitle(route.params.subTitle);
  if (route?.params?.email) setEmail(route.params.email);
  if (route?.params?.phone) setPhone(route.params.phone);
}, [route?.params]);


  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate("MainApp")}
        >
          <Back1 width={20} height={20} />
        </TouchableOpacity>

        <View style={{width:270 ,  paddingHorizontal:20,marginTop:8}}>
          <Text style={styles.title}>Profile</Text>
        </View>

       <View style={{ marginRight:10}}>
         <TouchableOpacity style={styles.iconButton}>
          <PFilter width={20} height={20} />
        </TouchableOpacity>
       </View>
      </View>

      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 20 }}
  
       >
         
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

      <View style={{ marginTop: 25 }}>

        <TouchableOpacity
          style={styles.drawerRow}
          onPress={() => navigation.navigate("PersonalInfoScreen" , {
              name,
              image,
              subTitle,
              email,
              phone
            })}
        >
          <View style={styles.leftRow}>
            <Info width={40} height={40} />
            <Text style={styles.label}>Personal Info</Text>
          </View>

          <Arrow width={18} height={18} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerRow}
          onPress={() => navigation.navigate("AddressScreen")}
        >
          <View style={styles.leftRow}>
            <Address width={40} height={40} />
            <Text style={styles.label}>Addresses</Text>
          </View>

          <Arrow width={18} height={18} />
        </TouchableOpacity>

      </View>

      <View style={{ marginTop: 25  ,}}>

        <TouchableOpacity
          style={styles.drawerRow}
          onPress={() => navigation.navigate("MyCartScreen")}
        >
          <View style={styles.leftRow}>
            <Cart1 width={40} height={40} />
            <Text style={styles.label}>Cart</Text>
          </View>

          <Arrow width={18} height={18} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerRow}
          onPress={() => navigation.navigate("MyOrderScreen")}
        >
          <View style={styles.leftRow1}>
           <View style={{backgroundColor:"#ffffff" ,paddingHorizontal:13 , paddingVertical:10 , borderRadius:20 ,}}>
             <Orderhistory width={20} height={20} />
           </View>
            <Text style={styles.label}>My Order</Text>
          </View>

          <Arrow width={18} height={18} />
        </TouchableOpacity>

        <TouchableOpacity

          style={styles.drawerRow}
          // onPress={() => navigation.navigate()}
        >
          <View style={styles.leftRow}>
            <Favourite width={40} height={40} />
            <Text style={styles.label}>Favourite</Text>
          </View>

          <Arrow width={18} height={18} />
        </TouchableOpacity>

         <TouchableOpacity
          style={styles.drawerRow}
          // onPress={() => navigation.navigate()}
        >
          <View style={styles.leftRow}>
            <Notification1 width={40} height={40} />
            <Text style={styles.label}>Notifications</Text>
          </View>

          <Arrow width={18} height={18} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerRow}
          // onPress={() => navigation.navigate()}
        >
          <View style={styles.leftRow}>
            <Payment width={40} height={40} />
            <Text style={styles.label}>Payment Method</Text>
          </View>

          <Arrow width={18} height={18} />
        </TouchableOpacity>

      </View>

      <View style={{ marginTop: 25  ,}}>

        <TouchableOpacity
          style={styles.drawerRow}
          // onPress={() => navigation.navigate()}
        >
          <View style={styles.leftRow}>
            <Cart1 width={40} height={40} />
            <Text style={styles.label}>FAQs</Text>
          </View>

          <Arrow width={18} height={18} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerRow}
          onPress={() => navigation.navigate("ReviewsScreen")}
        >
          <View style={styles.leftRow}>
            <User width={40} height={40} />
            <Text style={styles.label}>User Reviews</Text>
          </View>

          <Arrow width={18} height={18} />
        </TouchableOpacity>

         <TouchableOpacity
          style={styles.drawerRow}
          // onPress={() => navigation.navigate()}
        >
          <View style={styles.leftRow}>
            <Settings width={40} height={40} />
            <Text style={styles.label}>Settings</Text>
          </View>

          <Arrow width={18} height={18} />
        </TouchableOpacity>

      </View>

        <View  style={{ marginTop: 25 }}>
                 <TouchableOpacity
                  style={styles.drawerRow}
                  // onPress={() => props.navigation.navigate()}
                >
                  <View style={styles.leftRow}>
                    <Logout width={30} height={40} />
                    <Text style={styles.label}>Log Out</Text>
                  </View>
      
                  <Arrow width={18} height={18} />
                </TouchableOpacity>
      
              </View>

      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 60,
    justifyContent:"space-between",
  },

  iconButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#ECF0F4",
  },

  title: {
    flex: 1,
    fontSize: 18,
    fontFamily: "Sen-Regular",
    color: "#000",
  },

  profileRow: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  profileText: {
    marginLeft: 25,
  },

  name: {
    fontSize: 18,
    fontFamily: "Sen-Bold",
  },

  subText: {
    fontSize: 13,
    fontFamily: "Sen-Regular",
    color: "#999",
    marginTop: 10,
  },

  drawerRow: {
    backgroundColor: "#F6F8FA",
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftRow: {
    flexDirection: "row",
    alignItems: "center",
  },
   leftRow1: {
    flexDirection: "row",
    alignItems: "center",
  
  },

  label: {
    marginLeft: 12,
    fontSize: 14,
    fontFamily: "Sen-Regular",
    color: "#000",
  },
   profileImg: {
    width: 100,
    height: 100,
    borderRadius: 60
  },
});