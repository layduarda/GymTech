import { createDrawerNavigator } from "@react-navigation/drawer";

import { Feather } from '@expo/vector-icons';

import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

import { RoutesTab } from "../tabs/RoutesTab";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="main"
                component={RoutesTab}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={colors.roxo1} size={30} />,
                    drawerLabel: 'Home'
                }}
            />
        </Drawer.Navigator>
    )
}