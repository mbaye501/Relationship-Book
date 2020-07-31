import React, { useEffect } from "react";
import { Text, View, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, } from "react-native"
import { BackgroundFrame, Spacer, MyCard, MyTextInput, AuthContext } from '../../Components'
import { List, ListItem, Button } from 'react-native-elements'
import { colors, font, globalStyles } from '../../Styles'


function MenuScreen({ navigation }) {
    const { signOut } = React.useContext(AuthContext);


    const list = [
        {
            name: 'Edit Profile ',
            icon: 'person-outline',
            press: navigation.navigate('Profile')
        },
        {
            name: 'Security',
            icon: 'security',
            press: navigation.navigate('Security')
        },
        {
            name: 'Log Out',
            icon: 'arrow-back',
            press: signOut
        }
    ]

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            leftIcon={{ name: item.icon, }}
            containerStyle={globalStyles.listItem}
            bottomDivider
            chevron={{ color: colors.DarkGray() }}
            onPress={signOut}
        />
    )

    return (
        <BackgroundFrame>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={30} style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                        <Spacer />

                        <MyCard containerStyle={{ minHeight: 80 }} >
                            <MyTextInput placeholder='Search Message' style={{ minHeight: 40, flex: 1 }} />
                        </MyCard>
                        <FlatList
                            keyExtractor={keyExtractor}
                            data={list}
                            renderItem={renderItem}
                        />

                        <Spacer space={120} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </BackgroundFrame>
    );
}

export { MenuScreen }