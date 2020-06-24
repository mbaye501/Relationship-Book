import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity } from "react-native";
import { SocialIcon, Card } from 'react-native-elements'
import { globalStyles, colors, font, pickerSelectStyles } from "../../Styles"
import { BackgroundFrame, MyCard, HStack, VStack, Spacer, MyTextInput, MyButton } from '../../Components'
import RNPickerSelect from 'react-native-picker-select';

function HomeScreen({ navigation }) {
    //#region state variables
    const [relationship, setRelationship] = useState('')
    const [relationshipType, setRelationshipType] = useState('')
    const [book, bookType] = useState('')
    //#endregion

    //#region const variables
    const relationshipPlaceholder = {
        label: 'Select Relationship',
        color: colors.MediumGray(),
        value: ''
    };
    const relationshipTypePlaceholder = {
        label: 'Select Relationship Type',
        value: null,
        color: colors.MediumGray()
    };
    const bookPlaceholder = {
        label: 'Select book',
        value: null,
        color: colors.MediumGray()
    };

    const relationshipsItems = [
        { label: 'Relationship_1', value: 'Relationship_1' },
        { label: 'Relationship_2', value: 'Relationship_2' },
        { label: 'Relationship_3', value: 'Relationship_3' },

    ]

    const relationshipTypeItems = {
        'Relationship_1': [
            { label: 'Relationship_1_type_1', value: 'Relationship_1_type_1' },
            { label: 'Relationship_1_type_2', value: 'Relationship_1_type_2' },
            { label: 'Relationship_1_type_3', value: 'Relationship_1_type_3' }
        ],

        'Relationship_2': [
            { label: 'Relationship_2_type_1', value: 'Relationship_2_type_1' },
            { label: 'Relationship_2_type_2', value: 'Relationship_2_type_2' },
            { label: 'Relationship_2_type_3', value: 'Relationship_2_type_3' }
        ],

        'Relationship_3': [
            { label: 'Relationship_3_type_1', value: 'Relationship_3_type_1' },
            { label: 'Relationship_3_type_2', value: 'Relationship_3_type_2' },
            { label: 'Relationship_3_type_3', value: 'Relationship_3_type_3' }
        ],

        unidentified: [
            { label: '', value: '' },

        ]
    }

    const bookItems = [
        { label: 'Book 1', value: 1 },
        { label: 'Book 2', value: 2 },
        { label: 'Book 3', value: 3 },
    ]


    //#endregion

    return (



        <BackgroundFrame >
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={30} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>


                        <MyCard title={'Message Topic'} space={1} containerStyle={{ minHeight: 300, maxHeight: 300 }}>

                            {/* Relationship Picker */}
                            <RNPickerSelect
                                onValueChange={(value) => {
                                    console.log(relationshipTypeItems[value])
                                    console.log(value)
                                    setRelationship(value)
                                    setRelationshipType('')
                                }}
                                items={relationshipsItems}
                                style={{
                                    ...pickerSelectStyles, placeholder: {
                                        color: colors.MediumGray(),
                                        fontFamily: font.regular,
                                    },
                                }}
                                placeholder={relationshipPlaceholder}
                                useNativeAndroidPickerStyle={false}
                            />

                            {/* RelationshipType Picker */}
                            <RNPickerSelect
                                onValueChange={(value) => setRelationshipType(value)}
                                items={relationship === '' ? [] : relationshipTypeItems[relationship]}
                                style={{
                                    ...pickerSelectStyles, placeholder: {
                                        color: colors.MediumGray(),
                                        fontFamily: font.regular,
                                    },
                                }}
                                placeholder={relationshipTypePlaceholder}
                                useNativeAndroidPickerStyle={false}
                            />


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