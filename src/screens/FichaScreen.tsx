import React, { useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

import { useNavigation } from "@react-navigation/native";
import { AppBar } from '../components/app.bar';

import Ionicons from "react-native-vector-icons/Ionicons";
export function FichaScreen() {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                    <Ionicons
                        name={"arrow-back-outline"}
                        color={colors.laranjaDetalhe}
                        size={25}
                    />
                </TouchableOpacity>
                <View style={styles.containerF}>
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
                                Desenvolvimento com halteres
                            </Text>
                            <Text style={styles.textExercicios}>
                                Elevação lateral
                            </Text>
                            <Text style={styles.textExercicios}>
                                Elevação frontal
                            </Text>
                        </View>

                        <View style={styles.cont2}>
                            <Text style={styles.textExercicios}>
                                Tríceps coice
                            </Text>
                            <Text style={styles.textExercicios}>
                                Tríceps franês unilateral
                            </Text>
                            <Text style={styles.textExercicios}>
                                Trícpes testa
                            </Text>
                            <Text style={styles.textExercicios}>
                                Trícpes mergulho no banco
                            </Text>
                        </View>

                        <View style={styles.cont3}>
                            <Text style={styles.textExercicios}>
                                Flexão no chão
                            </Text>
                            <Text style={styles.textExercicios}>
                                Supino reto com barra
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
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    containerF: {
        alignItems: 'center',
    },
    containerFicha: {
        backgroundColor: colors.white,
        marginTop: 14,
        borderRadius: 20,
        width: "90%",
        paddingTop: 10,
        alignItems: 'center',
        borderWidth: 1.8,
        borderColor: colors.roxo3,
    },
    titleFicha: {
        fontSize: 20,
        fontFamily: fonts.SemiBold,
        color: colors.black,
    },
    subtitleFicha: {
        fontSize: 19,
        fontFamily: fonts.Medium,
        color: colors.roxo1,
        marginVertical: 20,
        textAlign: 'center',
    },
    textExercicios: {
        fontSize: 18,
        color: colors.black,
        marginVertical: 4,
        fontFamily: fonts.Regular,
        textAlign: 'center',
        borderWidth: 1.2,
        borderColor: colors.roxo3,
        backgroundColor: colors.roxo6,
    },
    cont1: {
        marginBottom: 6,
        height: "20%",
        borderColor: colors.roxo3,
        width: "100%",
    },

    cont2: {
        marginBottom: 40,
        height: "20%",
        borderColor: colors.roxo3,
        width: "100%",
    },
    cont3: {
        height: "30%",
        borderColor: colors.roxo3,
        width: "100%",
    },
    bottomStart: {
        marginTop: 20,
        backgroundColor: colors.laranja1,
        width: "90%",
        height: 50,
        borderWidth: 1.5,
        borderColor: colors.laranjaDetalhe,
        borderRadius: 40,
    },
    textStart: {
        fontSize: 18,
        color: colors.white,
        textAlign: 'center',
        padding: 12,
        fontFamily: fonts.Regular,
    },
    iconEdit: {
    },
    backButtonWrapper: {
        height: 20,
        width: 20,
        marginTop: 30,
        marginLeft: 15
    },
}
)