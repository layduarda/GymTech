import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from "react";
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppBar } from '../components/app.bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function TreinoTab() {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const handleFichaA = () => {
        //@ts-ignore
        navigation.navigate('fichaA')
    };

    const handleFichaB = () => {
        //@ts-ignore
        navigation.navigate('fichaB')
    };

    const handleFichaC = () => {
        //@ts-ignore
        navigation.navigate('fichaC')
    };

    const handleFichaD = () => {
        //@ts-ignore
        navigation.navigate('fichaD')
    };

    const handleFichaE = () => {
        //@ts-ignore
        navigation.navigate('fichaE')
    };

    return (
        <ScrollView style={styles.container}>
            <AppBar title="" />
            
            <View style={styles.containerTwo}>

                <TouchableOpacity style={styles.cardTreinoTopo}
                onPress={handleFichaA}
                >
                    <Text style={styles.titleFicha}>
                        Ficha de treino A
                    </Text>
                    <View style={styles.linhaVerticalA}></View>
                    <Text style={styles.textFichaA}>
                        Glúteos e Posterior
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardTreino}
                onPress={handleFichaB}
                >
                    <Text style={styles.titleFicha}>
                        Ficha de treino B
                    </Text>
                    <View style={styles.linhaVerticalB}></View>
                    <Text style={styles.textFichaB}>
                        Bíceps e Costa
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardTreino}
                onPress={handleFichaC}
                >
                    <Text style={styles.titleFicha}>
                        Ficha de treino C
                    </Text>
                    <View style={styles.linhaVerticalC}></View>
                    <Text style={styles.textFichaC}>
                        Quadríceps e Panturrilha
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardTreino}
                onPress={handleFichaD}
                >
                    <Text style={styles.titleFicha}>
                        Ficha de treino D
                    </Text>
                    <View style={styles.linhaVerticalD}></View>
                    <Text style={styles.textFichaD}>
                        Ombro, Tríceps e Peito
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardTreino}
                onPress={handleFichaE}
                >
                    <Text style={styles.titleFicha}>
                        Ficha de treino E
                    </Text>
                    <View style={styles.linhaVerticalE}></View>
                    <Text style={styles.textFichaE}>
                        Cardio e Abdomen
                    </Text>
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
    containerTwo: {
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
    },
    cardTreino: {
        marginTop: 25,
        borderWidth: 1.6,
        borderColor: colors.roxo3,
        width: "95%",
        backgroundColor: colors.roxo6,
        borderRadius: 20,
        marginBottom: 16,
        height: 70,
        flexDirection: 'row',
        padding: 12,
    },
    cardTreinoTopo: {
        marginTop: 35,
        borderWidth: 1.6,
        borderColor: colors.roxo3,
        width: "95%",
        backgroundColor: colors.roxo6,
        borderRadius: 20,
        marginBottom: 16,
        height: 70,
        flexDirection: 'row',
        padding: 12,
    },
    titleFicha: {
        fontFamily: fonts.Medium,
        fontSize: 16,
        color: colors.roxo3,
        paddingLeft: 20,
        marginTop: 10,
    },
    textFichaA: {
        fontFamily: fonts.Regular,
        fontSize: 15,
        color: colors.roxo3,
        paddingLeft: 16,
        marginTop: 10,
        textAlign: 'right',
    },
    textFichaB: {
        fontFamily: fonts.Regular,
        fontSize: 15,
        color: colors.roxo3,
        paddingLeft: 80,
        marginTop: 10,
        textAlign: 'right',
    },
    textFichaC: {
        fontFamily: fonts.Regular,
        fontSize: 15,
        color: colors.roxo3,
        paddingLeft: 8,
        marginTop: 10,
        textAlign: 'right',
    },
    textFichaD: {
        fontFamily: fonts.Regular,
        fontSize: 15,
        color: colors.roxo3,
        paddingLeft: 20,
        marginTop: 10,
        textAlign: 'right',
    },
    textFichaE: {
        fontFamily: fonts.Regular,
        fontSize: 15,
        color: colors.roxo3,
        paddingLeft: 48,
        marginTop: 10,
        textAlign: 'right',
    },
    linhaVerticalA: {
        width: 1.0,
        height: 45,
        backgroundColor: colors.laranja8,
        marginRight: 30,
        marginLeft: 10,
    },
    linhaVerticalB: {
        width: 1.3,
        height: 45,
        backgroundColor: colors.laranja8,
        marginLeft: 10,
    },
    linhaVerticalC: {
        width: 1.3,
        height: 45,
        backgroundColor: colors.laranja8,
        marginLeft: 8,
    },
    linhaVerticalD: {
        width: 1.3,
        height: 45,
        backgroundColor: colors.laranja8,
        marginLeft: 12,
    },
    linhaVerticalE: {
        width: 1.3,
        height: 45,
        backgroundColor: colors.laranja8,
        marginLeft: 12,
    },
})