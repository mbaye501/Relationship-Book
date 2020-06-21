import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Platform } from "react-native";
import { Card } from 'react-native-elements';

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

const MyCard = ({ children, containerStyle, wrapperStyle, backgroundColor = Platform.OS === 'ios' ? 'transparent' : 'white' }) => (<Card
    containerStyle={
        {
            ...containerStyle,
            height: 300,
            borderRadius: 30,
            backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'white',
            justifyContent: 'center',
            alignItems: 'stretch',
            elevation: 1,
            marginBottom: 50,
            shadowOpacity: 0.3
        }
    }
    wrapperStyle={
        {
            ...wrapperStyle,
            flex: 1,
            justifyContent: 'space-around',
            backgroundColor: 'transparent'
        }
    }>
    {children}
</Card>)

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

const HStack = ({ children, style, space = 1 }) => (<View style={{ ...style, ...HStackStyle }}>
    {children}
</View>)

const VStack = ({ children, style }) => (<View style={{ ...style, ...VStackStyle }}>
    {children}
</View>)

const Spacer = ({ space = 1 }) => (<View style={{ flex: space }}></View>)

export { Incon, BackgroundFrame, MyCard, Spacer, HStack, VStack };

