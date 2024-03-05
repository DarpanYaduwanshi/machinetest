import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux';
import  Futtor from "../assetes/component/futtor";
const P2P = ({navigation}) => {
 
    const values = useSelector(state => state.values);
    console.log('values',values)

    return (
        <View style={Styles.mainView}>
            <ScrollView>
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
                            <Image source={require('../assetes/images/Vector(2).png')} style={Styles.headerImg} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 12, color: "#244C87", marginRight: 5 }}>0xD23e....fa1</Text>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Ellipse15.png')} style={{ height: 30, width: 30, resizeMode: "contain" }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Vector3.png')} style={Styles.headerImg} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ flexDirection: "row", padding: 10 }}>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={{ color: "#fff", fontSize: 16, alignSelf: "center" }}>P2P Trade</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.Expressbtn}>
                        <Text style={{ color: "#fff", fontSize: 16, alignSelf: "center" }}>Express</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.filterView} >
                    <Text style={{ color: "#244C87", fontSize: 16, width: "30%", }}>Filters</Text>
                    <Image source={require('../assetes/images/Vector5.png')} style={{ height: 20, width: 20, resizeMode: "contain" }} />
                </View>
                {values.map((item)=>
                <View style={{ backgroundColor: "#244C8733", padding: 10, marginTop: 20 }}>
                    <View style={Styles.boxView}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity style={{ backgroundColor: "#244C87", width: 60, alignItems: "center" }}><Text style={{ fontSize: 16, fontWeight: "500", color: "#ffF" }}>Buy</Text></TouchableOpacity>
                            <Text style={{ fontSize: 10, color: "#244C87" }}> <Text style={{ color: "#244C8733", fontSize: 10 }}>Total Orders</Text> 105 v  | 85.50%</Text>
                        </View>
                        <View style={Styles.peymentView}>
                            <View>
                                <Text style={{ fontSize: 11, color: "#FFF", }}>Price</Text>
                                <Text style={{ fontSize: 10, color: "#244C87", marginTop: 5 }}>INR<Text style={{ fontSize: 20, fontWeight: "bold", color: "#244C87" }}>{item.usd}</Text></Text>
                                <Text style={{ fontSize: 12, fontWeight: "bold", color: "#244C87", marginTop: 5 }}><Text style={{ color: "#244C8733", fontSize: 12 }}>Quantity</Text>{item.USDFX} USDFx</Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image source={require('../assetes/images/Ellipse15.png')} style={{ height: 30, width: 30, resizeMode: "contain" }} />
                                    <Text style={{ fontSize: 14, color: "#244C87", marginLeft: 5 }}>Ramesh Sharma</Text>
                                    <Image source={require('../assetes/images/Group157.png')} style={{ height: 23, width: 23, resizeMode: "contain", marginLeft: 5 }} />
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 5 }}>
                                    <Image source={require('../assetes/images/Vector4.png')} style={Styles.strImg} />
                                    <Image source={require('../assetes/images/Vector4.png')} style={Styles.strImg} />
                                    <Image source={require('../assetes/images/Vector4.png')} style={Styles.strImg} />
                                    <Text style={{ fontSize: 12, color: "#244C87", marginLeft: 5 }}>(125)</Text>
                                </View>
                                <TouchableOpacity style={Styles.buybtn}><Text style={{ fontSize: 16, fontWeight: "500", color: "#ffF" }}>Buy</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('../assetes/images/Ellipse17.png')} style={Styles.bankTranserText} />
                            <Text style={Styles.backText}>USDT</Text>
                            <Image source={require('../assetes/images/Ellipse18.png')} style={Styles.bankTranserText} />
                            <Text style={Styles.backText}>BANK TRANSFER</Text>
                            <Image source={require('../assetes/images/Ellipse19.png')} style={Styles.bankTranserText} />
                            <Text style={Styles.backText}>UPI</Text>
                        </View>
                    </View>

                </View>
                )}
              
            </ScrollView>
            <Futtor/>
        </View>
    )
}
export default P2P;
const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#D0E0F3"
    },
    btn: {
        backgroundColor: "#244C87",
        width: "50%",
        height: 50,
        justifyContent: "center"

    },
    Expressbtn: {
        marginLeft: 3,
        backgroundColor: "#244C8733",
        width: "48%",
        height: 50,
        justifyContent: "center"
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center"
    },
    headerImg: {
        height: 20,
        width: 30,
        resizeMode: "contain"
    },
    peymentView: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    }
    ,
    buybtn: {
        backgroundColor: "#244C87",
        width: 110,
        height: 40,
        alignItems: "center",
        borderRadius: 5,
        alignSelf: "flex-end",
        justifyContent: "center",
        marginTop: 5

    },
    strImg: {
        height: 15, width: 15, resizeMode: "contain"
    },
    boxView: {
        justifyContent: "space-between"
    },
    backText: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#244C87",
        marginLeft: 5
    },
    filterView: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: '60%',
        alignSelf: "center"
    },
    bankTranserText:{
        height: 15,
        width: 15, 
        resizeMode: "contain",
        marginLeft:10
    },
    bottomView: {
        backgroundColor: "#244C87",
        height: 50,
        flexDirection: "row"
    },
    bottomTextView:{
        marginLeft: 30 
    },
    bottomHeadingView:{
        color: "#fff", 
        fontSize: 8,
         marginTop: 5 
    },
    bottomBuyText:{
        color: "#fff",
         fontSize: 18,
          fontWeight: "bold"
    }
    
})