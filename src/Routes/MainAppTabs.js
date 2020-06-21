//#region import react standard libs
import React from "react";
//#endregion

//#region import my modules
import { colors } from '../Styles'
import { Incon } from '../Components'
import { ContactsStack, HomeStack, MessagesStack, MenuStack } from './Tabs'
//#endregion

//#region import Navigations libs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//#endregion

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

        </Tab.Navigator>

    );
}

export { MainAppTabs }