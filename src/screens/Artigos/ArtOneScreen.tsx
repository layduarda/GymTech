import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export function ArtOneScreen() {

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
                        O que é musculação?
                    </Text>
                    <Text style={styles.subTitle}>
                        Musculação: Definição, Benefícios e Importância
                    </Text>
                    <Text style={styles.text}>
                        A musculação é um método de treinamento físico voltado para o desenvolvimento da força, resistência e hipertrofia
                        (crescimento) muscular. Ela pode ser praticada com o uso de equipamentos como halteres, barras, máquinas guiadas ou
                        através de exercícios que utilizam o próprio peso corporal como resistência. Através da repetição de movimentos controlados,
                        os músculos são submetidos a esforços progressivos, o que provoca pequenas lesões nas fibras musculares. No processo de
                        recuperação dessas lesões, o músculo se fortalece e aumenta de volume.
                    </Text>

                    <Text style={styles.subTitle2}>
                        Benefícios da musculação
                    </Text>
                    <Text style={styles.text}>
                        A musculação oferece uma ampla gama de benefícios que vão além da estética corporal. Dentre os principais benefícios,
                        podemos destacar:
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Aumento da força muscular: </Text>
                    <Text style={styles.estiloTipos}>
                        O treinamento com pesos melhora a capacidade dos músculos de exercer força, tornando as
                        atividades cotidianas, como carregar objetos, muito mais fáceis.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Melhora da saúde óssea: </Text>
                    <Text style={styles.estiloTipos}>
                        A musculação ajuda a aumentar a densidade óssea, o que é fundamental para a prevenção de
                        doenças como a osteoporose, especialmente em mulheres após a menopausa.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Prevenção de lesões: </Text>
                    <Text style={styles.estiloTipos}>
                        Fortalecer os músculos, ligamentos e tendões contribui para a estabilidade das articulações,
                        reduzindo o risco de lesões, especialmente em pessoas que praticam esportes ou atividades físicas de impacto.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Melhora do metabolismo: </Text>
                    <Text style={styles.estiloTipos}>
                        A musculação é eficaz para acelerar o metabolismo, pois o aumento da massa muscular faz com
                        que o corpo queime mais calorias, mesmo em repouso. Isso ajuda na perda e controle de peso.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Melhoria da postura e equilíbrio:</Text>
                    <Text style={styles.estiloTipos}>
                        Com o fortalecimento dos músculos estabilizadores, o corpo consegue manter uma
                        postura adequada, prevenindo dores e lesões posturais.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Saúde mental:</Text>
                    <Text style={styles.estiloTipos}>
                        A prática regular de musculação contribui para a melhora do humor e da autoestima, além de reduzir
                        sintomas de ansiedade e depressão. A liberação de endorfinas durante o treino é um dos fatores que explicam esse
                        benefício.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.textF}>Longevidade e qualidade de vida:</Text>
                    <Text style={styles.estiloTipos}>
                        A musculação promove a longevidade ao prevenir a perda de massa muscular (sarcopenia)
                        com o envelhecimento, garantindo que o indivíduo mantenha sua autonomia e qualidade de vida por mais tempo.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.subTitle2}>
                        Como funciona a musculação?
                    </Text>
                    <Text style={styles.text}>
                        O princípio básico da musculação é a sobrecarga progressiva, que envolve aumentar gradualmente a carga ou a intensidade
                        dos exercícios conforme o corpo se adapta. Isso pode ser feito aumentando repetições, séries, peso ou diminuindo o tempo
                        de descanso. Os exercícios dividem-se em compostos, que trabalham vários grupos musculares ao mesmo tempo
                        (como agachamento e supino), e isolados, que focam em um único grupo muscular (como rosca direta e extensão de pernas).
                    </Text>

                    <Text style={styles.subTitle2}>
                        A importância da orientação profissional
                    </Text>
                    <Text style={styles.text}>
                        Apesar dos inúmeros benefícios, a musculação, se feita de maneira inadequada, pode trazer riscos à saúde,
                        como lesões musculares e articulares. Por isso, é fundamental contar com a orientação de um profissional de
                        educação física, que poderá elaborar um plano de treinamento personalizado, levando em consideração os objetivos e as
                        limitações individuais de cada praticante.
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
        // borderRadius: 20,
        // borderWidth: 1.2,
        // borderColor: colors.roxo3,
        // height: "90%",
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