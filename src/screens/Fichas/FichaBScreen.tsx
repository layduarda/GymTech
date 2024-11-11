import React, { useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

import { useNavigation } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
export function FichaBScreen() {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.containerF}>
                <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                    <Ionicons
                        name={"arrow-back-outline"}
                        color={colors.white}
                        size={20}
                    />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>
                    GymTech
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.containerFicha}>
                    <Text style={styles.titleFicha}>
                        Ficha B
                    </Text>
                    <TouchableOpacity style={styles.iconEdit}>
                        <Ionicons name={"create-outline"} size={25}
                            color={colors.laranjaDetalhe} />
                    </TouchableOpacity>

                    <Text style={styles.subtitleFicha}>
                        Bíceps e Costa + Abdômen
                    </Text>

                    <View style={styles.cont1}>
                        <Text style={styles.textExercicios}>
                            - Puxador (pulley) Frontal
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Remada baixa
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Serrote
                        </Text>
                    </View>

                    <View style={styles.cont2}>
                        <Text style={styles.textExercicios}>
                            - Rosca direta com barra reta
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Martelo em pé
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Rosca alternada com banco inclinado
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Rosca scott barra W
                        </Text>
                    </View>
                    <View style={styles.cont3}>
                        <Text style={styles.textExercicios}>
                            - Flexão do tronco (abdominal supra)
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Prancha abdominal (30 segundos cada lado)
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.bottomStart}>
                        {/* onPress={handleStart} */}
                        <Text style={styles.textStart}>
                            Iniciar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.roxo4,
        alignItems: 'center',
    },
    containerFicha: {
        marginTop: "6%",
        backgroundColor: colors.fundo,
        borderRadius: 20,
        width: "90%",
        alignItems: 'center',
        borderWidth: 1.8,
        borderColor: colors.roxo3,
        position: 'absolute',
    },
    titleFicha: {
        fontSize: 20,
        fontFamily: fonts.SemiBold,
        color: colors.roxo3,
        marginTop: 15,
        marginBottom: 5,
    },
    subtitleFicha: {
        fontSize: 19,
        fontFamily: fonts.Medium,
        color: colors.roxo3,
        marginVertical: 15,
        marginBottom: 16,
        textAlign: 'center',
    },
    textExercicios: {
        fontSize: 17,
        color: colors.black,
        marginVertical: 4,
        fontFamily: fonts.Regular,
        textAlign: 'left',
        paddingLeft: 12,
        padding: 2,
        // // borderWidth: 1,
        // // borderColor: colors.roxo12,
        // // backgroundColor: colors.roxo4,
    },
    cont1: {
        marginTop: 6,
        marginBottom: 12,
        height: "20%",
        width: "100%",
    },
    cont2: {
        height: "20%",
        width: "100%",
        marginBottom: 50,
    },
    cont3: {
        height: "15%",
        width: "100%",
    },
    bottomStart: {
        backgroundColor: colors.laranja1,
        width: "90%",
        borderWidth: 2,
        borderColor: colors.laranjaDetalhe,
        borderRadius: 40,
        marginTop: 10,
    },
    textStart: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'center',
        padding: 12,
        fontFamily: fonts.SemiBold,
    },
    iconEdit: {
    },
    backButtonWrapper: {
        height: 50,
        width: 50,
        marginTop: 40,
        marginLeft: 20,
    },
    containerF: {
        alignItems: 'center',
        backgroundColor: colors.roxo4,
        height: 62,
        flexDirection: 'row',
    },
    titleHeader: {
        color: colors.white,
        fontSize: 21,
        fontFamily: fonts.SemiBold,
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 90,
    },
}
)