import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CreateAccountScreen, CreateAccountScreen2, EntryScreen, LoginScreen } from '../Screens'
import { MainAppTabs } from './MainAppTabs'
import { authStackHeader } from '../Styles'

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={authStackHeader}>
            <Stack.Screen name="EntryScreen" component={EntryScreen} />
            <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
            <Stack.Screen name="CreateAccountScreen2" component={CreateAccountScreen2} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="MainAppTabs" component={MainAppTabs} />
        </Stack.Navigator>
    );
}

export { AuthStack }