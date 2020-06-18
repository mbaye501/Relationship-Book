import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from '../../Screens'

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export { HomeStack }