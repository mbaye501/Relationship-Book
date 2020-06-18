import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
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

export { Incon };

