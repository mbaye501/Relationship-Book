import Amplify from "aws-amplify";
import config from "./aws-exports";
import React from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Merienda_400Regular,
  Merienda_700Bold,
} from "@expo-google-fonts/merienda";
import {
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { DancingScript_700Bold } from "@expo-google-fonts/dancing-script";
import {
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
} from "@expo-google-fonts/roboto-slab";
import { colors } from "./src/Styles";
import { MainAppTabs, AuthStack } from "./src/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(config);
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const MyTheme = {
  dark: false,
  colors: {
    text: colors.DarkGray(),
  },
};
let isSignedIn = false;

function App() {
  //#region load fonts
  let [fontsLoaded] = useFonts({
    DancingScript_700Bold,

    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_900Black,

    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //#endregion

  return (
    <NavigationContainer>
      {isSignedIn ? <MainAppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
