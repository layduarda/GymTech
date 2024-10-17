import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

import { useNavigation } from "@react-navigation/native";

// const handleArtOne = () => {
//     //@ts-ignore
//     navigation.navigate('artigo1')
// };

export function ListaHorizontal() {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    return (
        <View>
            <Text style={styles.titleArtigos}>
                Artigos
            </Text>
            <Text style={styles.subTitleArtigos}>
                Alguns dos nossos artigos para ajudar na sua
                qualidade de vida e melhorar sua jornada na
                vida fitness.
            </Text>

            <ScrollView horizontal={true}
                style={styles.containerArtigos}>
                <TouchableOpacity style={[styles.cardArt,
                styles.cardHorizontal]}
                // onPress={handleArtOne}
                >
                    <Text style={styles.textCard}>
                        O que é musculação?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.cardArt,
                styles.cardHorizontal]}>
                    <Text style={styles.textCard}>
                        O que são e como são causadas as lesões?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.cardArt,
                styles.cardHorizontal]}>
                    <Text style={styles.textCard}>
                        Tecnologia e a eficiência nos treinos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.cardArt,
                styles.cardHorizontal]}>
                    <Text style={styles.textCard}>
                        Tempo de descanso
                        adequado
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.cardArt,
                styles.cardHorizontal]}>
                    <Text style={styles.textCard}>
                        Monitoramento da frequência
                        cardíaca
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    titleArtigos: {
        fontSize: 24,
        fontFamily: fonts.SemiBold,
        padding: 8,
        marginLeft: 10,
        color: colors.roxo3,
    },
    subTitleArtigos: {
        fontSize: 15,
        fontFamily: fonts.Regular,
        marginLeft: 18,
        color: colors.black,
    },
    containerArtigos: {
        padding: 8,
    },
    cardArt: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        margin: 8,
    },
    cardHorizontal: {
        backgroundColor: colors.white,
        width: 120,
        height: "70%",
    },
    textCard: {
        fontFamily: fonts.Regular,
        fontSize: 12,
        color: colors.black,
    }
})