import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeTab from "../tabs/HomeTab";
import Profile from "../tabs/Profile";
import Treino from "../tabs/Treino";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Perfil"
                component={Profile}
            />

            <Tab.Screen 
                name="Home"
                component={HomeTab}
            />

            <Tab.Screen 
                name="Treino"
                component={Treino}
            />
        </Tab.Navigator>
    )
}
