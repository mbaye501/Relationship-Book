import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ContactScreen } from '../../Screens'

const Stack = createStackNavigator();

function ContactsStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contacts" component={ContactScreen} />
        </Stack.Navigator>
    );
}

export { ContactsStack }