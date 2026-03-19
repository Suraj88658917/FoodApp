import { StyleSheet, View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

import NABoox from "../../assets/image/NABoox.svg";
import BlackArrow from "../../assets/image/BlackArrow.svg";
import Mark1 from "../../assets/image/mark.svg";
import Location from "../../assets/image/Location.svg";

const ADDaddress = ({ navigation  , route }) => {

    console.log("AddaddressScreen Loaded")

    const [address, setAddress] = useState("");
    const [street, setStreet] = useState("");
    const [postCode, setPostCode] = useState("");
    const [apartment, setApartment] = useState("");
    const [label, setLabel] = useState(0);

    const handleSave = () => {

        if (address.trim() === "" || street.trim() === "" || postCode.trim() === "") {
            alert("Please fill all required fields");
            return;
        }

        console.log("Address:", address);
        console.log("Street:", street);
        console.log("Post Code:", postCode);
        console.log("Apartment:", apartment);
        console.log("Label:", label);

          const newAddress = {
    address,
    street,
    postCode,
    apartment,
    label,
    editIndex: route?.params?.editIndex ?? null  
 };

        navigation.navigate("AddressScreen", newAddress);
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <BlackArrow width={48} height={48} />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.imageWrapper}>
                    <NABoox width={399} height={310} />
                </View>

                <View style={styles.markWrapper}>
                    <Mark1 width={111} height={61} />
                </View>

                <View style={styles.form}>

                    <Text style={styles.label}>ADDRESS</Text>
                    <View style={styles.inputBox}>
                        <Location width={16} height={16} />
                        <TextInput
                            placeholder="Enter Your Address"
                            value={address}
                            onChangeText={setAddress}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.label}>STREET</Text>
                            <TextInput
                                placeholder="Enter Street"
                                value={street}
                                onChangeText={setStreet}
                                style={styles.input}
                            />
                        </View>

                        <View style={{ width: 15 }} />

                        <View style={{ flex: 1 }}>
                            <Text style={styles.label}>POST CODE</Text>
                            <TextInput
                                placeholder="Enter Post Code"
                                value={postCode}
                                onChangeText={setPostCode}
                                style={styles.input}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.label}>APARTMENT</Text>
                        <TextInput
                            placeholder="Enter Apartment"
                            value={apartment}
                            onChangeText={setApartment}
                            style={styles.input}
                        />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.label}>LABEL AS</Text>

                        <View style={styles.labelRow}>
                            <TouchableOpacity
                                style={[styles.labelBtn, label === "Home" && styles.active]}
                                onPress={() => setLabel("Home")}
                            >
                                <Text style={[styles.labelText, label === "Home" && styles.activeText]}>Home</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.labelBtn, label === "Work" && styles.active]}
                                onPress={() => setLabel("Work")}
                            >
                                <Text style={[styles.labelText, label === "Work" && styles.activeText]}>Work</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.labelBtn, label === "Other" && styles.active]}
                                onPress={() => setLabel("Other")}
                            >
                                <Text style={[styles.labelText, label === "Other" && styles.activeText]}>Other</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                        <Text style={styles.saveText}>SAVE LOCATION</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </View>
    )
}

export default ADDaddress

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    header: {
        position: "absolute",
        top: 60,
        left: 20,
        zIndex: 10
    },

    backButton: {
        width: 45,
        height: 45,
        borderRadius: 22,
        backgroundColor: "#ECF0F4",
        justifyContent: "center",
        alignItems: "center"
    },

    imageWrapper: {
        alignItems: "center",
    },

    markWrapper: {
        position: "absolute",
        top: 150,
        left: 150
    },

    form: {
        paddingHorizontal: 25,
        marginTop: 20
    },

    label: {
        fontSize: 14,
        fontFamily: "Sen-Regular",
        marginBottom: 8
    },

    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F0F5FA",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20
    },

    input: {
        flex: 1,
        paddingVertical: 18,
        fontFamily: "Sen-Regular",
        backgroundColor: "#F0F5FA",
        borderRadius: 10,
        paddingHorizontal: 10,
    },

    row: {
        flexDirection: "row"
    },

    labelRow: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 25
    },

    labelBtn: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginRight: 10
    },

    active: {
        backgroundColor: "#FF7622",
        borderColor: "#FF7622"
    },

    labelText: {
        fontSize: 13,
        fontFamily: "Sen-Regular"
    },

    activeText: {
        color: "#fff"
    },

    saveBtn: {
        backgroundColor: "#FF7622",
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 30
    },

    saveText: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Sen-Bold"
    }

});