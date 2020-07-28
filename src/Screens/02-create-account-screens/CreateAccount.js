import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, Alert } from "react-native";
import { SocialIcon, SafeAreaView, Button } from "react-native-elements";
import { colors, font, globalStyles } from "../../Styles";
import { BackgroundFrame, MyCard, HStack, Spacer, MyTextInput, MyButton } from "../../Components";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as yup from 'yup'
import { Auth } from "aws-amplify";


const validationSchema = yup.object({
  name: yup
    .string()
    .required(),
  email: yup
    .string()
    .label('Email')
    .required()
    .email(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(6),
  confirmPassword: yup
    .string()
    .label('Confirm Password ')
    .required()
    .min(6)
    .test('password-match', 'Passwords do not match please check', function (value) {
      return this.parent.password === value;
    })


})



function CreateAccountScreen({ navigation }) {
  const [SignUpError, setSignUpError] = useState('initialState')

  async function signUp({ email, name, password }) {
    try {
      const signUpParams = {
        username: email,
        password: password,
        attributes: {
          email: email,
          given_name: name,
        },
      }
      console.log(signUpParams)
      const user = await Auth.signUp(signUpParams)
      Alert.alert(
        "",
        "verification code sent to email.",
        [
          {
            text: "OK",
          },


        ],
        { cancelable: false }
      );
      navigation.navigate('CreateAccountScreen3', { email: email })

    } catch (error) {
      var message = error.message

      if (error.code === 'UsernameExistsException') {
        message = 'There is already a user with the email provided. You may want to Verify your email or reset password'
      }

      Alert.alert(
        "",
        message,
        [
          {
            text: "OK",
          },


        ],
        { cancelable: false }
      );

    }
  }


  return (
    <BackgroundFrame>
      <KeyboardAwareScrollView style={{ flex: 1 }}>

        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "", name: "" }}
          onSubmit={(values) => { signUp(values) }}
          validationSchema={validationSchema}
        >
          {(props) => (
            <View style={{ flex: 1 }}>
              <MyCard title={"Create Account"} containerStyle={{ height: 400 }} >

                <View style={globalStyles.inputErrorwrapper}>
                  <TextInput
                    value={props.values.name}
                    onChangeText={props.handleChange("name")}
                    onBlur={props.handleBlur('name')}
                    placeholder="Please Enter your name"
                    autoCompleteType='name'
                    autoCapitalize='words'
                    style={globalStyles.MyText}
                  />
                  <Text style={globalStyles.textInputError}>{props.touched.name && props.errors.name}</Text>
                </View>



                <View style={globalStyles.inputErrorwrapper}>
                  <TextInput
                    value={props.values.email}
                    onChangeText={props.handleChange("email")}
                    onBlur={props.handleBlur('email')}
                    placeholder="Please Enter Email"
                    autoCompleteType='email'
                    autoCapitalize='none'
                    style={globalStyles.MyText}
                  />
                  <Text style={globalStyles.textInputError}>{props.touched.email && props.errors.email}</Text>
                </View>

                <View style={globalStyles.inputErrorwrapper}>
                  <TextInput
                    value={props.values.password}
                    onChangeText={props.handleChange("password")}
                    onBlur={props.handleBlur('password')}
                    placeholder="Please Enter Password"
                    autoCompleteType='password'
                    secureTextEntry={true}
                    style={globalStyles.MyText}
                  />
                  <Text style={globalStyles.textInputError}>
                    {props.touched.password && props.errors.password}
                  </Text>
                </View>


                <View style={globalStyles.inputErrorwrapper}>

                  <TextInput
                    value={props.values.confirmPassword}
                    onChangeText={props.handleChange("confirmPassword")}
                    onBlur={props.handleBlur('confirmPassword')}
                    placeholder="Confirm Password"
                    autoCompleteType='password'
                    secureTextEntry={true}
                    style={globalStyles.MyText}
                  />
                  <Text style={globalStyles.textInputError}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                </View>

              </MyCard>
              <View style={{ paddingLeft: 50, paddingRight: 50 }}>
                <TouchableOpacity style={globalStyles.createAccountButton} onPress={props.handleSubmit}>
                  <Text style={globalStyles.createAccountText} >
                    Create Account
                    </Text>
                </TouchableOpacity>
              </View>



            </View>
          )}
        </Formik>
        {/* <View style={styles.topContainer}>
          <Text style={styles.signUpText}>Sign up with</Text>
          <View style={styles.icons}>
            <SocialIcon raised={true} type="facebook" />
            <SocialIcon raised={true} type="instagram" />
            <SocialIcon raised={true} type="linkedin" />
            <SocialIcon raised={true} type="twitter" />
            <SocialIcon raised={true} type="google" />
          </View>
          <Text style={{ ...styles.regularText, marginBottom: 0 }}> Or </Text>
        </View> */}
      </KeyboardAwareScrollView >

    </BackgroundFrame >
  );
}

styles = StyleSheet.create({
  signUpText: {
    color: colors.DarkGray(),
    fontFamily: font.subTitle,
    fontSize: 16,
    textAlign: "center",
  },

  icons: {
    flexDirection: "row",
    padding: 10,
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
    marginTop: 10,
  },
});

export { CreateAccountScreen };
