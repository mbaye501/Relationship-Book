import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, alert } from "react-native";
import { SocialIcon } from "react-native-elements";
import { colors, font, globalStyles } from "../../Styles";
import { BackgroundFrame, MyCard, HStack, Spacer, MyTextInput, MyButton } from "../../Components";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function CreateAccountScreen({ navigation }) {
  return (
    <BackgroundFrame>




      <KeyboardAwareScrollView style={{ flex: 1 }}>
        {/* Top text view */}
        <View style={styles.topContainer}>
          <Text style={styles.signUpText}>Sign up with</Text>
          {/*Social Icons View*/}
          <View style={styles.icons}>
            <SocialIcon raised={true} type="facebook" />
            <SocialIcon raised={true} type="instagram" />
            <SocialIcon raised={true} type="linkedin" />
            <SocialIcon raised={true} type="twitter" />
            <SocialIcon raised={true} type="google" />
          </View>
          {/* Texts  */}
          <Text style={{ ...styles.regularText, marginBottom: 0 }}> Or </Text>
          {/* email & password card */}
        </View>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={(values) => {
            navigation.navigate('CreateAccountScreen2', values)
          }}
        >
          {(props) => (
            <View style={{ flex: 1 }}>
              <MyCard
                title={"Create Account"}
                containerStyle={{ minHeight: 300, maxHeight: 300 }}
              >
                <TextInput
                  value={props.values.email}
                  onChangeText={props.handleChange("email")}
                  placeholder="Please Enter Email"
                  autoCompleteType={"email"}
                  autoCapitalize={"none"}
                  style={globalStyles.MyText}
                />

                <TextInput
                  value={props.values.password}
                  onChangeText={props.handleChange("password")}
                  placeholder="Please Enter Password"
                  autoCompleteType={"password"}
                  secureTextEntry={true}
                  style={globalStyles.MyText}
                />

                <TextInput
                  value={props.values.confirmPassword}
                  onChangeText={props.handleChange("confirmPassword")}
                  placeholder="Confirm Password"
                  autoCompleteType={"password"}
                  secureTextEntry={true}
                  style={globalStyles.MyText}
                />
              </MyCard>

              <HStack style={{ marginBottom: 10, flex: 1 }}>
                <Spacer />
                <MyButton onPress={props.handleSubmit} text="Next" />
              </HStack>


            </View>
          )}
        </Formik>

      </KeyboardAwareScrollView>

    </BackgroundFrame>
  );
}

styles = StyleSheet.create({
  signUpText: {
    color: colors.DarkGray(),
    fontFamily: font.subTitle,
    fontSize: 20,
    textAlign: "center",
  },

  icons: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  regularText: {
    color: colors.DarkGray(),
    fontFamily: font.subTitle,
    fontSize: 16,
    textAlign: "center",
  },

  topContainer: {
    marginTop: 20,
  },
});

export { CreateAccountScreen };
