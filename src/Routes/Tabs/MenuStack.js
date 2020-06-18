import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuScreen } from '../../Screens'

const Stack = createStackNavigator();

function MenuStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
    );
}

export { MenuStack }