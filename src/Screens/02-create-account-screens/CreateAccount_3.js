import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, Button } from "react-native";
import { SocialIcon, Card } from "react-native-elements";
import { globalStyles, colors, font, pickerSelectStyles } from "../../Styles";
import { BackgroundFrame, MyCard, HStack, VStack, Spacer, MyTextInput, MyText, MyButton } from "../../Components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import { Auth } from "aws-amplify";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from "formik";

function CreateAccountScreen3({ navigation, route }) {

  const { email } = route.params;





  async function confirmSignUp(email, code) {
    try {
      console.log('confirm email')

      const a = await Auth.confirmSignUp(email, code)
      console.log(a)
    } catch (error) { console.log(error) }
  }

  return (
    <BackgroundFrame>

      <KeyboardAwareScrollView style={{ flex: 1 }}>
        {/* Create account Forms */}
        <Formik
          initialValues={{ email: email, code: "" }}
          onSubmit={(values) => {

            confirmSignUp(email, values.code)

          }}>

          {(props) => (
            <View>


              <MyCard title={"Confirm Email"} space={1} containerStyle={{ minHeight: 200, maxHeight: 300, }} >

                <TextInput
                  value={props.values.email}
                  onChangeText={props.handleChange("email")}
                  placeholder="Please Enter Email"
                  autoCompleteType={"email"}
                  autoCapitalize={"none"}
                  style={globalStyles.MyText}
                />

                <TextInput
                  value={props.values.code}
                  onChangeText={props.handleChange("code")}
                  placeholder="Please Enter Confirmation Code"
                  autoCompleteType={"password"}
                  style={globalStyles.MyText}
                />
              </MyCard>
              <HStack>
                <Spacer />
                <MyButton
                  onPress={props.handleSubmit}
                  text="Done"
                />
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
    paddingTop: 20,
  },
});

export { CreateAccountScreen3 };
