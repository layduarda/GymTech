import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export function ArtFourScreen() {

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
            <View style={styles.containerArtigo}>
                <View style={styles.containerTexts}>
                    <Text style={styles.titleArtigo}>
                        Tempo de descanso adequado
                    </Text>
                    <Text style={styles.subTitle}>
                        O Tempo de Descanso Adequado na Musculação: Importância para a Saúde e Resultados
                    </Text>
                    <Text style={styles.text}>
                        A prática de musculação é uma das formas mais eficazes de desenvolver força, resistência e massa muscular.
                        Contudo, muitos praticantes subestimam a importância do tempo de descanso entre as séries e os treinos. O descanso não é
                        apenas uma pausa; ele desempenha um papel crucial na recuperação muscular, na prevenção de lesões e na maximização dos
                        resultados.
                    </Text>

                    <Text style={styles.subTitle2}>
                        O que é o Tempo de Descanso?
                    </Text>
                    <Text style={styles.text}>
                        O tempo de descanso é o intervalo entre as séries de exercícios ou treinos, variando conforme o tipo de exercício,
                        objetivo e nível de condicionamento físico. Ele pode ser classificado em:
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Descanso curto (30-60 segundos):</Text>
                    <Text style={styles.text}> Usado em treinos de alta intensidade ou para resistência muscular.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Descanso moderado (1-2 minutos):</Text>
                    <Text style={styles.text}>
                        Ideal para a maioria dos treinos, permitindo recuperação para manter a intensidade.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Descanso longo (2-5 minutos): </Text>
                    <Text style={styles.text}>Comum em treinos de força máxima, onde cargas elevadas exigem mais tempo de recuperação.
                    </Text>

                    <Text style={styles.subTitle2}>
                        A Importância do Descanso na Musculação
                    </Text>
                    <Text style={styles.textF}>Recuperação Muscular: </Text>
                    <Text style={styles.estiloTipos}>O descanso permite que o corpo repare microlesões nas fibras musculares, prevenindo fadiga e
                        melhorando o
                        desempenho.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Prevenção de Lesões: </Text>
                    <Text style={styles.estiloTipos}>O descanso ajuda a evitar lesões por sobrecarga, reduzindo a tensão excessiva nos músculos e
                        articulações.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Melhoria do Desempenho: </Text>
                    <Text style={styles.estiloTipos}>Descansar adequadamente entre as séries mantém a intensidade e qualidade do exercício,
                        permitindo levantar mais peso e realizar mais repetições.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Aumento da Força e Massa Muscular:  </Text>
                    <Text style={styles.text}>Períodos de descanso adequados favorecem a hipertrofia, permitindo que os músculos
                        se recuperem e cresçam de forma eficiente.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Equilíbrio Hormonal: </Text>
                    <Text style={styles.estiloTipos}>O descanso regula a liberação de hormônios anabólicos, como testosterona e hormônio do crescimento,
                        essenciais para o desenvolvimento muscular.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.subTitle2}>
                        Como Implementar o Descanso Eficiente?
                    </Text>

                    <Text style={styles.textF}> Ouça seu corpo: </Text>
                    <Text style={styles.estiloTipos}>Se sentir fadiga excessiva, é importante ajustar o tempo de descanso para garantir uma recuperação
                        adequada e evitar sobrecarga.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Planeje seu Treino: </Text>
                    <Text style={styles.estiloTipos}>Estruture seu treino de modo que inclua períodos de descanso adequados entre as séries e exercícios.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Mantenha a Hidratação e Nutrição: </Text>
                    <Text style={styles.estiloTipos}>A hidratação e a alimentação adequadas ajudam na recuperação, otimizando o tempo de
                        descanso.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Varie o Tipo de Treino:</Text>
                    <Text style={styles.estiloTipos}>Alterne entre treinos de alta intensidade e treinos que permitam maior recuperação, equilibrando
                        os períodos de descanso.
                    </Text>
                </View>
                <View style={styles.containerFim}>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerArtigo: {
        flex: 1,
        backgroundColor: colors.white,
    },
    titleArtigo: {
        textAlign: 'center',
        fontFamily: fonts.SemiBold,
        fontSize: 22,
        color: colors.laranjaDetalhe,
        marginTop: 10,
        padding: 12,
    },
    containerHeader: {
        height: 35,
        backgroundColor: colors.roxo4,
        marginTop: 20,
        flexDirection: 'row',
    },
    containerTexts: {
        margin: 12,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: colors.roxo3,
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    subTitle: {
        textAlign: 'center',
        fontFamily: fonts.Regular,
        fontSize: 16,
        color: colors.black,
        marginTop: 4,
        marginBottom: 24,
    },
    subTitle2: {
        textAlign: 'left',
        fontFamily: fonts.Regular,
        fontSize: 17,
        color: colors.white,
        padding: 10,
        height: 40,
        width: "100%",
        backgroundColor: colors.roxo3,
        marginVertical: 16,
    },
    text: {
        textAlign: 'left',
        fontFamily: fonts.Light,
        fontSize: 15,
        color: colors.black,
        padding: 12,
        lineHeight: 27,
    },
    textF: {
        textAlign: 'left',
        fontFamily: fonts.Medium,
        fontSize: 17,
        color: colors.roxo3,
        paddingLeft: 12,
        margin: 4,
        marginBottom: 6,
        lineHeight: 27,
    },
    linhaText: {
        height: 1.4,
        backgroundColor: colors.laranjaDetalhe,
        margin: 15,
        lineHeight: 27,
    },
    estiloTipos: {
        textAlign: 'left',
        fontFamily: fonts.Light,
        fontSize: 15,
        color: colors.black,
        paddingLeft: 12,
        margin: 2,
        marginBottom: 10,
        lineHeight: 27,
    },
    containerFim: {
        height: 40,
        backgroundColor: colors.roxo4,
        marginTop: 10,
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
})