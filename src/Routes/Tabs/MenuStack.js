import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuScreen, ProfileScreen, SecurityScreen } from '../../Screens'
import { TabsHeader } from '../../Styles'

const Stack = createStackNavigator();

function MenuStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={TabsHeader}>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Security" component={SecurityScreen} />


        </Stack.Navigator>
    );
}

export { MenuStack }