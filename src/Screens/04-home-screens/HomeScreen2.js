import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity } from "react-native";
import { SocialIcon, Card } from 'react-native-elements'
import { globalStyles, colors, font, pickerSelectStyles } from "../../Styles"
import { BackgroundFrame, MyCard, HStack, VStack, Spacer, MyTextInput, MyButton } from '../../Components'
import RNPickerSelect from 'react-native-picker-select';

function HomeScreen2({ navigation }) {
    //#region state variables
    const [text, setText] = useState('')
    //#endregion  

    //#region const variables


    //#endregion

    return (
        <BackgroundFrame >
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={30} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                        <Spacer />

                        <MyCard space={4} containerStyle={{ minHeight: 200 }}>

                            <Text style={globalStyles.message}>Everyone Should be </Text>

                            <MyTextInput value={text} onChangeText={text => setText(text)} placeholder='Customize message' style={globalStyles.messageInput} />

                            <Text style={globalStyles.message}> As You Are </Text>

                        </MyCard>
                        <HStack>
                            <MyButton onPress={() => navigation.navigate('SendToScreen')} text='Done' />
                            <Spacer />
                            <MyButton onPress={() => navigation.push('Home2')} text='Next' />

                        </HStack>
                        <Spacer />
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

export { HomeScreen2 }