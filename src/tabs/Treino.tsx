import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from "react";
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

export function Treino() {
    return (
        <ScrollView style={styles.container}>
        <View style={styles.containerTwo}>
            <View style={styles.fichaTreino}>
                <Text style={styles.textFicha}>Ficha A</Text>
                <Text style={styles.subTitleTreino}>Glúteo e Posterior + Cardio</Text>
                <Text style={styles.textTreino}>Abdutora</Text>
            </View>

            <View style={styles.fichaTreino}>
                <Text style={styles.textFicha}>Ficha B</Text>
                <Text style={styles.subTitleTreino}>Costa e Bíceps + Cardio</Text>
                <Text style={styles.textTreino}>Abdutora</Text>
            </View>

            <View style={styles.fichaTreino}>
                <Text style={styles.textFicha}>Ficha C</Text>
                <Text style={styles.subTitleTreino}>Quadríceps + Cardio</Text>
                <Text style={styles.textTreino}>Abdutora</Text>
            </View>

            <View style={styles.fichaTreino}>
                <Text style={styles.textFicha}>Ficha D</Text>
                <Text style={styles.subTitleTreino}>Peito, ombro e tríceps + Cardio</Text>
                <Text style={styles.textTreino}>Abdutora</Text>
            </View>

            <View style={styles.fichaTreino}>
                <Text style={styles.textFicha}>Ficha E</Text>
                <Text style={styles.subTitleTreino}>Abdomen + Cardio</Text>
                <Text style={styles.textTreino}>Abdutora</Text>
            </View>

            <View style={styles.fichaEspecializada}>
                <Text style={styles.treinoEspecializado}>
                    Fichas de treinos especializados
                </Text>
            </View>
        </View>
    </ScrollView>
    );
}

export default Treino;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fundo,
    },
    containerTwo: {
        alignItems: 'center',
    },
    fichaTreino: {
        marginTop: "10%",
        borderWidth: 1,
        borderColor: colors.fichas,
        width: "90%",
        backgroundColor: colors.white,
        borderRadius: 25,
        marginBottom: 5,
    },
    textFicha: {
        fontSize: 20,
        fontFamily: fonts.SemiBold,
        paddingHorizontal: 10,
        textAlign: 'center',
        color: colors.white,
        marginTop: 20,
        backgroundColor: colors.fichas,
    },
    subTitleTreino: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.Medium,
        padding: 1,
    },
    textTreino: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.primary,
        fontFamily: fonts.Regular,
        padding: 1,
    },
    fichaEspecializada: {
        marginVertical: 25,
        borderWidth: 1,
        borderColor: colors.fichas,
        width: "90%",
        backgroundColor: colors.fichaE,
        borderRadius: 20,
        marginBottom: 5,
    },
    treinoEspecializado: {
        fontSize: 17,
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.Regular,
        padding: 2,
    },
})