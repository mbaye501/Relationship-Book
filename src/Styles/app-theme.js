import { StyleSheet } from "react-native";

const colors = {
  DarkBlue: (opacity = 1) => `rgba(111, 132, 250, ${opacity})`,
  MediumBleu: (opacity = 1) => `rgba(221, 229, 255, ${opacity})`,
  lightGray: (opacity = 1) => `rgba(238, 242,255, ${opacity})`,
  DarkGray: (opacity = 1) => `rgba(112, 112, 112, ${opacity})`,
  MediumGray: (opacity = 1) => `rgba(153, 153, 153,${opacity})`,
  White: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  HeaderBackground: `rgba(221, 229, 255, ${Platform.OS === 'ios' ? 1 : 1})`,
}
const font = {
  header: 'DancingScript_700Bold',
  callToAction: 'Roboto_900Black',
  regular: 'Roboto_400Regular',
  subTitle: 'RobotoSlab_600SemiBold',
  button: 'RobotoSlab_700Bold'

}


const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  textInput: {
    backgroundColor: 'white'
  },
  smallButton: {
    backgroundColor: colors.DarkBlue(),
    borderRadius: 10,
    padding: 5,
    width: 80,
    margin: 20,

  },
  smallButtonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: font.callToAction,
    fontWeight: 'bold',
    fontSize: 20
  },
  MyText: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : 'white',
    borderRadius: 15,
    padding: 10,
    paddingLeft: 20,
    elevation: 1,
    fontFamily: font.regular,
    color: colors.DarkGray(),
    height: 50
  },
  message: {
    fontFamily: font.header,
    textAlign: 'center',
    color: colors.DarkBlue(),
    fontSize: 40,
    fontWeight: '900'
  },
  messageInput: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : 'white',
    borderRadius: 30,
    padding: 10,
    textAlign: 'center',
    elevation: 1,
    fontFamily: font.header,
    color: colors.DarkGray(),
    fontSize: 30
  },
  listItem: {
    backgroundColor: colors.MediumBleu(),
    elevation: 1,

  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    flex: 2
  },
  createAccountButton: {
    height: 65,
    borderRadius: 33,
    justifyContent: 'center',
    backgroundColor: colors.DarkBlue(),
    shadowOpacity: 0,

  },

  createAccountText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: font.button,
    fontSize: 16,
    shadowOpacity: 0

  },

  loginAccountButton: {
    height: 65,
    borderRadius: 33,
    justifyContent: 'center',
    borderColor: colors.DarkBlue(),
    borderWidth: 1,
    shadowOpacity: 0


  },

  inputErrorwrapper: {
    margin: 5
  },

  loginAccountText: {
    textAlign: 'center',
    color: colors.DarkGray(),
    fontFamily: font.button,
    fontSize: 16,
    shadowOpacity: 0

  },

  textInputError: {
    color: 'crimson',
    paddingLeft: 20,
    fontSize: 12

  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : 'white',
    borderRadius: 15,
    padding: 10,
    paddingLeft: 20,
    elevation: 1,
    fontFamily: font.regular,
    color: colors.DarkGray(),
    height: 50
  },
  inputAndroid: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : 'white',
    borderTopLeftRadius: 15, borderTopRightRadius: 15,
    borderBottomLeftRadius: 15, borderBottomRightRadius: 15,
    padding: 10,
    paddingLeft: 20,
    elevation: 1,
    fontFamily: font.regular,
    color: colors.DarkGray(),
    paddingRight: 30, // to ensure the text is never behind the icon,
    height: 50
  },
});

//#region component styling
const authStackHeader = {
  title: 'My Relationship Book',
  headerStyle: {
    backgroundColor: colors.HeaderBackground,
  },
  headerTintColor: colors.DarkGray(),
  headerTitleStyle: {
    fontFamily: font.header,
    fontSize: 26
  },
  headerTitleAlign: 'center',
}

const TabsHeader = {
  headerStyle: {
    backgroundColor: colors.HeaderBackground,
  },
  headerTintColor: colors.DarkGray(),
  headerTitleStyle: {
    fontFamily: font.header,
    fontSize: 30
  },
  headerTitleAlign: 'center',
}
//#endregion


export {
  // base theme elements bulding blocks
  colors, font, globalStyles, pickerSelectStyles,
  // header and tabs styling
  authStackHeader, TabsHeader
};
