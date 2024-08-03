import {  createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab_routes';
import StackRoutes from './stack_routes copy';
import Perfil from '../screens/Perfil';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator screenOptions={{ title: ''}}> 
            <Drawer.Screen
            name="inicio"
            component={TabRoutes}
            options={{
                drawerIcon: ({ color, size}) => <Feather name="home" color={color} size={size} />,
                drawerLabel: 'Home',
            }}
            />

            <Drawer.Screen
            name="profile"
            component={StackRoutes}
            options={{
                drawerIcon: ({ color, size}) => <Feather name="user" color={color} size={size} />,
                drawerLabel: 'Meu perfil',
            }}
            />
        </Drawer.Navigator>
    )
}