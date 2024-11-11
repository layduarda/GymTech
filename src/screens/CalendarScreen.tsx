import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

import { useNavigation } from "@react-navigation/native";
import { Calendar, CalendarList, Agenda, DateData, LocaleConfig } from 'react-native-calendars';
import Ionicons from "react-native-vector-icons/Ionicons";

//Configurando o idioma para português
LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br'; // Define o idioma padrão como português

export function CalendarScreen() {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const [day, setDay] = useState<DateData>()

    return (
        <ScrollView>
            <View style={styles.containerF}>
                <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                    <Ionicons
                        name={"arrow-back-outline"}
                        color={colors.white}
                        size={25}
                    />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>
                    GymTech
                </Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>
                    Calendário e Agenda pessoal
                </Text>
                <Calendar style={styles.calendar} headerStyle={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: colors.roxo3,
                    paddingBottom: 10,
                    marginBottom: 10,
                    marginTop: 40,
                }}
                    theme={{
                        textMonthFontFamily: fonts.Regular,
                        textMonthFontSize: 20,
                        todayTextColor: colors.roxo3,
                        selectedDayBackgroundColor: colors.laranja3,
                        selectedDayTextColor: colors.roxo1,
                        arrowColor: colors.laranjaDetalhe,
                        textDisabledColor: colors.fundo2,
                        calendarBackground: 'transparent',
                        arrowWidth: 20,
                    }}
                    minDate={new Date().toDateString()}
                    onDayPres={setDay}
                    markingType={'period'}
                    markedDates={{

                        //Seleção de dias de treino --Setembro
                        '2024-09-02': { startingDay: true, color: colors.roxo1, textColor: 'white' },
                        '2024-09-03': { color: colors.roxo1, textColor: 'white' },
                        '2024-09-04': { color: colors.roxo1, textColor: 'white' },
                        '2024-09-05': { color: colors.roxo1, textColor: 'white' },
                        '2024-09-06': { endingDay: true, color: colors.roxo1, textColor: 'white' },

                        '2024-09-09': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-09-10': { color: colors.roxo2, textColor: 'white' },
                        '2024-09-11': { endingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-09-13': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-09-14': { endingDay: true, color: colors.roxo2, textColor: 'white' },

                        '2024-09-17': { startingDay: true, color: colors.roxo1, textColor: 'white' },
                        '2024-09-18': { color: colors.roxo1, textColor: 'white' },
                        '2024-09-19': { color: colors.roxo1, textColor: 'white' },
                        '2024-09-20': { color: colors.roxo1, textColor: 'white' },
                        '2024-09-21': { endingDay: true, color: colors.roxo1, textColor: 'white' },

                        '2024-09-23': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-09-24': { color: colors.roxo2, textColor: 'white' },
                        '2024-09-25': { color: colors.roxo2, textColor: 'white' },
                        '2024-09-26': { color: colors.roxo2, textColor: 'white' },
                        '2024-09-27': { endingDay: true, color: colors.roxo2, textColor: 'white' },

                        //Seleção de dias de descanso --Setembro
                        '2024-09-01': { marked: true, dotColor: colors.laranja1 },
                        '2024-09-07': { marked: true, dotColor: colors.laranja1 },
                        '2024-09-08': { marked: true, dotColor: colors.laranja1 },
                        '2024-09-12': { marked: true, dotColor: colors.laranja1 },
                        '2024-09-15': { marked: true, dotColor: colors.laranja1 },
                        '2024-09-16': { marked: true, dotColor: colors.laranja1 },
                        '2024-09-22': { marked: true, dotColor: colors.laranja1 },
                        '2024-09-28': { marked: true, dotColor: colors.laranja1 },
                        '2024-09-29': { marked: true, dotColor: colors.laranja1 },

                        //Seleção de dias de treino --Outubro
                        '2024-09-30': { startingDay: true, color: colors.roxo1, textColor: 'white' },
                        '2024-10-01': { color: colors.roxo1, textColor: 'white' },
                        '2024-10-02': { color: colors.roxo1, textColor: 'white' },
                        '2024-10-03': { color: colors.roxo1, textColor: 'white' },
                        '2024-10-04': { endingDay: true, color: colors.roxo1, textColor: 'white' },

                        '2024-10-07': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-10-08': { endingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-10-10': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-10-11': { color: colors.roxo2, textColor: 'white' },
                        '2024-10-12': { endingDay: true, color: colors.roxo2, textColor: 'white' },

                        '2024-10-15': { startingDay: true, color: colors.roxo10, textColor: 'white' },
                        '2024-10-16': { color: colors.roxo10, textColor: 'white' },
                        '2024-10-17': { color: colors.roxo10, textColor: 'white' },
                        '2024-10-18': { endingDay: true, color: colors.roxo10, textColor: 'white' },

                        '2024-10-21': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-10-22': { color: colors.roxo2, textColor: 'white' },
                        '2024-10-23': { color: colors.roxo2, textColor: 'white', },
                        '2024-10-24': { color: colors.roxo2, textColor: 'white' },
                        '2024-10-25': { color: colors.roxo2, textColor: 'white' },
                        '2024-10-26': { endingDay: true, color: colors.roxo2, textColor: 'white' },

                        '2024-10-28': { startingDay: true, color: colors.roxo1, textColor: 'white' },
                        '2024-10-29': { color: colors.roxo1, textColor: 'white' },
                        '2024-10-30': { color: colors.roxo1, textColor: 'white', },
                        '2024-10-31': { color: colors.roxo1, textColor: 'white' },
                        '2024-11-01': { endingDay: true, color: colors.roxo1, textColor: 'white' },

                        //Seleção dias de descanso --Outubro
                        '2024-10-20': { marked: true, dotColor: colors.laranja1 },
                        '2024-10-27': { marked: true, dotColor: colors.laranja1 },
                        '2024-11-02': { marked: true, dotColor: colors.laranja1 },
                        '2024-10-05': { marked: true, dotColor: colors.laranja1 },
                        '2024-10-06': { marked: true, dotColor: colors.laranja1 },
                        '2024-10-13': { marked: true, dotColor: colors.laranja1 },
                        '2024-10-14': { marked: true, dotColor: colors.laranja1 },
                        '2024-10-09': { marked: true, dotColor: colors.laranja1 },
                        '2024-10-19': { marked: true, dotColor: colors.laranja1 },
                        '2024-11-03': { marked: true, dotColor: colors.laranja1 },

                    }}
                />

                <Text style={styles.subTitle}>
                    Registre cada dia de treino para otimizar
                    seu desempenho e alcançar uma performance cada
                    vez melhor!
                </Text>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 30,
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
    calendar: {
        backgroundColor: "transparent",
    },
    subTitle: {
        textAlign: 'center',
        marginTop: 30,
        padding: 30,
        fontSize: 16,
        fontFamily: fonts.Light,
        color: colors.roxo3,
    },
    title: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        fontFamily: fonts.Regular,
        color: colors.roxo3,
    },
}
)