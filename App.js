//#region Imports

//#region import react standard libs
import React from "react";
import { AppLoading } from 'expo';
import { useFonts, Merienda_400Regular, Merienda_700Bold } from '@expo-google-fonts/merienda';
import { Courgette_400Regular } from '@expo-google-fonts/courgette';
import { KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script';
import { Tangerine_400Regular, Tangerine_700Bold } from '@expo-google-fonts/tangerine';
//#endregion

//#region import my modules
import { MainAppTabs, AuthStack } from './src/Routes'

//#endregion

//#region import Navigations libs
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//#endregion

//#endregion

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
let isSignedIn = true


function App() {
  //#region load fonts
  let [fontsLoaded] = useFonts({
    Merienda_400Regular,
    Merienda_700Bold,
    Courgette_400Regular,
    KaushanScript_400Regular,
    Tangerine_400Regular,
    Tangerine_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //#endregion

  return (
    <NavigationContainer>
      {isSignedIn ? <MainAppTabs /> : <AuthStack />}
    </NavigationContainer>);
}

export default App;
