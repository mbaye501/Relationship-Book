import React, { useEffect } from "react";
import { Text, View, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, } from "react-native"
import { BackgroundFrame, Spacer, MyCard, MyTextInput } from '../../Components'
import { List, ListItem, Button } from 'react-native-elements'
import { colors, font, globalStyles } from '../../Styles'


function MessageScreen({ navigation }) {
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    icon={{
                        name: "add",
                        color: colors.DarkBlue()
                    }}
                    type='clear'
                    onPress={() => { navigation.navigate('Contacts3') }}
                />
            ),
        });
    }, [navigation]);
    const list = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: '12:15pm'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Yeterday 6:00pm'
        }
    ]
    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={{ source: { uri: item.avatar_url } }}
            containerStyle={globalStyles.listItem}
            bottomDivider
            chevron={{ color: colors.DarkGray() }}
            onPress={() => navigation.navigate('Contacts2', item)}
        />
    )

    return (
        <BackgroundFrame>

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

        </BackgroundFrame>
    );
}

export { MessageScreen }