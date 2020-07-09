import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { SocialIcon, Card, Button, } from 'react-native-elements'
import { globalStyles, colors, font, pickerSelectStyles } from "../../Styles"
import { BackgroundFrame, MyCard, HStack, VStack, Spacer, MyTextInput, MyButton } from '../../Components'

function SendToScreen({ navigation }) {
    //#region state variables
    const [data, setData] = useState([{ key: String(1) }])
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    icon={{
                        name: "add",
                        color: colors.DarkBlue()
                    }}
                    type='clear'
                    onPress={() => {
                        if (data.length < 50) {
                            setData([...data, { key: String(data.length + 1) }])
                            console.log(data)
                        }
                        else {
                            alert('hey')
                        }

                    }}

                />
            ),
        });
    }, [navigation, data]);




    //#endregion  

    //#region const variables


    //#endregion

    return (
        <BackgroundFrame >
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={30} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                        <Spacer />

                        <MyCard containerStyle={{ minHeight: 100 + data.length * 80, maxHeight: 500 }} title={"Send To"}>
                            <View style={{ flex: 1, alignContent: 'space-around' }}>
                                <FlatList
                                    data={data}
                                    renderItem={(item) => <MyTextInput placeholder='Send to' style={{ minHeight: 40, marginBottom: 10 }} />}
                                />


                            </View>
                        </MyCard>
                        <Spacer space={15} />

                        <HStack>
                            <Spacer />
                            <MyButton onPress={() => navigation.push('Home')} text='Send' />
                        </HStack>
                        <Spacer space={15} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </BackgroundFrame >
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

export { SendToScreen }