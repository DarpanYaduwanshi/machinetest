import { FlatList, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Image, Text, View } from 'react-native-animatable'
export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;
import Futtor from '../assetes/component/futtor';
const  dataTitle =[
    {
         title:"Learn about Partner program"
    },
    {
        title:"Learn about USDFx"
    },
    {
        title:"Learn USDFx integration with Business"
    },

]
const Dashbord_screen=({navigation})=>{
    const next =()=>{
navigation.navigate('USDF')
    }
    const gotoDrow =()=>{
        navigation.navigate('P2P')
    }
    return(
        <View style={styles.mainView}>
             <View style={styles.headerView}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Group129.png')} style={styles.headerImg} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Logo.png')} style={styles.headerImg} />
                        </TouchableOpacity>


                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Vector(2).png')} style={styles.natificationImg} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 14, color: "#244C87", marginHorizontal:8,marginTop:5}}>0xD23e....fa1</Text>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Ellipse15.png')} style={{ height: 30, width: 30, resizeMode: "contain" }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assetes/images/Vector3.png')} style={styles.natificationImg} />
                        </TouchableOpacity>

                    </View>
                </View>
            <ScrollView>
                <View style={styles.balanceVIew}>
                    <Text style={ styles.titileTxt}>
                    USDFx Balance
                    </Text>
                    <Text style={styles.Text}>
                    0.00
                    </Text>
                </View>
                <Text style={styles.tradeTxt}>Trade at your fingertips </Text>
                <View style={styles.bsView}>
                    <TouchableOpacity style={styles.buyBtn} onPress={next}>
                    <Image source={require('../assetes/images/Vector.png')} style={styles.monyImg}/>
                  <Text style={styles.butText}>
                  Buy USDFx
                  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buyBtn} onPress={gotoDrow}>
                    <Image source={require('../assetes/images/Vector.png')} style={styles.monyImg}/>
                  <Text style={styles.butText}>
                  P2P Trade
                  </Text>
                  </TouchableOpacity>
                  
                </View>
                <Text style={styles.tradeTxt}>Know USDFx Ecosystem </Text>
                <FlatList
                    data={dataTitle}
                    renderItem={({ item }) => 
                    <View  style={styles.ecoView}>
                        <Text  style={styles.ecoTxt}>{item.title}</Text>
                     </View>}
                />
                  <Text style={styles.tradeTxt}>Important Links</Text>
                <View style={styles.bsView}>
                    <TouchableOpacity style={styles.buyBtn}>
                    <Image source={require('../assetes/images/Vector.png')} style={styles.monyImg}/>
                  <Text style={styles.butText}>
                  Partner App
                  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buyBtn}>
                    <Image source={require('../assetes/images/Vector.png')} style={styles.monyImg}/>
                  <Text style={styles.butText}>
                  Contact us
                  </Text>
                  </TouchableOpacity>
                  
                </View>
            </ScrollView>
            <Futtor/>
        </View>
    )
}
export default Dashbord_screen;
const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:"#D0E0F3"
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
        marginRight:10,
    },
    natificationImg: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        marginTop:5,
        marginLeft:10
    },
    balanceVIew:{
        backgroundColor:"#244C87",
        padding:15,
        flexDirection:"row",
        justifyContent:'space-between',
        marginHorizontal:10,
        alignItems:"center",
        marginTop:10
    },
    titileTxt:{
        color:"#FFFFFF",
        fontSize:24,
        fontWeight:"bold"
    },
    Text:{
        color:"#FFFFFF",
        fontSize:32,
        fontWeight:"bold"
    },
    tradeTxt:{
        color:"#244C87",
        fontSize:18, 
        marginHorizontal:width/20,
        marginTop:20,
        fontWeight:"bold",
    },
    bsView:{
        flexDirection:"row",
        marginHorizontal:22,
        marginTop:10,
        justifyContent:"space-between",
       
    },
    buyBtn:{
        padding:15,
        width:width/2.5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#8CB9BD"
    },
    monyImg:{
        height:24,
        width:25,
        borderRadius:15,
        resizeMode:"center",
        backgroundColor:"#244C87",
        tintColor: '#D0E0F3'

    },
    butText:{
        color:"#244C87",
        fontSize:20,
        fontWeight:'400', 
        marginLeft:5
    },
    ecoView:{
        backgroundColor:"#244C87",
        marginHorizontal:20,
        marginTop:15,
        padding:10
    },
    ecoTxt:{
        color:"#FFFFFF",
        fontSize:14,
    }
})