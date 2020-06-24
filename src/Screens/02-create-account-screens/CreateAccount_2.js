import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, Button } from "react-native";
import { SocialIcon, Card } from 'react-native-elements'
import { globalStyles, colors, font, pickerSelectStyles } from "../../Styles"
import { BackgroundFrame, MyCard, HStack, VStack, Spacer, MyTextInput, MyText, MyButton } from '../../Components'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';


function CreatAccountScreen2({ navigation }) {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [gender, setgender] = useState('')
    const [dateOfBirth, setdateOfBirth] = useState('Select Date of Birth')

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker() //must be first
        setdateOfBirth(date.toDateString())
    };
    const placeholder = {
        label: 'Select gender',
        value: null,
        color: colors.MediumGray()
    };
    return (



        <BackgroundFrame >
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={30} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <MyCard title={'Create Account'} space={1} containerStyle={{ minHeight: 300, maxHeight: 400 }} >
                            <MyTextInput value={firstName} onChangeText={text => setfirstName(text)} placeholder='First Name' />
                            <MyTextInput value={lastName} onChangeText={text => setlastName(text)} placeholder='Last Name' />

                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Male', value: 'male' },
                                    { label: 'Female', value: 'female' },
                                    { label: 'Other', value: 'other' },
                                ]}
                                style={{
                                    ...pickerSelectStyles, placeholder: {
                                        color: colors.MediumGray(),
                                        fontFamily: font.regular,
                                    },
                                }}
                                placeholder={placeholder}
                                useNativeAndroidPickerStyle={false}
                            />
                            <TouchableOpacity onPress={showDatePicker} style={{ backgroundColor: 'white', borderRadius: 15, elevation: 1, }}>
                                <Text style={{
                                    padding: 10,
                                    paddingLeft: 20,
                                    elevation: 1,
                                    color: dateOfBirth === 'Select Date of Birth' ? colors.MediumGray() : colors.DarkGray()
                                }}>
                                    {dateOfBirth.toString()}
                                </Text>
                            </TouchableOpacity>
                        </MyCard>
                        <HStack>
                            <Spacer />
                            <MyButton onPress={() => navigation.navigate('LoginScreen')} text='Done' />
                        </HStack>
                        <Spacer />

                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            value={dateOfBirth}
                        />
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


export { CreatAccountScreen2 }