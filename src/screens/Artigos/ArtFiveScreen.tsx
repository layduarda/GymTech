import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export function ArtFiveScreen() {

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
                        Frequência cardíaca
                    </Text>
                    <Text style={styles.subTitle}>
                        A Importância do Monitoramento da Frequência Cardíaca no Treino de Musculação
                    </Text>
                    <Text style={styles.text}>
                        O monitoramento da frequência cardíaca é amplamente utilizado em atividades cardiovasculares, como corrida e ciclismo,
                        mas seu papel no treino de musculação é igualmente valioso. A frequência cardíaca (FC) indica a quantidade de batimentos
                        cardíacos por minuto e é um indicador importante da intensidade do exercício e da resposta do corpo ao esforço. Através do
                        monitoramento da FC, praticantes de musculação podem ajustar a intensidade do treino de forma mais eficaz e garantir a
                        segurança durante a prática.
                    </Text>

                    <Text style={styles.subTitle2}>
                        Benefícios do Monitoramento
                    </Text>

                    <Text style={styles.textF}>Ajuste da intensidade do treino: </Text>
                    <Text style={styles.estiloTipos}>Controlar a frequência cardíaca na musculação garante que o esforço esteja na faixa
                        ideal para objetivos como hipertrofia, queima de gordura ou resistência muscular. Manter a frequência cardíaca elevada
                        em treinos intensos pode otimizar a queima de calorias e melhorar a eficiência do treino.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Melhoria na Recuperação: </Text>
                    <Text style={styles.estiloTipos}>Monitorar a frequência cardíaca entre as séries ajuda a avaliar se o corpo está recuperado o
                        suficiente para a próxima série, permitindo manter a qualidade do treino e evitar fadiga excessiva.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Zona Alvo para Diferentes Objetivos: </Text>
                    <Text style={styles.estiloTipos}>Dependendo do objetivo do treino, diferentes zonas de frequência cardíaca podem ser
                        atingidas:
                    </Text>
                    <Text style={styles.textT}>
                        Zona de queima de gordura (50-70% da FC máxima): Ideal para perda de peso, atingida em treinos com menor carga e maior
                        volume.
                    </Text>
                    <Text style={styles.textT}>
                        Zona cardio (70-85% da FC máxima): Melhora a resistência cardiovascular e maximiza o gasto energético.
                    </Text>
                    <Text style={styles.textT}>
                        Zona de força muscular (acima de 85% da FC máxima): Focada no aumento de força, alcançada em treinos de alta intensidade
                        com menos descanso.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Prevenção de sobrecarga: </Text>
                    <Text style={styles.estiloTipos}>O excesso de esforço em treinos intensos pode sobrecarregar o sistema cardiovascular. Monitorar a
                        frequência cardíaca ajuda a evitar níveis excessivamente altos, reduzindo o risco de tontura, náuseas e complicações
                        cardíacas, especialmente para iniciantes ou pessoas com condições de saúde preexistentes.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Personalização e Feedback Imediato: </Text>
                    <Text style={styles.estiloTipos}>Dispositivos como smartwatches e cintas de frequência cardíaca fornecem dados em tempo
                        real, permitindo que o praticante ajuste o ritmo do treino. Isso possibilita uma personalização eficaz, garantindo que o
                        esforço esteja adequado ao condicionamento físico de cada indivíduo.
                    </Text>

                    <Text style={styles.subTitle2}>
                        Como Monitorar a Frequência Cardíaca
                    </Text>
                    <Text style={styles.estiloTipos}>
                        Para monitorar a frequência cardíaca durante a musculação, dispositivos como monitores de pulso, cintas torácicas e
                        relógios inteligentes são as opções mais comuns. Eles oferecem dados contínuos sobre os batimentos cardíacos e alertas
                        quando a FC está fora da zona desejada, permitindo ajustes imediatos na intensidade do treino.
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
    textT: {
        textAlign: 'left',
        fontFamily: fonts.Regular,
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