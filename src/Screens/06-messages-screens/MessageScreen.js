import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../Styles"

function MessageScreen() {
    return (
        <View style={globalStyles.container}>
            <Text>Nessage Screen</Text>
        </View>
    );
}

export { MessageScreen }