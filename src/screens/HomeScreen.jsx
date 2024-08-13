import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const HomeScreen = () => {
    const navigation = useNavigation()
    const handleLogin = () => {
        navigation.navigate("login")
    };

    const handleSignUp = () => {
        navigation.navigate("signup")
    };

    return (
        <View style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Image source={require("../assets/Image.png")} style={styles.bannerImage} />
            <Text style={styles.titulo}>Olá, seja bem-vindo!</Text>
            <Text style={styles.subTitle}>Acesse nosso software e desfrute de todos os seus recursos, para uma melhor
                experiência e qualidade de vida.
            </Text>
            <View style={styles.buttonHomeS}>
                <TouchableOpacity
                    style={[styles.loginButtonWrapper,
                    { backgroundColor: colors.primary },
                    ]}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signupButtonWrapper}
                    onPress={handleSignUp}
                >
                    <Text style={styles.signupButtonText}>Sign-up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    logo: {
        height: 40,
        width: 140,
        marginVertical: 40,
    },
    bannerImage: {
        width: 230,
        height: 250,
        marginVertical: 20,
    },
    titulo: {
        fontSize: 30,
        fontFamily: fonts.SemiBold,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.primary,
        marginTop: 40,
    },
    subTitle: {
        fontSize: 19,
        textAlign: 'center',
        color: colors.secondary,
        fontFamily: fonts.Medium,
        marginVertical: 20,
    },
    buttonHomeS: {
        flexDirection: "row",
        marginTop: 20,
        borderWidth: 2,
        borderColor: colors.primary,
        width: "80%",
        height: 60,
        borderRadius: 100,
    },
    loginButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: colors.primary,
        borderRadius: "100%",
        padding: 16,
    },
    loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.SemiBold,
    },
    signupButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        backgroundColor: colors.white,
        borderRadius: "98%",
        padding: 16,
    },
    signupButtonText: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
        color: colors.secondary,
    },
});