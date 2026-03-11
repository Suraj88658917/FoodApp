import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Search1 from "../../assets/image/Search.svg"
import Vector1 from "../../assets/image/Vector.svg";
import Rectangle123 from "../../assets/image/Squar.svg";
import Rectangle1234 from "../../assets/image/Squarlarge.svg";
import Rate from "../../assets/image/Rate.svg";
import Free from "../../assets/image/Free.svg";
import Min from "../../assets/image/Min.svg";

const data = [
  { id: "1", title: "Pizza" },
  { id: "2", title: "Burger" },
  { id: "3", title: "Sandwich" },
  { id: "4", title: "Coffee" },
  { id: "5", title: "Burger" },
  { id: "6", title: "Pizza" },
  { id: "7", title: "Sandwich" },
]


const renderItem = ({ item }) => {
  return (
    <View style={{ height: 150, paddingHorizontal: 7 }}>

      <TouchableOpacity style={styles.card} >
        <Rectangle123 width={120} height={70}   />
      </TouchableOpacity>


      <Text style={styles.title}>
        {item.title}
      </Text>

    </View>
  )
}

const HomeScreen = () => {

  const [name, setName] = useState("");

  return (
    <View style={styles.container}>

      <View style={{ flexDirection: "row", marginTop: 17 }}>
        <Text style={styles.text}>Hey Halal, </Text>
        <Text style={styles.text1}>Good Afternoon!</Text>
      </View>

      <View style={styles.searchContainer}>

        <TextInput
          placeholder="Search dishes, restaurants"
          placeholderTextColor="#6d6e70"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Search1 style={styles.Search1} />

      </View>

      <View style={styles.headerRow}>

        <Text style={styles.headerText}>
          All Categories
        </Text>

        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 5 }}>See All</Text>
          <Vector1 width={6} height={10} />
        </TouchableOpacity>

      </View>

      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 5 }}
        />
      </View>

      <View style={styles.headerRow1}>
        <Text style={[styles.headerText, { color: "#0b0a0a" }]}>
          Open Restaurants
        </Text>

        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 5 }}>See All</Text>
          <Vector1 width={6} height={10} />
        </TouchableOpacity>
      </View>

      <ScrollView
      showsVerticalScrollIndicator={false} 
      >
        <View style={{ marginTop:10 , justifyContent:"center" }}>
        <Rectangle1234 width={367} height={170}/>
       <View>
         <Text style={{fontSize:20 , fontFamily:"Sen-Regular" , color:"#000" , lineHeight:30}}>Rose Garden Restaurant</Text>
        <Text  style={{fontSize:14 , fontFamily:"Sen-Regular" , color:"#ada5a5" , lineHeight:20}}>Burger - Chiken - Riche - Wings</Text>
        <View style={{flexDirection:"row" , paddingRight:20 , gap:20 , marginTop:10 }}>
          <Rate width={47} height={20}/>
        <Free width={62} height={20}/>
        <Min width={74} height={20}/>
        </View>
       </View>
      </View>
      <View style={{ marginTop:10 , justifyContent:"center" }}>
        <Rectangle1234 width={367} height={170}/>
       <View>
         <Text style={{fontSize:20 , fontFamily:"Sen-Regular" , color:"#000" , lineHeight:30}}>Rose Garden Restaurant</Text>
        <Text  style={{fontSize:14 , fontFamily:"Sen-Regular" , color:"#ada5a5" , lineHeight:20}}>Burger - Chiken - Riche - Wings</Text>
        <View style={{flexDirection:"row" , paddingRight:10 , gap:20 , marginTop:10}}>
          <Rate width={47} height={20}/>
        <Free width={62} height={20}/>
        <Min width={74} height={20}/>
        </View>
       </View>
      </View>
      <View style={{ marginTop:10 , justifyContent:"center" }}>
        <Rectangle1234 width={367} height={170}/>
       <View>
         <Text style={{fontSize:20 , fontFamily:"Sen-Regular" , color:"#000" , lineHeight:30}}>Rose Garden Restaurant</Text>
        <Text  style={{fontSize:14 , fontFamily:"Sen-Regular" , color:"#ada5a5" , lineHeight:20}}>Burger - Chiken - Riche - Wings</Text>
        <View style={{flexDirection:"row" , paddingRight:10 , gap:20 , marginTop:10}}>
          <Rate width={47} height={20}/>
        <Free width={62} height={20}/>
        <Min width={74} height={20}/>
        </View>
       </View>
      </View>
      <View style={{ marginTop:10 , justifyContent:"center" }}>
        <Rectangle1234 width={367} height={170}/>
       <View>
         <Text style={{fontSize:20 , fontFamily:"Sen-Regular" , color:"#000" , lineHeight:30}}>Rose Garden Restaurant</Text>
        <Text  style={{fontSize:14 , fontFamily:"Sen-Regular" , color:"#ada5a5" , lineHeight:20}}>Burger - Chiken - Riche - Wings</Text>
        <View style={{flexDirection:"row" , paddingRight:10 , gap:20 , marginTop:10}}>
          <Rate width={47} height={20}/>
        <Free width={62} height={20}/>
        <Min width={74} height={20}/>
        </View>
       </View>
      </View>
      <View style={{ marginTop:10 , justifyContent:"center" }}>
        <Rectangle1234 width={367} height={170}/>
       <View>
         <Text style={{fontSize:20 , fontFamily:"Sen-Regular" , color:"#000" , lineHeight:30}}>Rose Garden Restaurant</Text>
        <Text  style={{fontSize:14 , fontFamily:"Sen-Regular" , color:"#ada5a5" , lineHeight:20}}>Burger - Chiken - Riche - Wings</Text>
        <View style={{flexDirection:"row" , paddingRight:10 , gap:20 , marginTop:10}}>
          <Rate width={47} height={20}/>
        <Free width={62} height={20}/>
        <Min width={74} height={20}/>
        </View>
       </View>
      </View>
      <View style={{ marginTop:10 , justifyContent:"center" }}>
        <Rectangle1234 width={367} height={170}/>
       <View>
         <Text style={{fontSize:20 , fontFamily:"Sen-Regular" , color:"#000" , lineHeight:30}}>Rose Garden Restaurant</Text>
        <Text  style={{fontSize:14 , fontFamily:"Sen-Regular" , color:"#ada5a5" , lineHeight:20}}>Burger - Chiken - Riche - Wings</Text>
        <View style={{flexDirection:"row" , paddingRight:10 , gap:20 , marginTop:10}}>
          <Rate width={47} height={20}/>
        <Free width={62} height={20}/>
        <Min width={74} height={20}/>
        </View>
       </View>
      </View>

      </ScrollView>

    

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15
  },

  text: {
    fontFamily: "Sen-Regular",
    fontSize: 14
  },

  text1: {
    fontFamily: "Sen-Bold",
    fontSize: 14
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 12,
    marginTop: 20,
    paddingHorizontal: 45,
    height: 55,
    justifyContent: "space-between",
  },

  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: "Sen-Regular",
  },

  Search1: {
    width: 15,
    height: 15,
    position: "absolute",
    left: 20
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25
  },
   headerRow1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal:5
  },

  headerText: {
    fontSize: 19,
    fontFamily: "Sen-Regular"
  },

  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    height: 100,
    width: 120,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: 16,
    
  },

  title: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: "Sen-Bold",
    textAlign: "center"
  }

})