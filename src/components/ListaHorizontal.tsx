import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

import { useNavigation } from "@react-navigation/native";

export function ListaHorizontal() {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const handleArtOne = () => {
        //@ts-ignore
        navigation.navigate('artigo1')
    };

    const handleArtTwo = () => {
        //@ts-ignore
        navigation.navigate('artigo2')
    };

    const handleArtThree = () => {
        //@ts-ignore
        navigation.navigate('artigo3')
    };

    const handleArtFour = () => {
        //@ts-ignore
        navigation.navigate('artigo4')
    };

    const handleArtFive = () => {
        //@ts-ignore
        navigation.navigate('artigo5')
    };

    const newLocal = '../assets/ImageCard1.webp';
    return (
        <View>
            <Text style={styles.titleArtigos}>
                Artigos
            </Text>
            <Text style={styles.subTitleArtigos}>
                Confira nossos artigos para melhorar sua qualidade de vida e
                potencializar sua jornada no mundo fitness.
            </Text>

            <ScrollView horizontal={true}
                style={styles.containerArtigos}>
                <TouchableOpacity style={[styles.cardArt,
                styles.cardHorizontal]}
                    onPress={handleArtOne}
                >
                    <ImageBackground
                        imageStyle={styles.coverImage}
                        source={require('../assets/imagens_card/imageCard1.webp')}
                        resizeMode="cover"
                        style={styles.cardCover}>
                        <Text style={styles.textCard}>
                            O que é musculação?
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.cardArt,
                styles.cardHorizontal]}
                    onPress={handleArtTwo}
                >
                    <ImageBackground
                        imageStyle={styles.coverImage}
                        source={require('../assets/imagens_card/imageCard2.webp')}
                        resizeMode="cover"
                        style={styles.cardCover}>
                        <Text style={styles.textCard}>
                            Lesões e suas causas
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.cardArt,
                styles.cardHorizontal]}
                    onPress={handleArtThree}
                >
                    <ImageBackground
                        imageStyle={styles.coverImage}
                        source={require('../assets/imagens_card/imageCard3.webp')}
                        resizeMode="cover"
                        style={styles.cardCover}>
                        <Text style={styles.textCard}>
                            Tecnologia e a eficiência nos treinos
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.cardArt,
                styles.cardHorizontal]}
                    onPress={handleArtFour}
                >
                    <ImageBackground
                        imageStyle={styles.coverImage}
                        source={require('../assets/imagens_card/imageCard4.webp')}
                        resizeMode="cover"
                        style={styles.cardCover}>
                        <Text style={styles.textCard}>
                            Tempo de descanso adequado
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.cardArt,
                styles.cardHorizontal]}
                    onPress={handleArtFive}
                >
                    <ImageBackground
                        imageStyle={styles.coverImage}
                        source={require('../assets/imagens_card/imageCard5.webp')}
                        resizeMode="cover"
                        style={styles.cardCover}>
                        <Text style={styles.textCard}>
                            Monitoramento da frequência
                            cardíaca
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    coverImage: {
        borderRadius: 10,
        opacity: 0.7,
    },
    titleArtigos: {
        fontSize: 24,
        fontFamily: fonts.SemiBold,
        padding: 8,
        marginLeft: 10,
        color: colors.roxo3,
    },
    cardCover: {
        flex: 1,
        justifyContent: 'center',
    },
    subTitleArtigos: {
        fontSize: 15,
        fontFamily: fonts.Regular,
        marginLeft: 18,
        color: colors.black,
        paddingRight: 12,
    },
    containerArtigos: {
        padding: 8,
    },
    cardArt: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
        height: 165,
    },
    cardHorizontal: {
        backgroundColor: colors.white,
        width: 120,
    },
    textCard: {
        fontFamily: fonts.Regular,
        fontSize: 10,
        color: colors.black,
        textAlign: 'left',
        backgroundColor: colors.white,
        opacity: 0.8,
        borderRadius: 10,
        marginTop: 110,
        padding: 6,
    }
})