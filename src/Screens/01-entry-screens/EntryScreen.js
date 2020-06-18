import React from "react";
import { Button, Text, View } from "react-native";
import { globalStyles } from "../../Styles"

function EntryScreen({ navigation }) {
    const handleCreateAccount = () => navigation.navigate('CreateAccountScreen')
    const handleLogin = () => navigation.navigate('LoginScreen')
    return (
        <View style={globalStyles.container}>
            <View style={{
                borderRadius: 40,
                width: 80,
                height: 80,
                borderWidth: 5,
                borderColor: 'white',
                backgroundColor: 'black'
            }}>

            </View>
            <Text>Let's get started</Text>
            <Text>start today nurturing you relationships with your loved ones</Text>
            <Button title="Create Account" onPress={handleCreateAccount} />
            <Button title="Log in" onPress={handleLogin} />
        </View>
    );
}

export { EntryScreen }