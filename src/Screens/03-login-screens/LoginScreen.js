import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity } from "react-native";
import { SocialIcon, Card } from 'react-native-elements'
import { globalStyles, colors, font } from "../../Styles"
import { BackgroundFrame, MyCard, HStack, VStack, Spacer, MyTextInput, MyButton } from '../../Components'

function LoginScreen({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');



    return (



        <BackgroundFrame >
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={30} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        {/* Top text view */}
                        <View style={styles.topContainer} >
                            <Text style={styles.signUpText} >Sign in with</Text>
                            {/*Social Icons View*/}
                            <View style={styles.icons}>
                                <SocialIcon raised={true} type='facebook' />
                                <SocialIcon raised={true} type='instagram' />
                                <SocialIcon raised={true} type='linkedin' />
                                <SocialIcon raised={true} type='twitter' />
                                <SocialIcon raised={true} type='google' />
                            </View>
                            {/* Texts  */}
                            <Text style={{ ...styles.regularText, marginBottom: 10 }}> Or</Text>
                            {/* email & password card */}
                        </View>

                        <MyCard space={1} containerStyle={{ minHeight: 150, maxHeight: 200 }}>
                            <MyTextInput value={email} onChangeText={text => setEmail(text)} placeholder='Please Enter Email' />
                            <MyTextInput value={password} onChangeText={text => setPassword(text)} placeholder='Please Enter Password' />
                        </MyCard>
                        <HStack>
                            <Spacer />
                            <MyButton onPress={() => navigation.navigate('MainAppTabs')} text='Login' />

                        </HStack>
                        <Spacer space={20} />
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