import React, { useEffect } from "react";
import { Text, View, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, } from "react-native"
import { BackgroundFrame, Spacer, MyCard, MyTextInput } from '../../Components'
import { List, ListItem, Button, Divider } from 'react-native-elements'
import { colors, font, globalStyles } from '../../Styles'


function MenuScreen({ navigation }) {

    const list = [
        {
            name: 'Edit Profile ',
            icon: 'person-outline',
            nav: 'Profile'
        },
        {
            name: 'Security',
            icon: 'security',
            nav: 'Security'
        },
        {
            name: 'Log Out',
            icon: 'arrow-back',
        }
    ]

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            leftIcon={{ name: item.icon, }}
            containerStyle={globalStyles.listItem}
            bottomDivider
            onPress={() => navigation.navigate(item.nav)}
        />
    )

    return (
        <BackgroundFrame>
            <FlatList
                keyExtractor={keyExtractor}
                data={list}
                renderItem={renderItem}
                style={{ marginTop: 10 }}
            />
        </BackgroundFrame>
    );
}

export { MenuScreen }