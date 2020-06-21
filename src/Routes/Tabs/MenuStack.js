import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuScreen } from '../../Screens'
import { TabsHeader } from '../../Styles'

const Stack = createStackNavigator();

function MenuStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={TabsHeader}>
            <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
    );
}

export { MenuStack }