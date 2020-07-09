import React from "react";
import { Text, View, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, } from "react-native"
import { BackgroundFrame, Spacer, MyCard, MyTextInput, VStack, HStack, MyButton } from '../../Components'
import { Avatar, List, ListItem } from 'react-native-elements'
import { colors, font, globalStyles } from '../../Styles'


function ContactScreen2({ navigation, route }) {


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
                                source={{
                                    uri: item.avatar_url
                                }}
                            />
                        </View>
                        <MyCard containerStyle={{ height: 300 }}>
                            <MyTextInput placeholder='First Name' style={{ minHeight: 40, marginBottom: 10 }} />
                            <MyTextInput placeholder='Last Name' style={{ minHeight: 40, marginBottom: 10 }} />
                            <MyTextInput placeholder='Email' style={{ minHeight: 40, marginBottom: 10 }} />
                            <MyTextInput placeholder='Phone number ' style={{ minHeight: 40 }} />
                        </MyCard>
                        <HStack>
                            <MyButton onPress={() => navigation.push('Home')} text='Delete' />
                            <Spacer />
                            <MyButton onPress={() => navigation.push('Home')} text='Save' />
                        </HStack>
                        <Spacer />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </BackgroundFrame>
    );
}

export { ContactScreen2 }