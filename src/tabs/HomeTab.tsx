import React, { useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

import { useNavigation } from "@react-navigation/native";
import { ListaHorizontal } from '../components/ListaHorizontal';

import Ionicons from "react-native-vector-icons/Ionicons";
import { AppBar } from '../components/app.bar';

export function HomeTab() {
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

    const handleFichaI = () => {
        //@ts-ignore
        navigation.navigate('fichaI')
    };

    return (
        <ScrollView style={styles.container}>
            <AppBar title="" />
            <View style={styles.containerTwo}>
                <TouchableOpacity style={styles.card}
                    onPress={handleTreino}
                >
                    <Text style={styles.titleCard}>Treino do dia</Text>
                    <Text style={styles.subTitleCard}>Ficha D</Text>
                    {/*botão ir para a ficha do treino do dia*/}
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={handleFichaI}
            >
                <Text>Anamnese</Text>
            </TouchableOpacity>

            <View style={styles.containerCard}
            >
                <TouchableOpacity style={[styles.card1]}
                    onPress={handleFeed}
                >
                    <Ionicons name={"image-outline"} size={25}
                        color={colors.laranjaDetalhe} />
                    <Text style={styles.textCard1}>Feed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card2]}
                    onPress={handleAgenda}
                >
                    <Ionicons name={"calendar-outline"} size={25}
                        color={colors.laranjaDetalhe} />
                    <Text style={styles.textCard2}>Calendário</Text>
                </TouchableOpacity>
            </View>
            <ListaHorizontal />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    containerTwo: {
        alignItems: 'center',
    },
    card: {
        marginTop: 35,
        borderWidth: 1.2,
        borderColor: colors.roxo5,
        width: "90%",
        backgroundColor: colors.white,
        borderRadius: 25,
        marginBottom: 5,
    },
    titleCard: {
        fontSize: 20,
        fontFamily: fonts.SemiBold,
        paddingHorizontal: 10,
        textAlign: 'center',
        color: colors.white,
        marginTop: 20,
        backgroundColor: colors.roxo5,
    },
    subTitleCard: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: fonts.Medium,
        padding: 1,
        margin: 15,
        color: colors.black,
    },
    containerCard: {
        flexDirection: "row",
        marginTop: 20,
        width: "100%",
        marginBottom: 20,
    },
    card1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "35%",
        padding: 16,
        backgroundColor: colors.white,
        marginLeft: 40,
        borderWidth: 1.3,
        borderColor: colors.roxo1,
        borderRadius: 25,
    },
    textCard1: {
        color: colors.black,
        fontSize: 18,
        fontFamily: fonts.Regular,
    },
    card2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "35%",
        backgroundColor: colors.white,
        padding: 16,
        marginLeft: 40,
        borderWidth: 1.3,
        borderColor: colors.roxo1,
        borderRadius: 25,
    },
    textCard2: {
        color: colors.black,
        fontSize: 18,
        fontFamily: fonts.Regular,
    },
}
)