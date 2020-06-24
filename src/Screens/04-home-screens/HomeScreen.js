import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity } from "react-native";
import { SocialIcon, Card } from 'react-native-elements'
import { globalStyles, colors, font } from "../../Styles"
import { BackgroundFrame, MyCard, HStack, VStack, Spacer, MyTextInput, MyButton } from '../../Components'

function HomeScreen({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');



    return (



        <BackgroundFrame >
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={30} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>


                        <MyCard title={'Message Topic'} space={1} containerStyle={{ minHeight: 300, maxHeight: 300 }}>
                            <MyTextInput value={email} onChangeText={text => setEmail(text)} placeholder='Pick Relationship' autoCorrect={false} />
                            <MyTextInput value={password} onChangeText={text => setPassword(text)} placeholder='pick Type' />
                            <MyTextInput value={confirmPassword} onChangeText={text => setConfirmPassword(text)} placeholder='Pick Book' />
                        </MyCard>
                        <HStack>
                            <Spacer />
                            <MyButton onPress={() => navigation.navigate('CreateAccountScreen2')} text='Next' />

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

export { HomeScreen }