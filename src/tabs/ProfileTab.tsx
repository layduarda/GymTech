import { Image, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import React from "react";
import { fonts } from '../utils/fonts';
import { colors } from '../utils/colors';

import { AppBar } from '../components/app.bar';

export function Profile() {
    return (
        <ScrollView style={styles.container}>
            <AppBar title="" />
            <View style={styles.containerTwo}>
                <Text style={styles.textProfile}>
                    Em desenvolvimento
                </Text>
               {/* <View style={styles.inputCamp1}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nome completo"
                        inputMode="email"
                        placeholderTextColor={colors.white}
                        //keyboardType=""
                    />
                </View>

                <View style={styles.inputCamp2}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Idade"
                        inputMode="email"
                        placeholderTextColor={colors.white}
                        //keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputCamp3}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Objetivo"
                        inputMode="email"
                        placeholderTextColor={colors.white}
                        //keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputCamp4}>
                    <TextInput
                        style={styles.textInput}
                        placeholder=""
                        inputMode="email"
                        placeholderTextColor={colors.white}
                        //keyboardType="email-address"
                    />
                </View> */}
            </View>
        </ScrollView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fundo,
    },
    containerTwo: {
        marginTop: 20,
        alignItems: 'center',
        width: "100%",
        backgroundColor: colors.roxo3,
    },
    textProfile: {
        justifyContent: 'center',
        color: colors.white,
        fontFamily: fonts.SemiBold,
        fontSize: 20,
    },
    inputCamp1: {
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 4,
        marginVertical: 14,
    },
    inputCamp2: {
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 4,
        marginVertical: 14,
    },
    inputCamp3: {
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 4,
        marginVertical: 14,
    },
    inputCamp4: {
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 4,
        marginVertical: 14,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
    },
})
