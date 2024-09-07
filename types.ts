import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    HomeTab: undefined;
    SignUp: undefined;
};

export type HomeTabProp = StackNavigationProp<RootStackParamList, 'HomeTab'>;
export type SignupScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;