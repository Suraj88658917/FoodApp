import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from "../../assets/image/WhiteBG.svg";
import ProfileImage from "../../assets/image/ProfileImage.svg";
import RedCall from "../../assets/image/RedCall.svg";
import Mute from "../../assets/image/Mute.svg";
import Speaker from "../../assets/image/Speaker.svg";

const CallScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={styles.cardContainer}>
                <Card width={"100%"} height={680} />

                <View style={styles.content}>

                    <View>
                        <ProfileImage width={90} height={90} />
                    </View>

                    <View>
                        <Text style={styles.name}>Robet Fox</Text>

                        <Text style={styles.status}>Connecting.....</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.callBtn}>
                            <RedCall width={90} height={90} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomActions}>

                        <TouchableOpacity style={styles.smallBtn}>
                            <Mute width={49} height={49} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.smallBtn}>
                            <Speaker width={49} height={49} />
                        </TouchableOpacity>

                    </View>

                </View>

            </View>

        </View>
    )
}

export default CallScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#273F55AB"
    },

    cardContainer: {
        position: "absolute",
        width: "100%",
        alignItems: "center",
        marginTop: 440
    },

    content: {
        position: "absolute",
        top: 70,
        alignItems: "center",
        width: "100%"
    },

    name: {
        fontSize: 20,
        fontFamily: "Sen-Bold",
        marginTop: 15,
        color: "#000"
    },

    status: {
        fontSize: 13,
        fontFamily: "Sen-Regular",
        color: "#999",
        marginTop: 5
    },

    callBtn: {
        marginTop: 30
    },

    bottomActions: {
        flexDirection: "row",
        marginTop: 40,
        width: "70%",
        position:"absolute",
        top:190,
        justifyContent:"space-between"
    },

    smallBtn: {
        justifyContent: "center",
        alignItems: "center"
    }

});