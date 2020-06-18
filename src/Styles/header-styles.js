import { Platform } from "react-native";
import { colors } from './app-theme'

const headerBackGroundOpacity = Platform.OS === 'ios' ? 0.77 : 1
const headerFonts = 'DancingScript_700Bold'

const authStackHeader = {
    title: 'My Relationship Book',
    headerStyle: {
        backgroundColor: colors.MediumBleu(headerBackGroundOpacity),
    },
    headerTintColor: colors.DarkGray,
    headerTitleStyle: {
        fontFamily: headerFonts,
        fontSize: 30
    },
    headerTitleAlign: 'center',

}

export { authStackHeader };
