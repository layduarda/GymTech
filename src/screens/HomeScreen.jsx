import { Image, StyleSheet, View, Text, Touchable } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()
    const handleLogin = () => {
        navigation.navigate("login")
    }
  return (
    <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo}/>
        <Image source={require("../assets/Image.png")} style={styles.bannerImage} />
        <Text style={styles.titulo}>Lorem, ipsum dolor.</Text>
        <Text style={styles.subTitle}>Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Doloribus ex 
            officiis molestiae architecto voluptate itaque.
        </Text>
        <View style={styles.buttonHomeS}>
            <TouchableOpacity 
            style={[styles.loginButtonWrapper, 
                {backgroundColor: colors.primary},
                ]}
                onPress={handleLogin}
                >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButtonWrapper}>
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
        fontSize: 20,
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
        backgroundColor: colors.primary,
        borderRadius: "98%",
        padding: 18,
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
        padding: 18,
    },
    signupButtonText: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
        backcolor: colors.secondary,
    },
});