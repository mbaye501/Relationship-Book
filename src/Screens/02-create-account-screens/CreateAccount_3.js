import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, Alert } from "react-native";
import { SocialIcon, Card, Button } from "react-native-elements";
import { globalStyles, colors, font, pickerSelectStyles } from "../../Styles";
import { BackgroundFrame, MyCard, HStack, VStack, Spacer, MyTextInput, MyText, MyButton } from "../../Components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import { Auth } from "aws-amplify";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from "formik";
import * as yup from 'yup'
const validationSchema = yup.object({

  email: yup
    .string()
    .label('Email')
    .required()
    .email(),
  code: yup
    .number()
    .required()
})

function CreateAccountScreen3({ navigation, route }) {

  const { email } = route.params;


  async function confirmSignUp({ email, code }) {
    try {
      const a = await Auth.confirmSignUp(email, code)
      Alert.alert("Email Verified !")
      navigation.navigate('LoginScreen', { email: email })

    } catch (error) {
      Alert.alert("Error", error.message, [{ text: "OK", },], { cancelable: false });
    }
  }

  async function resendConfirmationCode(email) {
    try {
      const a = await Auth.resendSignUp(email)
      Alert.alert("A new verification code has been sent to your email");
    } catch (error) {
      Alert.alert("Error", error.message, [{ text: "OK", },], { cancelable: false });
      console.log(error)
    }

  }
  return (
    <BackgroundFrame>

      <KeyboardAwareScrollView style={{ flex: 1 }}>
        {/* Create account Forms */}
        <Formik
          initialValues={{ email: email, code: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {

            confirmSignUp(values)

          }}>

          {(props) => (
            <View>


              <MyCard title={"Verify Email"} space={1} containerStyle={{ minHeight: 250, maxHeight: 300, }} >
                <View style={globalStyles.inputErrorwrapper}>
                  <TextInput
                    value={props.values.email}
                    onChangeText={props.handleChange("email")}
                    placeholder="Please Enter Email"
                    autoCompleteType='email'
                    autoCapitalize={"none"}
                    style={globalStyles.MyText}
                  /><Text style={globalStyles.textInputError}>{props.touched.email && props.errors.email}</Text>
                </View>

                <View style={globalStyles.inputErrorwrapper}>
                  <TextInput
                    value={props.values.code}
                    onChangeText={props.handleChange("code")}
                    placeholder="Please Enter Verification Code"
                    autoCompleteType={"password"}
                    style={globalStyles.MyText}
                    keyboardType='number-pad'
                  />
                </View>

              </MyCard>
              <View style={{ padding: 50, paddingTop: 5 }}>
                <Button
                  title='Verify Email'
                  onPress={props.handleSubmit}
                  buttonStyle={{
                    margin: 5,
                    backgroundColor: colors.DarkBlue(),
                    borderRadius: 10,
                    padding: 10
                  }}
                />
                <Button
                  title='Resend Verification code'
                  buttonStyle={{
                    margin: 5,
                    borderRadius: 10,
                    padding: 10
                  }}
                  type='outline'
                  onPress={() => {
                    const m = props.values.email

                    if (m.length > 0) {
                      resendConfirmationCode(m)
                    }
                  }}


                />


              </View>

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
    paddingTop: 20,
  },
});

export { CreateAccountScreen3 };
