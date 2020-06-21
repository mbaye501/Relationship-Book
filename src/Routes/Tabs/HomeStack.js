import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from '../../Screens'
import { TabsHeader } from '../../Styles'

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={TabsHeader}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export { HomeStack }