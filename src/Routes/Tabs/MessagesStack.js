import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MessageScreen } from '../../Screens'
import { TabsHeader } from '../../Styles'

const Stack = createStackNavigator();

function MessagesStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={TabsHeader}>
            <Stack.Screen name="Messages" component={MessageScreen} />
        </Stack.Navigator>
    );
}

export { MessagesStack }