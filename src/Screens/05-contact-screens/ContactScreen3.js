import React from "react";
import { Text, View, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, } from "react-native"
import { BackgroundFrame, Spacer, MyCard, MyTextInput, VStack, HStack, MyButton } from '../../Components'
import { Avatar, List, ListItem } from 'react-native-elements'
import { colors, font, globalStyles } from '../../Styles'


function ContactScreen3({ navigation, route }) {


    const item = route.params

    return (
        <BackgroundFrame>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={30} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 20,
                        }}>
                            <Avatar
                                rounded
                                size="xlarge"
                                icon={{ name: 'user', type: 'font-awesome' }}
                                containerStyle={{ backgroundColor: colors.MediumGray() }}

                            />
                        </View>
                        <MyCard containerStyle={{ height: 300 }}>
                            <MyTextInput placeholder='First Name' style={{ minHeight: 40, marginBottom: 10 }} />
                            <MyTextInput placeholder='Last Name' style={{ minHeight: 40, marginBottom: 10 }} />
                            <MyTextInput placeholder='Email' style={{ minHeight: 40, marginBottom: 10 }} />
                            <MyTextInput placeholder='Phone number ' style={{ minHeight: 40 }} />
                        </MyCard>
                        <HStack>
                            <Spacer />
                            <MyButton onPress={() => navigation.push('Home')} text='save' />
                        </HStack>
                        <Spacer />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </BackgroundFrame>
    );
}

export { ContactScreen3 }