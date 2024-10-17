import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

export const WelcomeScreen = () => {
    const navigation = useNavigation()
    const handleLogin = () => {
        //@ts-ignore
        navigation.navigate("login")
    };

    const handleSignUp = () => {
        //@ts-ignore
        navigation.navigate("signup")
    };

    return (
        <View style={styles.container}>
            <Image source={require("../assets/Image.png")} style={styles.bannerImage} />
            <Text style={styles.titulo}>Olá, seja bem-vindo!</Text>
            <Text style={styles.subTitle}>Acesse nosso software e desfrute de todos os seus recursos, para uma melhor
                experiência e qualidade de vida.
            </Text>

            <View style={styles.buttonHomeS}>
                <TouchableOpacity
                    style={[styles.loginButtonWrapper,
                    { backgroundColor: colors.roxo2 },
                    { width: "180%" },
                    ]}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.signupButtonWrapper,
                    ]}
                    onPress={handleSignUp}
                >
                    <Text style={styles.signupButtonText}>Sign-up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    bannerImage: {
        width: 400,
        height: 250,
        marginVertical: 10,
        marginTop: 90,
    },
    titulo: {
        fontSize: 30,
        fontFamily: fonts.SemiBold,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.roxo1,
        marginTop: 40,
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.secondary,
        fontFamily: fonts.Medium,
        marginVertical: 20,
        padding: 15,
    },
    buttonHomeS: {
        flexDirection: "row",
        marginTop: 20,
        borderWidth: 1,
        borderColor: colors.roxo2,
        width: "90%",
        height: 60,
        borderRadius: 100,
    },
    loginButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        padding: 16,
        backgroundColor: colors.roxo4,
        borderRadius: 100,
    },
    loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.SemiBold,
    },
    signupButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "90%",
        backgroundColor: colors.white,
        padding: 16,
        marginLeft: 90,
        borderRadius: 100,
    },
    signupButtonText: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
        color: colors.roxo4,
    },
});