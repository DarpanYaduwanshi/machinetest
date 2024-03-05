import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setValues } from '../redux/action/valueActions';
import { View,Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import MyDateTimePicker from '../assetes/component/dateTimePicker'
import Futtor from '../assetes/component/futtor';
const USDF = ({ navigation }) => {
    const dispatch = useDispatch();
    const [usd, setUsd] = useState('');

    const values = {
        usd: usd,
        USDFX: usd * 0.85,
        date: '2024-03-05'
    }

    const createOrder = () => {
        navigation.navigate("P2P")
        dispatch(setValues(values));

    }
    return (
        <View style={Styles.mainView}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={Styles.headerView}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Group129.png')} style={Styles.headerImg} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Logo.png')} style={Styles.headerImg} />
                        </TouchableOpacity>


                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Vector(2).png')} style={Styles.natificationImg} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 12, color: "#244C87", marginRight: 5 }}>0xD23e....fa1</Text>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Ellipse15.png')} style={{ height: 30, width: 30, resizeMode: "contain" }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Vector3.png')} style={Styles.natificationImg} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={Styles.paymentView}>
                    <Text style={Styles.text}>Buy USDFx</Text>
                    <View style={{ padding: 15, }}>
                        <View style={{ marginTop: 5 }}>
                            <Text style={Styles.text1}>I want to pay</Text>
                            <View style={Styles.InputView}>
                                <TextInput
                                    style={Styles.textInput}
                                    placeholderTextColor={"#244C87"}
                                    placeholder='$'
                                    fontSize={20}
                                    fontWeight={'bold'}
                                    onChangeText={text => setUsd(text)}
                                    value={usd}
                                />
                                <View style={Styles.imgView}>
                                    <Image source={require('../assetes/images/Group74.png')} style={Styles.imageTag} />
                                    <Text style={Styles.imgtext}>USD</Text>
                                </View>
                                <TouchableOpacity style={Styles.arrowbtn}>
                                    <Image source={require('../assetes/images/arrow_drop_down.png')} style={Styles.arrowimgTag} />

                                </TouchableOpacity>

                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={Styles.text1}>I will Receive</Text>
                            <View style={Styles.InputView}>
                                <Text style={Styles.get$}>{usd * 0.85}</Text>
                                <View style={Styles.imgView}>
                                    <Image source={require('../assetes/images/Group74.png')} style={Styles.imageTag} />
                                    <Text style={Styles.imgtext}>USDfx</Text>
                                </View>
                                <TouchableOpacity style={Styles.arrowbtn}>
                                    <Image source={require('../assetes/images/arrow_drop_down.png')} style={Styles.arrowimgTag} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={Styles.text1}>Order Valid Till</Text>
                            <MyDateTimePicker />
                        </View>
                    </View>
                    <TouchableOpacity style={Styles.orderBtn} onPress={() => createOrder()}>
                        <Image source={require('../assetes/images/order_approve.png')} style={Styles.ordimg} />
                        <Text style={Styles.oderbtntext}>Create Order</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 10 }}>
                    <Image source={require('../assetes/images/Vector.png')} style={{ height: 20, width: 20, resizeMode: "contain" }} />
                    <Text style={Styles.tnctext}>Boost your confidence in trading! Elevate your{'\n'} investment journey with guaranteed stability{'\n'}and convenience.</Text>
                </View>
            </ScrollView>
            <Futtor />
        </View>
    )
}
export default USDF;
const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#D0E0F3"
    },
    paymentView: {
        backgroundColor: "#244C87",
    },
    text: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "500",
        marginLeft: 15,
        marginTop: 5
    },
    text1: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500"
    },
    textInput: {
        width: "69%",
        // alignSelf: "center"
    },
    InputView: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignContent: "center",


    },
    get$: {
        width: "69 %",
        fontSize: 20,
        color: "#244C87",
        fontWeight: 'bold',
        marginTop: 10
    },
    imageTag: {
        height: 30,
        width: 30,
        resizeMode: "contain",
    },

    imgView: {
        backgroundColor: "#D0E0F3",
        flexDirection: "row",
        width: '20%',
        marginVertical: 10,
        alignItems: "center",
    },
    imgtext: {
        color: "#244C87",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 5

    },
    arrowimgTag: {
        height: 30,
        resizeMode: "contain",
    },
    arrowbtn: {
        backgroundColor: "#D0E0F3",
        marginLeft: 5,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    orderBtn: {
        backgroundColor: "#D0E0F3",
        height: 40,
        marginBottom: 20,
        width: "93%",
        alignSelf: "center",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    ordimg: {
        height: 30,
        width: 30,
        resizeMode: "contain",

    },
    oderbtntext: {
        color: "#244C87",
        marginLeft: 5,
        fontSize: 16,
        fontWeight: "bold"

    },
    datePicker: {
        width: "100%",
        backgroundColor: '#fff'
    },
    dateInput: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    dateText: {
        fontSize: 16,
    },
    placeholderText: {
        fontSize: 16,
    },
    tnctext: {
        color: "#244C87", fontSize: 16, marginLeft: 5
    },
    bottomView: {
        backgroundColor: "#244C87",
        height: 50,
        flexDirection: "row"
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
    },
    headerImg: {
        height: 25,
        width: 30,
        resizeMode: "contain",
        marginRight: 10,
    },
    natificationImg: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        marginTop: 5,
        marginLeft: 10
    },

})