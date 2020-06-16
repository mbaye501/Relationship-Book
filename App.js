//#region Imports
//#region import react standard libs
import React from "react";
import { Button, Image, Stylesheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
//#endregion
//#region import my modules
import { globalStyles } from "./src/Styles";
import { EntryScreen } from './src/Screens'
//#endregion
//#region import Navigations libs
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//#endregion
//#endregion

//#region functions definition
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//#endregion

function App() {
  return (
    <EntryScreen />
  );
}

export default App;
