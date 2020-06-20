import { Platform } from "react-native";
import { colors } from './app-theme'

const headerFonts = 'DancingScript_700Bold'

const authStackHeader = {
    title: 'My Relationship Book',
    headerStyle: {
        backgroundColor: colors.HeaderBackground,
    },
    headerTintColor: colors.DarkGray(),
    headerTitleStyle: {
        fontFamily: headerFonts,
        fontSize: 30
    },
    headerTitleAlign: 'center',
}

export { authStackHeader };
