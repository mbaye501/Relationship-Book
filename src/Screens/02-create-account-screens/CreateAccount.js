import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, alert } from "react-native";
import { SocialIcon } from "react-native-elements";
import { colors, font, globalStyles } from "../../Styles";
import { BackgroundFrame, MyCard, HStack, Spacer, MyTextInput, MyButton } from "../../Components";
import { Formik } from "formik";
import KeyboardSpacer from 'react-native-keyboard-spacer';

function CreateAccountScreen({ navigation }) {
  return (
    <BackgroundFrame>

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={30}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
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
              <Text style={{ ...styles.regularText, marginBottom: 10 }}> Or </Text>
              {/* email & password card */}
            </View>
            <Formik
              initialValues={{ email: "", password: "", confirmPassword: "" }}
              onSubmit={(values) => {
                console.log(values)
              }}
            >
              {(props) => (
                <View style={{ flex: 1 }}>
                  <MyCard
                    title={"Create Account"}
                    space={1}
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
                  <HStack>
                    <Spacer />
                    <MyButton onPress={() => { console.log('hey') }} text="Next" />
                  </HStack>


                </View>
              )}
            </Formik>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
    paddingTop: 20,
  },
});

export { CreateAccountScreen };
