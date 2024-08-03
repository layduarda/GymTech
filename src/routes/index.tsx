import { NavigationContainer, TabRouter } from "@react-navigation/native";

import DrawerRoutes from "./drawer_routes";

export default function Routes(){
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    )
}