import React from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TextInput, Alert } from "react-native";
import { SocialIcon } from 'react-native-elements'
import { colors, font, globalStyles } from "../../Styles"
import { BackgroundFrame, MyCard, HStack, Spacer, MyTextInput, MyButton, AuthContext } from '../../Components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from "formik";
import * as yup from 'yup'


const validationSchema = yup.object({

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

})

function LoginScreen({ navigation }) {

    const { signIn } = React.useContext(AuthContext);


    // async function signIn({ email, password }) {
    //     try {
    //         const user = await Auth.signIn(email, password)
    //         console.log(user.signInUserSession.accessToken.jwtToken)
    //     } catch (error) {
    //         Alert.alert(error.message)
    //     }

    // }

    return (
        <BackgroundFrame >

            <KeyboardAwareScrollView style={{ flex: 1 }}>
                {/* Top Signin Icons and text container */}
                {/* <View style={styles.topContainer} >
                    <Text style={styles.signUpText} >Sign in with</Text>
                    <View style={styles.icons}>
                        <SocialIcon raised={true} type='facebook' />
                        <SocialIcon raised={true} type='instagram' />
                        <SocialIcon raised={true} type='linkedin' />
                        <SocialIcon raised={true} type='twitter' />
                        <SocialIcon raised={true} type='google' />
                    </View>
                    <Text style={{ ...styles.regularText, marginBottom: 10 }}> Or</Text>
                </View> */}


                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => { signIn(values) }}
                    validationSchema={validationSchema}
                >
                    {(props) => (
                        <View>


                            <MyCard space={1} containerStyle={{ height: 300 }} title="Login">
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
                            </MyCard>
                            <HStack>
                                <Spacer />
                                <MyButton onPress={props.handleSubmit} text='Login' />

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

export { LoginScreen }

