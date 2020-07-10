import React from "react";
import { colors } from '../Styles'
import { Incon } from '../Components'
import { ContactsStack, HomeStack, MessagesStack, MenuStack } from './Tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MainAppTabs({ navigation, route }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return <Incon iconName={route.name} size={size} color={color} focused={focused} />
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.DarkBlue(),
                inactiveTintColor: colors.DarkGray(),
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Messages" component={MessagesStack} />
            <Tab.Screen name="Contacts" component={ContactsStack} />
            <Tab.Screen name="Menu" component={MenuStack} />

        </Tab.Navigator>);
}

export { MainAppTabs }