import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routeNames from 'navigation/routeNames';

import Garage from "screens/Garage";
import CarDetail from "screens/CarDetail";

const Stack = createNativeStackNavigator();

function CarsNavigator() {
    return (
        <Stack.Navigator initialRouteName={routeNames.Garage}>
            <Stack.Screen name={routeNames.Garage} component={Garage} options={{ headerShown: false }} />
            <Stack.Screen name={routeNames.CarDetail} component={CarDetail}  options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default CarsNavigator;