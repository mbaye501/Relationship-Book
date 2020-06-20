import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Platform } from "react-native";
import { Avatar, Card } from 'react-native-elements';
import { colors } from '../Styles'

const MyCard = ({ children, flex = 1, marginBottom = 50 }) => (
    <Card
        containerStyle={
            {
                flex: flex,
                marginBottom: marginBottom,
                borderRadius: 30,
                backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'white',
                justifyContent: 'center',
                alignItems: 'stretch',
                elevation: 1,
                shadowOpacity: 0.3
            }
        }
        wrapperStyle={
            {
                flex: 1,
                justifyContent: 'space-around',
                backgroundColor: 'transparent'
            }
        }>
        {children}
    </Card>

)

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

const Spacer = () => (<View style={{ flex: 1 }}></View>)
export { Incon, BackgroundFrame, MyCard, Spacer };

