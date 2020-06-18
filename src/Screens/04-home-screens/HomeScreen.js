import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { globalStyles } from "../../Styles"
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';


function HomeScreen({ navigation }) {

    //#region define 
    const handleClick = () => navigation.navigate('Entry')
    //#endregion
    return (
        <View style={globalStyles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={handleClick} />
        </View>
    );
}

export { HomeScreen }