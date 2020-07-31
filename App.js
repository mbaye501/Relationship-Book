import Amplify from "aws-amplify";
import config from "./aws-exports";
import React from "react";
import { Alert } from 'react-native'
import { AppLoading } from "expo";
import { useFonts, Merienda_400Regular, Merienda_700Bold, } from "@expo-google-fonts/merienda";
import { Roboto_100Thin, Roboto_400Regular, Roboto_500Medium, Roboto_900Black, } from "@expo-google-fonts/roboto";
import { DancingScript_700Bold } from "@expo-google-fonts/dancing-script";
import { RobotoSlab_500Medium, RobotoSlab_600SemiBold, RobotoSlab_700Bold } from "@expo-google-fonts/roboto-slab";
import { colors } from "./src/Styles";
import { MainAppTabs, AuthStack } from "./src/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './src/Components/AuthContext'
import { Auth } from "aws-amplify";


const state = {}

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

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);


  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':

          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );





  const authContext = React.useMemo(
    () => ({
      signIn: async function ({ email, password }) {
        try {
          const user = await Auth.signIn(email, password)
          try {
            await AsyncStorage.setItem('userToken', action.token);
          } catch (e) {
          }
          dispatch({ type: 'SIGN_IN', token: user.signInUserSession.accessToken.jwtToken });
        } catch (error) { Alert.alert(error.message) }
      },
      signOut: () => {
        Auth.signOut()
        dispatch({ type: 'SIGN_OUT' })
      },

    }),
    []
  );

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

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? <AuthStack /> : <MainAppTabs />}
      </NavigationContainer>
    </AuthContext.Provider>

  );
}

export default App;
