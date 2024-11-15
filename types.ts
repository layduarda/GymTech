
interface SelectListProps {
    styles?: { borderColor: string };
    setSelected: (val: any) => void;
    data: { key: string; value: string }[];
    save: string;
    placeholder: string;
    // outras propriedades, se houver
}
// import { StackNavigationProp } from "@react-navigation/stack";

// export type RootStackParamList = {
//     HomeTab: undefined;
//     SignUp: undefined;
//     LoginScreen: undefined;
// };

// export type LoginScreenProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;
// export type HomeTabProp = StackNavigationProp<RootStackParamList, 'HomeTab'>;
// export type SignupScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;