import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const colors = {
  DarkBlue: '#6F84FA',
  MediumBleu: (opacity = 1) => `rgba(221, 229, 255, ${opacity})`,
  lightGrayL: '#EEF2FF',
  DarkGray: '#707070',
  MediumGray: '#999999'



}


export { globalStyles, colors };
