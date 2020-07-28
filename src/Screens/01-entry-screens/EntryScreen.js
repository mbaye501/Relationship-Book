import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { globalStyles, colors, font } from "../../Styles"
import { BackgroundFrame, MyCard, Spacer, HStack } from '../../Components'
import { Avatar, Card, Button } from 'react-native-elements';


function EntryScreen({ navigation }) {
    //#region functions
    const handleCreateAccount = () => navigation.navigate('CreateAccountScreen')
    const handleLogin = () => navigation.navigate('LoginScreen')
    //#endregion

    return (
        <BackgroundFrame>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={globalStyles.avatarContainer}>
                    <Avatar containerStyle={styles.avatar}
                        rounded
                        size={200}
                        title='hello'
                        source={require('../../../assets/Images/Illustrations/loving.png')}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.callToActionText}>
                        Let's get Started !
                </Text>
                    <Text style={styles.subCallToActionText}>
                        Start nurturing today
                </Text>
                    <Text style={styles.subCallToActionText}>
                        your relationships with your loved ones
                </Text>

                </View>

                <MyCard space={2} >
                    <TouchableOpacity style={globalStyles.createAccountButton} onPress={handleCreateAccount}>
                        <Text style={globalStyles.createAccountText} >
                            Create Account
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.loginAccountButton} >
                        <Text style={globalStyles.loginAccountText} onPress={handleLogin}>Login</Text>
                    </TouchableOpacity>

                </MyCard>
                <HStack>
                    <Button
                        title='Verify email'
                        titleStyle={{ fontSize: 12 }}
                        type='clear'
                        style={{ marginBottom: 5 }}
                        onPress={() => { navigation.navigate('CreateAccountScreen3', { email: '' }) }} />
                    <Button
                        title='Forgot Password'
                        titleStyle={{ fontSize: 12 }}

                        type='clear'
                        style={{ marginBottom: 5 }}
                        onPress={() => { navigation.navigate('ForgotPasswordScreen') }} />
                </HStack>

            </SafeAreaView>
        </BackgroundFrame >
    );
}


const styles = StyleSheet.create({
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        flex: 2
    },
    textContainer: {
        textAlign: 'center',
        marginBottom: 20,
        flex: 1

    },
    buttonsContainer: {
        borderColor: 'red',
        borderWidth: 1,
        flex: 3,
        alignItems: 'stretch',
        borderRadius: 20,
        justifyContent: 'space-around',
        shadowOpacity: 0.9,
    },

    avatar: {
        backgroundColor: 'white',

    },

    callToActionText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.DarkGray(),
        fontFamily: font.callToAction,
        textAlign: 'center',
        margin: 10,

    },

    subCallToActionText: {
        fontSize: 16,
        color: colors.DarkGray(),
        fontFamily: font.regular,
        textAlign: 'center',
        margin: 5
    }

})

export { EntryScreen }
