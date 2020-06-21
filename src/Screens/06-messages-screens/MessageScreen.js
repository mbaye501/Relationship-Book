import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../Styles"
import { BackgroundFrame } from '../../Components'


function MessageScreen() {
    return (
        <BackgroundFrame>
            <Text>Nessage Screen</Text>
        </BackgroundFrame>
    );
}

export { MessageScreen }