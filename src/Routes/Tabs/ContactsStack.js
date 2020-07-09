import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ContactScreen, ContactScreen2, ContactScreen3 } from '../../Screens'
import { TabsHeader } from '../../Styles'
const Stack = createStackNavigator();

function ContactsStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={TabsHeader}>
            <Stack.Screen name="Contacts" component={ContactScreen} />
            <Stack.Screen name="Contacts2" component={ContactScreen2} />
            <Stack.Screen name="Contacts3" component={ContactScreen3} />

        </Stack.Navigator>
    );
}

export { ContactsStack }