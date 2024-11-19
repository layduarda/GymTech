import React, { useEffect, useState } from 'react';

import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';


import { signOut } from 'firebase/auth';
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppBar } from '../components/app.bar';
import { auth } from '../firebase';
import { UserDetails } from '../models/UserDetails';
import { UserDetailsService } from '../services/user-service';

export function ProfileTab() {
    const [profile, setProfile] = useState<UserDetails | undefined>(undefined);
    const service = new UserDetailsService();

    useEffect(() => {
        service.findByUserId(auth.currentUser.uid).then((u) => {
            if (u) setProfile(u)
        });
    }, [])

    const handleLogOut = async () => {
        await signOut(auth);
    };

    return (
        <ScrollView style={styles.container}>
            <AppBar title="" />
            <View style={styles.containerProfile}>

                <View style={styles.fotoProfile}>
                    <ImageBackground
                        imageStyle={styles.coverImage}
                        source={require('../utils/images/image_user.jpeg')}
                        resizeMode="cover">
                    </ImageBackground>
                </View>

                <Text style={styles.titleProfile}>
                    {auth.currentUser.displayName}
                </Text>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Data de nascimento:
                    </Text>
                    <Text style={styles.textP}>
                        {profile && profile.dateOfBirth}
                    </Text>
                    <View style={styles.linhaText}></View>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Sexo:
                    </Text>
                    <Text style={styles.textP}>
                        Feminino
                    </Text>
                    <View style={styles.linhaText}></View>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Objetivo:
                    </Text>
                    <Text style={styles.textP}>
                        Hipertrofia
                    </Text>
                    <View style={styles.linhaText}></View>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Peso (Kg):
                    </Text>
                    <Text style={styles.textP}>
                        53
                    </Text>
                    <View style={styles.linhaText}></View>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Altura (Cm):
                    </Text>
                    <Text style={styles.textP}>
                        163
                    </Text>
                    <View style={styles.linhaText}></View>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Possui alguma doença crônica?:
                    </Text>
                    <Text style={styles.textP}>
                        Não
                    </Text>
                    <View style={styles.linhaText}></View>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Faz uso de medicação controlada?:
                    </Text>
                    <Text style={styles.textP}>
                        Não
                    </Text>
                    <View style={styles.linhaText}></View>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Já passou por alguma cirurgia?:
                    </Text>
                    <Text style={styles.textP}>
                        Não
                    </Text>
                    <View style={styles.linhaText}></View>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Já sofreu alguma lesão?:
                    </Text>
                    <Text style={styles.textP}>
                        Não
                    </Text>
                    <View style={styles.linhaText}></View>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Já praticou/pratica algum esporte?:
                    </Text>
                    <Text style={styles.textP}>
                        Não
                    </Text>
                    <View style={styles.linhaText}></View>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Já praticou musculação:
                    </Text>
                    <Text style={styles.textP}>
                        Sim
                    </Text>
                </View>
            </View>

            <View style={styles.campLogOut}>
                <TouchableOpacity style={styles.buttonLogOut}
                    onPress={handleLogOut}
                >
                    <Text style={styles.textLogOut}>
                        Log Out
                    </Text>
                    <Ionicons name={"log-out-outline"} size={28} color={colors.white} style={styles.iconLogOut} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    containerProfile: {
        width: "90%",
        height: "80%",
        backgroundColor: colors.fundo,
        marginLeft: 22,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 30,
        borderWidth: 1.2,
        borderColor: colors.roxo3,
        paddingBottom: 90,
    },
    titleProfile: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: fonts.SemiBold,
        color: colors.laranjaDetalhe,
        marginBottom: 20,
        marginTop: 10,
    },
    fotoProfile: {
        height: 90,
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center',
        marginRight: "35%",
    },
    coverImage: {
        borderWidth: 2.4,
        borderColor: colors.roxo3,
        borderRadius: 100,
        height: 130,
        width: 130,
    },
    textProfile: {
    },
    title: {
        fontFamily: fonts.Medium,
        color: colors.roxo1,
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 30,
        marginBottom: 6,
    },
    textP: {
        fontFamily: fonts.Light,
        color: colors.black,
        fontSize: 14,
        textAlign: 'left',
        marginLeft: 30,
        marginBottom: 4,
    },
    linhaText: {
        height: 0.90,
        backgroundColor: colors.roxo3,
        margin: 8,
        lineHeight: 27,
        marginLeft: 30,
        marginRight: 30,
    },
    campLogOut: {
        marginBottom: 20,
        alignItems: 'center',
    },
    buttonLogOut: {
        backgroundColor: colors.laranjaDetalhe,
        width: "88%",
        height: 43,
        borderWidth: 2,
        flexDirection: 'row',
        borderColor: colors.laranja8,
        borderRadius: 30,
        marginTop: 18,
    },
    textLogOut: {
        color: colors.white,
        fontSize: 20,
        fontFamily: fonts.Regular,
        textAlign: "center",
        padding: 6,
        marginLeft: "35%",
    },
    iconLogOut: {
        padding: 6,
        marginLeft: "0%",
    },
});
