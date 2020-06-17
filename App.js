//#region Imports

//#region import react standard libs
import React from "react";
//#endregion

//#region import my modules
import { colors } from './src/Styles'
import { Incon } from './src/Components'
import { ContactsStack, HomeStack, Menu, MessagesStack } from './src/Routes'
//#endregion

//#region import Navigations libs
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//#endregion

//#endregion

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <Incon iconName={route.name} size={size} color={color} focused={focused} />
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.DarkBlue,
          inactiveTintColor: colors.DarkGray,
        }}
      >

        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Messages" component={MessagesStack} />
        <Tab.Screen name="Contacts" component={ContactsStack} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>);
}

export default App;
