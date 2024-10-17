import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from "react";
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppBar } from '../components/app.bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Treino() {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    // const handleFichaA = () => {
    //     //@ts-ignore
    //     navigation.navigate('fichaA')
    // };
    // const handleFichaB = () => {
    //     //@ts-ignore
    //     navigation.navigate('fichaB')
    // };
    // const handleFichaC = () => {
    //     //@ts-ignore
    //     navigation.navigate('fichaC')
    // };
    // const handleFichaD = () => {
    //     //@ts-ignore
    //     navigation.navigate('fichaD')
    // };
    // const handleFichaE = () => {
    //     //@ts-ignore
    //     navigation.navigate('fichaE')
    // };

    return (
        <ScrollView style={styles.container}>
            <AppBar title="" />
            <View style={styles.containerTwo}>
                <View style={styles.cardTreino}>
                    <Ionicons name={"image-outline"} size={50}
                        color={colors.laranjaDetalhe} />
                    <Text style={styles.titleFicha}>
                        Ficha de treino A
                    </Text>
                </View>

                <View style={styles.cardTreino}>
                    <Ionicons name={"image-outline"} size={50}
                        color={colors.laranjaDetalhe} />
                    <Text style={styles.titleFicha}>
                        Ficha de treino B
                    </Text>
                </View>

                <View style={styles.cardTreino}>
                    <Ionicons name={"image-outline"} size={50}
                        color={colors.laranjaDetalhe} />
                    <Text style={styles.titleFicha}>
                        Ficha de treino C
                    </Text>
                </View>

                <View style={styles.cardTreino}>
                    <Ionicons name={"image-outline"} size={50}
                        color={colors.laranjaDetalhe} />
                    <Text style={styles.titleFicha}>
                        Ficha de treino D
                    </Text>
                </View>

                <View style={styles.cardTreino}>
                    <Ionicons name={"image-outline"} size={50}
                        color={colors.laranjaDetalhe} />
                    <Text style={styles.titleFicha}>
                        Ficha de treino E
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
        backgroundColor: colors.white,
    },
    containerTwo: {
        alignItems: 'center',
    },
    cardTreino: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: colors.roxo5,
        width: "90%",
        backgroundColor: colors.white,
        borderRadius: 20,
        marginBottom: 5,
        height: 70,
        flexDirection: 'row',
        padding: 12,
    },
    titleFicha: {
        fontFamily: fonts.Regular,
        fontSize: 16,
        color: colors.black,
        marginLeft: 80,
        marginTop: 10,
    },
})