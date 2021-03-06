import React, { useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Platform, TextInput, TouchableOpacity, Text } from "react-native";
import { Card } from 'react-native-elements';
import { colors, font, globalStyles } from '../Styles'

const HStackStyle = {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
}

const VStackStyle = {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
}

const MyCard = ({ children, title, space, containerStyle, titleStyle, wrapperStyle, backgroundColor = Platform.OS === 'ios' ? colors.MediumBleu(0.) : colors.lightGray() }) => (<Card
    containerStyle={
        {
            flex: space,
            borderRadius: 30,
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            alignItems: 'stretch',
            elevation: 2,
            marginBottom: 50,
            shadowOpacity: 0.5,
            shadowRadius: 1,
            ...containerStyle,

        }
    }
    wrapperStyle={
        {
            flex: 1,
            justifyContent: 'space-around',
            backgroundColor: 'transparent',
            ...wrapperStyle,

        }
    }
    title={title}
    titleStyle={
        {
            color: colors.DarkGray(),
            ...titleStyle
        }
    }
>
    {children}
</Card>)

function MyTextInput({ style, onChangeText, placeholder, editable, autoCompleteType, secureTextEntry, autoCorrect, autoCapitalize }) {
    const [text, setText] = useState('')


    return (
        <TextInput
            style={{
                ...globalStyles.MyText
                ,
                ...style
            }}
            onChangeText={text => setText(text)}
            value={text}
            placeholderTextColor={colors.MediumGray()}
            placeholder={placeholder}
            editable={editable}
            autoCompleteType={autoCompleteType}
            secureTextEntry={secureTextEntry}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
        />
    )
}

const MyText = ({ children }) => (<Text
    style={{
        backgroundColor: 'transparent',
        padding: 10,
        paddingLeft: 20,
        elevation: 1,
        fontFamily: font.regular,
    }}>
    {children}
</Text>)

const MyButton = ({ onPress, text }) => (<TouchableOpacity onPress={onPress} style={globalStyles.smallButton}>
    <Text style={globalStyles.smallButtonText} >
        {text}
    </Text>
</TouchableOpacity>)

const HeaderPlusButton = ({ onPress, text }) => (<TouchableOpacity onPress={onPress} style={globalStyles.smallButton}>
    <Text style={globalStyles.smallButtonText} >
        {text}
    </Text>
</TouchableOpacity>)

function Incon({ iconName, size, color, focused }) {
    switch (iconName) {
        case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            break;
        case 'Messages':
            iconName = focused ? 'email' : 'email-outline';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            break;
        case 'Contacts':
            iconName = focused ? 'contacts' : 'contacts';
            return focused ? <MaterialCommunityIcons name={iconName} size={size} color={color} /> : <AntDesign name={iconName} size={size} color={color} />
            break;
        case 'Menu':
            iconName = focused ? 'xbox-controller-menu' : 'menu';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            break;
        default:
            break;
    }
}

const BackgroundFrame = ({ children }) => (<LinearGradient
    colors={['#E0E8FF', '#FFFFFF']}
    start={[0, 0]}
    end={[1, 1]}
    style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
    }}>
    {children}
</LinearGradient>)

const HStack = ({ children, style, space = 1 }) => (<View style={{ ...HStackStyle, ...style }}>
    {children}
</View>)

const VStack = ({ children, style }) => (<View style={{ ...style, ...VStackStyle }}>
    {children}
</View>)

const Spacer = ({ space = 1 }) => (<View style={{ flex: space }}></View>)

export { Incon, BackgroundFrame, MyCard, MyTextInput, MyButton, Spacer, HStack, VStack, MyText };

