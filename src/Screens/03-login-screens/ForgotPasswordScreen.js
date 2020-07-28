import React from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TextInput, Alert } from "react-native";
import { SocialIcon, Button } from 'react-native-elements'
import { colors, font, globalStyles } from "../../Styles"
import { BackgroundFrame, MyCard, HStack, Spacer, MyTextInput, MyButton } from '../../Components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from "formik";
import * as yup from 'yup'
import { Auth } from "aws-amplify";

const validationSchema = yup.object({

    email: yup
        .string()
        .label('Email')
        .required()
        .email(),

})

function ForgotPasswordScreen({ navigation }) {


    async function forgotPasswordRequest({ email }) {
        try {
            const user = await Auth.forgotPassword(email)
            Alert.alert("Verification Code sent to you email")
            navigation.navigate('ForgotPasswordScreen2', { email })
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    return (
        <BackgroundFrame >

            <KeyboardAwareScrollView style={{ flex: 1 }}>



                <Formik initialValues={{ email: "" }} onSubmit={(values) => { forgotPasswordRequest(values) }} validationSchema={validationSchema}>

                    {(props) => (
                        <View>
                            <Spacer />
                            <MyCard space={1} containerStyle={{ height: 100 }} >
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


                            </MyCard>
                            <View style={{ padding: 50, paddingTop: 5 }}>
                                <Button
                                    title='Reset Password'
                                    onPress={props.handleSubmit}
                                    buttonStyle={{
                                        margin: 5,
                                        backgroundColor: colors.DarkBlue(),
                                        borderRadius: 10,
                                        padding: 10
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
        textAlign: 'center',
    },

    icons: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },

    regularText: {
        color: colors.DarkGray(),
        fontFamily: font.subTitle,
        fontSize: 16,
        textAlign: 'center',
    },

    topContainer: {
        paddingTop: 20

    },


})

export { ForgotPasswordScreen }

