import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MessageScreen } from '../../Screens'

const Stack = createStackNavigator();

function MessagesStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Messages" component={MessageScreen} />
        </Stack.Navigator>
    );
}

export { MessagesStack }