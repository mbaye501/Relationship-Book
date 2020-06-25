import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, HomeScreen2, SendToScreen } from '../../Screens'
import { TabsHeader } from '../../Styles'

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={TabsHeader}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Home2" component={HomeScreen2} />
            <Stack.Screen name="SendToScreen" component={SendToScreen} />

        </Stack.Navigator>
    );
}

export { HomeStack }