import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Treino from '../screens/Treino';
import Perfil from '../screens/Perfil';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen
            name="home"
            component={Home}
            options={{
                tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
                tabBarLabel: 'Home'
            }}
            />

            <Tab.Screen
            name="Treino"
            component={Treino}
            options={{
                tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size}/>,
                tabBarLabel: 'Treino'
            }} 
            />

            <Tab.Screen
            name="Perfil"
            component={Perfil}
            options={{
                tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size}/>,
                tabBarLabel: 'Perfil'
            }}
            />
            
        </Tab.Navigator>
    )
}

