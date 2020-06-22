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
    margin: 20
  },
  smallButtonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: font.callToAction,
    fontWeight: 'bold',
    fontSize: 20
  }


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
  colors, font, globalStyles,
  // header and tabs styling
  authStackHeader, TabsHeader
};
