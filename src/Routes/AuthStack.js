import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CreatAccountScreen, CreatAccountScreen2, EntryScreen, LoginScreen } from '../Screens'
import { authStackHeader } from '../Styles'

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={authStackHeader}>
            <Stack.Screen name="EntryScreen" component={EntryScreen} />
            <Stack.Screen name="CreateAccountScreen" component={CreatAccountScreen} />
            <Stack.Screen name="CreateAccountScreen2" component={CreatAccountScreen2} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    );
}

export { AuthStack }