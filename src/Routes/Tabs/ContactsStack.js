import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ContactScreen } from '../../Screens'
import { TabsHeader } from '../../Styles'
const Stack = createStackNavigator();

function ContactsStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={TabsHeader}>
            <Stack.Screen name="Contacts" component={ContactScreen} />
        </Stack.Navigator>
    );
}

export { ContactsStack }