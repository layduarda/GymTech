import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

import Ionicons from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";
import { HomeTabProp } from "../../types";

const SignupScreen = () => {
    const navigation = useNavigation<HomeTabProp>();
    const [secureEntery, setSecureEntery] = useState(true);

    const handleHomeTab = () => {
        navigation.navigate('HomeTab')
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleLogin = () => {
        //navigation.navigate("login")
    };

    return (
        <View style={styles.container1}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                <Ionicons
                    name={"arrow-back-outline"}
                    color={colors.setaBack}
                    size={25}
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Vamos lá!</Text>
                <Text style={styles.headingText}>Começar</Text>
            </View>

            {/* form  */}
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons
                        name={"person-outline"}
                        size={30}
                        color={colors.secondary}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Insira seu nome completo"
                        placeholderTextColor={colors.secondary}
                        keyboardType="name-phone-pad"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons
                        name={"phone-portrait-outline"}
                        size={30}
                        color={colors.secondary}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Insira seu número de telefone"
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntery}
                        keyboardType="phone-pad"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name={"mail-outline"} size={30} color={colors.secondary} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Insira seu email"
                        placeholderTextColor={colors.secondary}
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name={"lock-closed-outline"} size={30} color={colors.secondary} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Insira uma senha"
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntery}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setSecureEntery((prev) => !prev);
                        }}>
                        <Ionicons name={"eye-off-outline"} size={20} color={colors.secondary} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handleHomeTab}
                    style={[styles.loginButtonWrapper,
                    { backgroundColor: colors.bottom2 },
                    { borderWidth: 1 },
                    { borderColor: colors.bottom1 },
                    ]}
                >
                    <Text style={styles.loginText}>Cadastrar</Text>
                </TouchableOpacity>
                <Text style={styles.continueText}>ou continue com</Text>
                <TouchableOpacity style={styles.googleButtonContainer}>
                    <Ionicons
                        name={"logo-google"}
                        size={30}
                        color={colors.secondary}
                    />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>

                    <Text style={styles.accountText}>Já possui uma conta?</Text>
                    <TouchableOpacity
                        style={[styles.signinL,
                        ]}
                        onPress={handleLogin}
                    >
                        <Text style={styles.signinText}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 32,
        color: colors.bottom1,
        fontFamily: fonts.SemiBold,
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        marginVertical: 12,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
    },
    forgotPasswordText: {
        textAlign: "right",
        color: colors.primary,
        fontFamily: fonts.SemiBold,
        marginVertical: 10,
    },
    loginButtonWrapper: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        marginTop: 20,
    },
    loginText: {
        color: colors.white,
        fontSize: 20,
        fontFamily: fonts.SemiBold,
        textAlign: "center",
        padding: 10,
    },
    continueText: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 14,
        fontFamily: fonts.Regular,
        color: colors.primary,
    },
    googleButtonContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 10,
    },
    googleImage: {
        height: 20,
        width: 20,
    },
    googleText: {
        fontSize: 20,
        fontFamily: fonts.SemiBold,
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 5,
    },
    accountText: {
        color: colors.primary,
        fontFamily: fonts.Regular,
        marginTop: 20,
        fontSize: 15,
    },
    signinL: {
        marginTop: 20,
    },
    signinText: {
        fontSize: 18,
        color: colors.bottom1,
    },
});