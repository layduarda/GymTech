import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons';

import ProfileTab from "./ProfileTab";
import { HomeTab } from "./HomeTab";
import TreinoTab from "./TreinoTab";

import { colors } from "../utils/colors";

const Tab = createBottomTabNavigator();

export function RoutesTab(){
    return(
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarStyle:{
                position: "absolute",
                backgroundColor: colors.roxo4,
                borderTopWidth: 0,

                bottom: 14,
                left: 14,
                right: 14,
                elevation: 0,
                borderRadius: 20,
                height: 55,
                padding: 10,
            }
        }} 
            initialRouteName="home"
        >
            <Tab.Screen 
                name="perfil"
                component={ProfileTab}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="user" color={colors.white} size={30}/>,
                    tabBarLabel: '',
                }}
            />

            <Tab.Screen 
                name="home"
                component={HomeTab}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="home" color={colors.white} size={30}/>,
                    tabBarLabel: '',
                    
                }}
            />

            <Tab.Screen 
                name="treino"
                component={TreinoTab}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="plus" color={colors.white} size={30}/>,
                    tabBarLabel: '',
                    
                }}
            />
        </Tab.Navigator>
    )
}
