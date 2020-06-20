import { StyleSheet } from "react-native";
import React from "react";



const colors = {
  DarkBlue: (opacity = 1) => `rgba(111, 132, 250, ${opacity})`,
  MediumBleu: (opacity = 1) => `rgba(221, 229, 255, ${opacity})`,
  lightGray: (opacity = 1) => `rgba(238, 242,, 255 ${opacity})`,
  DarkGray: (opacity = 1) => `rgba(112, 112, 112, ${opacity})`,
  MediumGray: (opacity = 1) => `rgba(153, 153, 153,${opacity})`,
  White: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  HeaderBackground: `rgba(221, 229, 255, ${Platform.OS === 'ios' ? 1 : 1})`,
}

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',


  },
});






export { globalStyles, colors };
