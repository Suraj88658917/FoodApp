import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Card from "../../assets/image/WhiteBG.svg";
import Back from "../../assets/image/back.svg";
import { storage } from "../../storage/storage";

const VerificationScreen = ({ navigation }) => {

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [email, setEmail] = useState("");

  const inputRefs = useRef([]);

  // Get Email from MMKV
  useEffect(() => {

    const savedEmail = storage.getString("forgotEmail");

    if (savedEmail) {
      setEmail(savedEmail);
    }

  }, []);

  // Timer
  useEffect(() => {

    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);

  }, [timer]);

  // OTP Change
  const handleChange = (text, index) => {

    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }

  };

  // Backspace focus
  const handleKeyPress = (e, index) => {

    if (e.nativeEvent.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }

  };

  // Verify OTP
  const handleVerify = () => {

    const code = otp.join("");

    if (code.length !== 4) {
      alert("Please enter 4 digit code");
      return;
    }

    alert("Code Verified");

    navigation.navigate("LoginScreen");

  };

  // Resend Code
  const resendCode = () => {

    setTimer(60);
    setOtp(["", "", "", ""]);

    alert("Code Resent");

  };

  return (
    <View style={styles.container}>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Back width={18} height={18} />
      </TouchableOpacity>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Verification</Text>
      </View>

      {/* Subtitle with Email */}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
          We have sent a code to your email
        </Text>
      </View>

      <View  style={styles.subtitleContainer1}>
        <Text style={styles.subtitle1}>{email}</Text>
      </View>
      {/* Card */}
      <View style={styles.cardContainer}>

        <Card width={"100%"} height={730} />

        <View style={styles.form}>

          {/* Label + Timer */}
          <View style={styles.row}>

            <Text style={styles.label}>CODE</Text>

            {timer > 0 ? (
              <Text style={styles.timer}>Resend in {timer}s</Text>
            ) : (
              <TouchableOpacity onPress={resendCode}>
                <Text style={styles.resend}>Resend in .50sec</Text>
              </TouchableOpacity>
            )}

          </View>

          {/* OTP Boxes */}
          <View style={styles.otpContainer}>

            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.otpBox}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                textAlign="center"
              />
            ))}

          </View>

          {/* Verify Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleVerify}
          >
            <Text style={styles.buttonText}>VERIFY</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#050222",
  },

  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5
  },

  titleContainer: {
    position: "absolute",
    top: 118,
    left: 119,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Sen-Bold"
  },

  subtitleContainer: {
    position: "absolute",
    top: 159,
    left: 70
  },
  subtitleContainer1: {
    position: "absolute",
    top: 187,
    left: 109,
    justifyContent:"center",
    width:200,
    alignItems:"center"
  },

  subtitle: {
    color: "#c4b7b7",
    fontSize: 16,
    fontFamily: "Sen-Regular",
    lineHeight: 26
  },
   subtitle1: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Sen-Bold",
    lineHeight: 26
  },

  cardContainer: {
    position: "absolute",
    top: 230,
    width: "100%",
    alignItems: "center"
  },

  form: {
    position: "absolute",
    width: "100%",
    top: 60,
    paddingHorizontal:18
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },

  label: {
    fontSize: 13,
    color: "#32343E",
    fontFamily: "Sen-Regular"
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  otpBox: {
    width: 60,
    height: 60,
    backgroundColor: "#F0F5FA",
    borderRadius: 12,
    fontSize: 22,
    textAlign: "center"
  },

  timer: {
    color: "#888",
    fontSize: 14
  },

  resend: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Sen-Bold"
  },

  button: {
    backgroundColor: "#FF7622",
    marginTop: 40,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width:"100%"
  
  },

  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Sen-Bold"
  }

});