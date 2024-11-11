import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export function ArtThreeScreen() {

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
                        Tecnologia e Eficiência
                    </Text>
                    <Text style={styles.subTitle}>
                        Tecnologia e Eficiência nos Treinos: Como Inovações Melhoram o Desempenho
                    </Text>
                    <Text style={styles.text}>
                        A integração da tecnologia ao mundo dos treinos tem revolucionado a forma como as pessoas se exercitam, monitoram seu
                        desempenho e atingem seus objetivos. Do uso de aplicativos de monitoramento de atividades físicas a equipamentos
                        inteligentes, a tecnologia não só otimiza o tempo de treino como também aumenta a eficiência dos resultados,
                        tornando possível personalizar programas de exercícios, acompanhar métricas de desempenho em tempo real e promover um
                        melhor entendimento do corpo.
                    </Text>

                    <Text style={styles.subTitle2}>
                        A tecnologia como aliada nos treinos
                    </Text>
                    <Text style={styles.text}>
                        A tecnologia aplicada ao treinamento físico trouxe inúmeras inovações, transformando tanto o treino de atletas de alto
                        rendimento quanto de praticantes amadores. Entre os principais avanços, estão o uso de wearables (dispositivos
                        vestíveis), aplicativos de treino, inteligência artificial e equipamentos inteligentes que auxiliam na execução e no
                        acompanhamento dos exercícios.
                    </Text>

                    <Text style={styles.textF}>Dispositivos vestíveis (wearables): </Text>
                    <Text style={styles.text}>
                        Wearables, como smartwatches e monitores de frequência cardíaca,
                        permitem acompanhar em tempo real métricas como frequência cardíaca, gasto calórico e qualidade do sono.
                        Eles ajudam a ajustar a intensidade dos treinos, controlar calorias e melhorar a recuperação, além de fornecer
                        alertas e feedback para otimizar os resultados durante os exercícios.
                    </Text>
                    <View style={styles.linhaText}>
                    </View>

                    <Text style={styles.textF}>Aplicativos de treino personalizados:</Text>
                    <Text style={styles.text}> Os aplicativos de treino utilizam inteligência artificial para criar planos
                        personalizados que melhoram a eficiência dos exercícios, considerando o nível físico e os objetivos do usuário. Eles
                        oferecem acompanhamento do progresso, acesso a diversos treinos e interação social, permitindo que os usuários
                        compartilhem conquistas e compitam, promovendo a motivação.
                    </Text>
                    <View style={styles.linhaText}>
                    </View>

                    <Text style={styles.textF}>Equipamentos inteligentes: </Text>
                    <Text style={styles.text}>Os equipamentos de ginástica estão se tornando mais inteligentes, ajustando automaticamente a
                        carga conforme a capacidade do usuário e fornecendo feedback em tempo real para corrigir a postura e evitar lesões.
                        Exemplos incluem plataformas de força, que medem a força durante os exercícios, e máquinas de treino com realidade virtual
                        (VR), que criam ambientes variados para tornar os treinos mais motivadores.
                    </Text>
                    <View style={styles.linhaText}>
                    </View>

                    <Text style={styles.textF}>Inteligência artificial e big data: </Text>
                    <Text style={styles.text}>A inteligência artificial (IA) e o big data estão transformando o setor fitness ao
                        coletar e analisar dados sobre o desempenho dos usuários, oferecendo insights para melhorar a eficiência dos treinos e
                        evitar sobrecarga. Exemplos incluem a análise de movimento, que sugere ajustes para otimizar a biomecânica, e planos de
                        treino adaptáveis, que ajustam automaticamente a intensidade e os tipos de exercícios, garantindo progresso contínuo e
                        seguro.
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