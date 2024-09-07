import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
// import Routes from "../routes";

export function HomeTab() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerTwo}>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Treino do dia</Text>
                    <Text style={styles.subTitleCard}>Ficha D</Text>
                    {/*botão ir para a ficha do treino do dia*/}
                </View>
            </View>
        </ScrollView>
    );
}

export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fundo,
    },
    containerTwo: {
        alignItems: 'center',
    },
    card: {
        marginTop: "20%",
        borderWidth: 1,
        borderColor: colors.fichas,
        width: "90%",
        backgroundColor: colors.white,
        borderRadius: 25,
        marginBottom: 5,
    },
    titleCard: {
        fontSize: 20,
        fontFamily: fonts.SemiBold,
        paddingHorizontal: 10,
        textAlign: 'center',
        color: colors.white,
        marginTop: 20,
        backgroundColor: colors.fichas,
    },
    subTitleCard: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.Medium,
        padding: 1,
        margin: 15,
    },
}
)