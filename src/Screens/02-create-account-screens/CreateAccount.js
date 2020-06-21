import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SocialIcon, Card } from 'react-native-elements'
import { globalStyles, colors, font } from "../../Styles"
import { BackgroundFrame, MyCard, HStack, VStack, Spacer } from '../../Components'

function CreatAccountScreen() {
    const [email, setEmail] = React.useState('please enter email');
    const [password, setPassword] = React.useState('please enter password');
    const [confirmPassword, setConfirmPassword] = React.useState('please confirm password');
    const [keyboardJustify, setkeyboardJustify] = useState("flex-start")

    useEffect(() => {
        Keyboard.addListener("keyboardWillShow", _keyboardDidShow);
        Keyboard.addListener("keyboardWillHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        setkeyboardJustify('flex-end')
    };

    const _keyboardDidHide = () => {
        setkeyboardJustify('flex-start')
    };


    return (



        <BackgroundFrame >
            <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={50} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flex: 1, justifyContent: keyboardJustify }}>
                        {/* Top text view */}
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
                            <Text style={styles.signUpText}> Create Account</Text>

                            {/* email & password card */}

                        </View>
                        <MyCard  >
                            <Text>Email</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => setEmail(text)}
                                value={email}
                            />
                            <Text>Password</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => setPassword(text)}
                                value={password}

                            />
                            <Text>Confirm Password</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => setConfirmPassword(text)}
                                value={confirmPassword}
                            />


                        </MyCard>
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
    },

    CardOutterConatiner: {
        height: 300,
        borderRadius: 30,
        backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'white',
        justifyContent: 'center',
        alignItems: 'stretch',
        elevation: 1,
        marginBottom: 50,
        shadowOpacity: 0.3
    }

})

export { CreatAccountScreen }