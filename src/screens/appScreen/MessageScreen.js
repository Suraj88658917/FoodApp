import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import CardClose from "../../assets/image/CardClose.svg";
import Check from "../../assets/image/Check.svg";
import PinkCircle from "../../assets/image/pinkCircle.svg";
import BlackCircle from "../../assets/image/Blackcircle.svg";
import Smile from "../../assets/image/smile.svg";
import Sendicon from "../../assets/image/Sendicon.svg";

const messages = [
  { id: "1", text: "Are you coming?", time: "8:10 pm", type: "sender" },
  { id: "2", text: "Hey, congratulations for order!", time: "8:11 pm", type: "receiver" },
  { id: "3", text: "Hey Where are you now?", time: "8:12 pm", type: "sender" },
  { id: "4", text: "I'm coming , just wait...", time: "8:13 pm", type: "receiver" },
  { id: "5", text: "Hurry Up, Man", time: "8:14 pm", type: "sender" },
];

const MessageScreen = ({ navigation }) => {

  const renderItem = ({ item }) => {

    const isSender = item.type === "sender";

    return (
      <View style={styles.messageContainer}>

        <Text style={[styles.time, { alignSelf: isSender ? "flex-end" : "flex-start" }]}>
          {item.time}
        </Text>

        <View style={[styles.row, { justifyContent: isSender ? "flex-end" : "flex-start" }]}>

          {!isSender && (
            <BlackCircle width={40} height={40} style={{ marginRight: 8 }} />
          )}

          <View
            style={[
              styles.bubble,
              { backgroundColor: isSender ? "#FF7622" : "#F2F2F2" }
            ]}
          >
            <Text
              style={{
                color: isSender ? "#fff" : "#000",
                fontSize: 15,
                fontFamily: "Sen-Regular",
              }}
            >
              {item.text}
            </Text>
          </View>

          {isSender && (
            <PinkCircle width={40} height={40} style={{ marginLeft: 8 }} />
          )}

        </View>

        {isSender && (
          <View style={styles.checkRow}>
            <Check width={10} height={10} />
          </View>
        )}

      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <CardClose width={45} height={45} />
        </TouchableOpacity>

        <Text style={styles.title}>Robert Fox</Text>

      </View>
      <View>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>

      <View style={styles.inputContainer}>

        <Smile width={20} height={20} />

        <TextInput
          placeholder="Write somethings..."
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TouchableOpacity>
          <Sendicon width={42} height={42} />
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
};

export default MessageScreen;

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
    borderRadius: 21,
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },

  title: {
    fontSize: 16,
    fontFamily: "Sen-Regular",
    color: "#373434"
  },

  messageContainer: {
    marginVertical: 8,
    paddingHorizontal: 15
  },

  time: {
    fontSize: 11,
    color: "#999",
    marginBottom: 4,
  },

  row: {
    flexDirection: "row",
    alignItems: "center"
  },

  bubble: {
    maxWidth: "70%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12
  },

  checkRow: {
    alignItems: "flex-end",
    marginTop: 4,
    position:"absolute",
    top:30,
    left:160
  },

  inputContainer: {
    position: "absolute",
    bottom: 25,
    left: 15,
    right: 15,
    flexDirection: "row",
    backgroundColor: "#F4F4F4",
    borderRadius: 25,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between"
  },

  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Sen-Regular",
    paddingHorizontal: 12
  }

});