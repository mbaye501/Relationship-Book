import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity } from "react-native";
import { SocialIcon, Card } from 'react-native-elements'
import { globalStyles, colors, font } from "../../Styles"
import { BackgroundFrame, MyCard, HStack, VStack, Spacer, MyTextInput, MyButton } from '../../Components'

function CreatAccountScreen({ navigation }) {

    //#region constant definitions
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    //#endregion

    return (
        <BackgroundFrame >
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={30} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                        {/* Top text and social Icons container */}
                        <View style={styles.topContainer} >
                            <Text style={styles.signUpText} >Sign up with</Text>
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

                        {/* Create account Forms*/}
                        <MyCard title={'Create Account'} space={1} containerStyle={{ minHeight: 300, maxHeight: 300 }}>
                            <MyTextInput value={email} onChangeText={text => setEmail(text)} placeholder='Please Enter Email' />
                            <MyTextInput value={password} onChangeText={text => setPassword(text)} placeholder='Please Enter Password' />
                            <MyTextInput value={confirmPassword} onChangeText={text => setConfirmPassword(text)} placeholder='Confirm Password' />
                        </MyCard>

                        {/* Next Button*/}
                        <HStack>
                            <Spacer />
                            <MyButton onPress={() => navigation.navigate('CreateAccountScreen2')} text='Next' />
                        </HStack>

                        {/* Spacer to make sure content is at top */}
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

export { CreatAccountScreen }