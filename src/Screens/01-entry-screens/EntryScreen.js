import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native";
import { globalStyles, colors, font } from "../../Styles"
import { BackgroundFrame, MyCard, Spacer } from '../../Components'
import { Avatar, Card } from 'react-native-elements';


function EntryScreen({ navigation }) {
    //#region functions
    const handleCreateAccount = () => navigation.navigate('CreateAccountScreen')
    const handleLogin = () => navigation.navigate('LoginScreen')
    //#endregion

    return (
        <BackgroundFrame>

            <View style={styles.avatarContainer}>
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
            <Spacer space={1} />
            <MyCard space={2} >
                <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
                    <Text style={styles.createAccountText} >
                        Create Account
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginAccountButton} >
                    <Text style={styles.loginAccountText} onPress={handleLogin}>Login</Text>
                </TouchableOpacity>
            </MyCard>
        </BackgroundFrame >
    );
}

export { EntryScreen }


const styles = StyleSheet.create({
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        flex: 2
    },
    textContainer: {
        textAlign: 'center',
        flex: 1

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
    ,
    createAccountButton: {
        maxHeight: 65,
        minHeight: 60,
        borderRadius: 33,
        justifyContent: 'center',
        backgroundColor: colors.DarkBlue(),
        shadowOpacity: 0,
        elevation: 10

    },

    createAccountText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: font.button,
        fontSize: 16,
        shadowOpacity: 0

    },

    loginAccountButton: {
        maxHeight: 65,
        minHeight: 60, borderRadius: 33,
        justifyContent: 'center',
        borderColor: colors.DarkBlue(),
        borderWidth: 1,
        shadowOpacity: 0,


    },

    loginAccountText: {
        textAlign: 'center',
        color: colors.DarkGray(),
        fontFamily: font.button,
        fontSize: 16,
        shadowOpacity: 0

    }
}
)
