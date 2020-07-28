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

    code: yup
        .number()
        .required(),
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

function ForgotPasswordScreen2({ navigation, route }) {
    const { email } = route.params;


    async function forgotPasswordSubmit({ code, password }) {
        try {
            const user = await Auth.forgotPasswordSubmit(email, code, password)
            Alert.alert("password updated")
            navigation.navigate('LoginScreen')
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    return (
        <BackgroundFrame >

            <KeyboardAwareScrollView style={{ flex: 1 }}>



                <Formik initialValues={{ code: "", password: "", confirmPassword: "" }} onSubmit={(values) => { forgotPasswordSubmit(values) }} validationSchema={validationSchema}>

                    {(props) => (
                        <View>
                            <Spacer />
                            <MyCard space={1} containerStyle={{ height: 300 }} title={"Password Reset"} >
                                <View style={globalStyles.inputErrorwrapper}>
                                    <TextInput
                                        value={props.values.code}
                                        onChangeText={props.handleChange("code")}
                                        onBlur={props.handleBlur('code')}
                                        placeholder="Please Enter code"
                                        autoCompleteType='off'
                                        autoCapitalize='none'
                                        keyboardType='number-pad'
                                        style={globalStyles.MyText}
                                    />
                                    <Text style={globalStyles.textInputError}>{props.touched.code && props.errors.code}</Text>
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
                            <View style={{ padding: 50, paddingTop: 5 }}>
                                <Button
                                    title='Done'
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

export { ForgotPasswordScreen2 }

