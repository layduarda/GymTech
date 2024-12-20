import React, { useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

import { useNavigation } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
export function FichaDScreen() {
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
                        Ficha D
                    </Text>
                    <TouchableOpacity style={styles.iconEdit}>
                        <Ionicons name={"create-outline"} size={25}
                            color={colors.laranjaDetalhe} />
                    </TouchableOpacity>

                    <Text style={styles.subtitleFicha}>
                        Ombro, Tríceps e Peito
                    </Text>

                    <View style={styles.cont1}>
                        <Text style={styles.textExercicios}>
                            - Desenvolvimento com halteres
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Elevação lateral
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Elevação frontal
                        </Text>
                    </View>

                    <View style={styles.cont2}>
                        <Text style={styles.textExercicios}>
                            - Tríceps coice
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Tríceps franês unilateral
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Trícpes testa
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Trícpes mergulho no banco
                        </Text>
                    </View>

                    <View style={styles.cont3}>
                        <Text style={styles.textExercicios}>
                            - Supino reto com barra
                        </Text>
                        <Text style={styles.textExercicios}>
                            - Flexão isométrica no chão
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.roxo4,
        alignItems: 'center',
    },
    containerFicha: {
        marginTop: "9%",
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
        marginTop: 10,
        marginBottom: 16,
        height: "20%",
        width: "100%",
    },
    cont2: {
        marginBottom: 30,
        height: "25%",
        width: "100%",
        paddingTop: 4,
    },
    cont3: {
        height: "12%",
        width: "100%",
    },
    bottomStart: {
        backgroundColor: colors.laranja1,
        width: "90%",
        borderWidth: 2,
        borderColor: colors.laranjaDetalhe,
        borderRadius: 40,
        marginTop: 10,
        marginBottom: 18,
    },
    textStart: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'center',
        padding: 12,
        fontFamily: fonts.Regular,
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