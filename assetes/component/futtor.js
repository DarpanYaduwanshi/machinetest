import { useState } from 'react';
import { ImageBackground, Modal, StyleSheet, TouchableOpacity, Vibration } from 'react-native'
import { Image, Text, View } from 'react-native-animatable'
const Futtor = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.logoView}>
              <Image source={require('../images/rupee.png')} style={{
                    height: 25,
                    width: 20,
                    resizeMode: 'contain'
                }} />
                <TouchableOpacity>
                    <Image
                        source={require('../images/arrow_drop_down.png')}
                        style={{
                            height: 15,
                            width: 15,
                            resizeMode: 'contain'
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{marginLeft:70}}>
                <Text style={styles.priceText}>
                    USDFx Exchange Price  (1 USDFx)
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    width: "85%",
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 10
                    }}>
                        <Text style={styles.buyTxt} >
                            BUY
                        </Text>
                        <Text style={styles.buyPrice}>88.90 INR</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 10
                    }}>
                        <Text style={styles.SellTxt} >
                            SELL
                        </Text>
                        <Text style={styles.buyPrice}>88.90 INR</Text>
                    </View>
                </View>


            </View>

        </View>
    )
}
export default Futtor
const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "#244C87",
        width: '100%',
        flexDirection: "row",
        position: 'relative'

    },
    logoView: {
        height: 60,
        width: 60,
        borderRadius:30,
        resizeMode: "contain",
        bottom: 5,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        position:'absolute',
         bottom:20,
        backgroundColor:"#D0E0F3"

    },
    priceText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: '500',
        marginTop: 5

    },
    buyTxt: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "500",

    },
    SellTxt:{
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "500",
        marginLeft:20

    },
    buyPrice: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft:10
    },
    option: {
        height: 5,
        width: 10,
        resizeMode: "contain"
    }
})