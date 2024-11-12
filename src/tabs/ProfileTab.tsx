import React, { useState } from 'react';

import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

import { useNavigation } from '@react-navigation/native';
import { ListaHorizontal } from '../components/ListaHorizontal';

import Ionicons from "react-native-vector-icons/Ionicons";
import { AppBar } from '../components/app.bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import auth from '@react-native-firebase/auth';

export function ProfileTab() {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);


    const handleTreino = () => {
        //@ts-ignore
        navigation.navigate('fichaD')
    };

    const handleFeed = () => {
        //@ts-ignore
        navigation.navigate('feed')
    };

    const handleAgenda = () => {
        //@ts-ignore
        navigation.navigate('agenda')
    };

    // const router = router();

    function handleLogOut() {
        const handleSignOut = () => {
            auth()
                .signOut()
                .then(() => {
                    alert('Você desconectou-se do sistema!');
                    // router.replace('/');
                })
                .catch((error) => {
                    const errorMessage = error.errorMessage;
                    alert(errorMessage);
                })

        }
    }
    const insets = useSafeAreaInsets();

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 60 }}>
            <AppBar title="" />
            <View style={styles.containerProfile}>
                <Text style={styles.titleProfile}>
                    Perfil
                </Text>
                <TouchableOpacity style={styles.iconEdit}>
                    <Ionicons name={"create-outline"} size={24}
                        color={colors.laranjaDetalhe} />
                </TouchableOpacity>

                <View style={styles.fotoProfile}>
                    <ImageBackground
                        imageStyle={styles.coverImage}
                        source={require('../utils/images/image_user.jpeg')}
                        resizeMode="cover">
                    </ImageBackground>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Nome completo:
                    </Text>
                    <Text style={styles.textP}>
                        Layslla Eduarda Oreti dos Santos
                    </Text>
                    <View style={styles.linhaText}></View>
                </View>

                <View style={styles.textProfile}>
                    <Text style={styles.title}>
                        Data de nascimento:
                    </Text>
                    <Text style={styles.textP}>
                        10/07/2006
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

                <View style={styles.campLogOut}>
                    <TouchableOpacity style={styles.buttonLogOut}
                        onPress={handleLogOut}
                    >
                        <Text style={styles.textLogOut}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: 200,
    },
    containerProfile: {
        width: "90%",
        height: "90%",
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
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: fonts.SemiBold,
        color: colors.laranjaDetalhe,
        marginBottom: 10,
    },
    fotoProfile: {
        height: 90,
        marginTop: 5,
        marginBottom: 50,
        alignItems: 'center',
        marginRight: 120,
    },
    coverImage: {
        borderWidth: 2.4,
        borderColor: colors.roxo3,
        borderRadius: 100,
        height: 110,
        width: 110,
        alignItems: 'center',
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
    iconEdit: {
        alignItems: 'center',
        marginBottom: 10,
    },
    campLogOut: {
        marginTop: 30,
        alignItems: 'center',
    },
    buttonLogOut: {
        backgroundColor: colors.laranja1,
        width: "90%",
        height: 55,
        borderWidth: 2,
        justifyContent: 'center',
        borderColor: colors.laranjaDetalhe,
        borderRadius: 30,
        marginTop: 18,
    },
    textLogOut: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'center',
        padding: 12,
        fontFamily: fonts.SemiBold,
    },
});
