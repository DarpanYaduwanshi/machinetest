import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import USDF from "../screens/BuyUSDFx";
import P2P from "../screens/P2P";
import Dashbord_screen from '../screens/deshBord';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dashbord" component={Dashbord_screen} options={{ headerShown: false }} />
                <Stack.Screen name="USDF" component={USDF} options={{ headerShown: false }} />
                <Stack.Screen name="P2P" component={P2P} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;