import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export function ArtTwoScreen() {

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
                <View style={styles.textContainer}>
                    <Text style={styles.titleArtigo}>
                        O que são lesões?
                    </Text>
                    <Text style={styles.subTitle}>
                        Lesões: Definição, Tipos e Causas
                    </Text>
                    <Text style={styles.text}>
                        Lesões são alterações no funcionamento normal dos tecidos do corpo, resultantes de algum tipo de trauma ou condição
                        anormal. Elas podem ser agudas, ocorrendo de forma súbita devido a um evento específico, ou crônicas, que se desenvolvem
                        ao longo do tempo devido ao uso repetitivo ou sobrecarga de uma determinada área do corpo. Em geral, as lesões limitam as
                        capacidades físicas, causando dor, inflamação, inchaço ou perda de função.
                    </Text>

                    <Text style={styles.subTitle2}>
                        Principais tipos de lesões
                    </Text>

                    <Text style={styles.textF}>
                        Lesões musculares:
                    </Text>
                    <Text style={styles.text}>
                        São danos causados ao tecido muscular devido à ruptura ou estiramento excessivo das fibras. Os tipos mais comuns são:
                    </Text>
                    <Text style={styles.estiloTipos}>
                        Distensão muscular: Ocorre quando o músculo é esticado além de sua capacidade, causando microlesões nas fibras.
                    </Text>
                    <Text style={styles.estiloTipos}>
                        Ruptura muscular: São mais grave, onde ocorre a ruptura total ou parcial das fibras musculares, muitas vezes causada por esforços intensos.
                    </Text>
                    <View style={styles.linhaText}>
                    </View>

                    <Text style={styles.textF}>
                        Lesões ósseas (fraturas):
                    </Text>
                    <Text style={styles.text}>
                        As fraturas são quebras ou fissuras nos ossos, geralmente causadas por traumas diretos, quedas ou impactos fortes. Elas podem ser:
                    </Text>
                    <Text style={styles.estiloTipos}>
                        Fratura simples: Quando o osso se quebra, mas não compromete a pele ou tecidos ao redor.
                    </Text>
                    <Text style={styles.estiloTipos}>
                        Fratura exposta: O osso quebrado perfura a pele, aumentando o risco de infecção.
                    </Text>
                    <View style={styles.linhaText}>
                    </View>

                    <Text style={styles.textF}>
                        Lesões articulares:
                    </Text>
                    <Text style={styles.text}>
                        Afetam as articulações, que são os pontos de conexão entre dois ossos. Entre as principais lesões estão:
                    </Text>
                    <Text style={styles.estiloTipos}>
                        Entorses: Ocorrem quando os ligamentos que conectam os ossos nas articulações são esticados ou rompidos,
                        geralmente em torno de tornozelos, joelhos e pulsos.
                    </Text>
                    <Text style={styles.estiloTipos}>
                        Luxações: Acontecem quando os ossos de uma articulação se deslocam de sua posição normal, geralmente após um trauma.
                    </Text>
                    <View style={styles.linhaText}>

                    </View>

                    <Text style={styles.textF}>
                        Lesões nos tendões e ligamentos:
                    </Text>
                    <Text style={styles.text}>
                        Tendões e ligamentos são estruturas fibrosas que conectam músculos e ossos, e podem ser lesionados por sobrecarga ou
                        movimentos bruscos. As mais comuns são:                    </Text>
                    <Text style={styles.estiloTipos}>
                        Tendinite: Inflamação dos tendões, muitas vezes causada por uso repetitivo ou sobrecarga.
                    </Text>
                    <Text style={styles.estiloTipos}>
                        Ruptura de ligamentos: Comum em esportes, como no caso do rompimento do ligamento cruzado anterior (LCA) no joelho.
                    </Text>
                    <View style={styles.linhaText}>

                    </View>

                    <Text style={styles.textF}>
                        Lesões nervosas:
                    </Text>
                    <Text style={styles.text}>
                        Podem ser causadas por traumas diretos ou compressão nervosa. Um exemplo é a síndrome do túnel do carpo, que ocorre quando o nervo mediano
                        é comprimido no punho, causando dor e dormência.
                    </Text>

                    <Text style={styles.subTitle2}>
                        Causas mais comuns de lesões
                    </Text>
                    <Text style={styles.text}>
                        Traumas diretos: Impactos, colisões ou quedas são as causas mais frequentes de lesões agudas, como fraturas, luxações
                        e lesões musculares. Atividades físicas e esportes de contato aumentam o risco de lesões traumáticas.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.text}>
                        Esforço repetitivo: Movimentos repetitivos, especialmente sem descanso adequado, podem causar lesões crônicas como
                        tendinites e bursites. Trabalhadores de escritório, por exemplo, muitas vezes desenvolvem lesões por repetição, como a
                        síndrome do túnel do carpo.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.text}>
                        Sobrecarga muscular e articular: Excesso de esforço físico sem um condicionamento adequado ou recuperação suficiente
                        pode resultar em lesões por sobrecarga, como distensões musculares e rupturas de ligamentos.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.text}>
                        Má postura: O alinhamento inadequado do corpo durante a realização de atividades, como sentar, levantar ou carregar
                        peso, pode levar ao desenvolvimento de lesões ao longo do tempo, especialmente na coluna, joelhos e ombros.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.text}>
                        Aquecimento inadequado: A falta de preparação dos músculos e articulações antes de atividades físicas intensas aumenta
                        a vulnerabilidade a lesões, como distensões e entorses.
                    </Text>
                    <View style={styles.linhaText}></View>

                    <Text style={styles.text}>
                        Fadiga: Quando os músculos estão cansados, eles perdem a capacidade de estabilizar e proteger as articulações, tornando
                        o corpo mais suscetível a lesões. Isso é comum no final de treinos ou competições extenuantes.
                    </Text>

                    <Text style={styles.subTitle2}>
                        Prevenção de lesões
                    </Text>
                    <Text style={styles.text}>
                        A prevenção de lesões envolve várias práticas, como aquecimento adequado antes das atividades físicas, alongamentos
                        regulares, fortalecimento muscular e uso de equipamentos de proteção quando necessário. Manter uma postura correta no
                        dia a dia e evitar sobrecargas também são medidas eficazes para prevenir lesões, especialmente as crônicas. Além disso,
                        respeitar os limites do corpo e ter orientação profissional durante atividades físicas ou esportes é essencial para
                        minimizar riscos.
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
    textContainer: {
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
        fontSize: 17,
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