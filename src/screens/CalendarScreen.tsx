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

                        //Seleção de dias de treino -Julho
                        '2024-07-01': { startingDay: true, color: colors.roxo1, textColor: 'white' },
                        '2024-07-02': { color: colors.roxo1, textColor: 'white' },
                        '2024-07-03': { color: colors.roxo1, textColor: 'white' },
                        '2024-07-04': { color: colors.roxo1, textColor: 'white' },
                        '2024-07-05': { endingDay: true, color: colors.roxo1, textColor: 'white' },

                        '2024-07-08': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-07-09': { color: colors.roxo2, textColor: 'white' },
                        '2024-07-10': { endingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-07-12': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-07-13': { endingDay: true, color: colors.roxo2, textColor: 'white' },

                        '2024-07-16': { startingDay: true, color: colors.roxo10, textColor: 'white' },
                        '2024-07-17': { color: colors.roxo10, textColor: 'white' },
                        '2024-07-18': { color: colors.roxo10, textColor: 'white' },
                        '2024-07-19': { color: colors.roxo10, textColor: 'white' },
                        '2024-07-20': { endingDay: true, color: colors.roxo10, textColor: 'white' },

                        '2024-07-22': { startingDay: true, color: colors.roxo1, textColor: 'white' },
                        '2024-07-23': { color: colors.roxo1, textColor: 'white' },
                        '2024-07-24': { color: colors.roxo1, textColor: 'white' },
                        '2024-07-25': { color: colors.roxo1, textColor: 'white' },
                        '2024-07-26': { endingDay: true, color: colors.roxo1, textColor: 'white' },

                        '2024-07-28': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-07-29': { color: colors.roxo2, textColor: 'white' },
                        '2024-07-30': { endingDay: true, color: colors.roxo2, textColor: 'white' },

                        //Seleção dias de descanso - Julho
                        '2024-07-06': { marked: true, dotColor: colors.laranja1 },
                        '2024-07-11': { marked: true, dotColor: colors.laranja1 },
                        '2024-07-14': { marked: true, dotColor: colors.laranja1 },
                        '2024-07-15': { marked: true, dotColor: colors.laranja1 },
                        '2024-07-21': { marked: true, dotColor: colors.laranja1 },
                        '2024-07-27': { marked: true, dotColor: colors.laranja1 },
                        '2024-07-31': { marked: true, dotColor: colors.laranja1 },

                        //Seleção de dias de treino - Agosto
                        '2024-08-01': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-08-02': { color: colors.roxo2, textColor: 'white' },
                        '2024-08-03': { endingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-08-05': { startingDay: true, color: colors.roxo1, textColor: 'white' },
                        '2024-08-06': { color: colors.roxo1, textColor: 'white' },
                        '2024-08-07': { color: colors.roxo1, textColor: 'white' },
                        '2024-08-08': { color: colors.roxo1, textColor: 'white' },
                        '2024-08-09': { endingDay: true, color: colors.roxo1, textColor: 'white' },

                        '2024-08-12': { startingDay: true, color: colors.roxo10, textColor: 'white' },
                        '2024-08-13': { endingDay: true, color: colors.roxo10, textColor: 'white' },
                        '2024-08-15': { startingDay: true, color: colors.roxo10, textColor: 'white' },
                        '2024-08-16': { endingDay: true, color: colors.roxo10, textColor: 'white' },

                        '2024-08-19': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-08-20': { color: colors.roxo2, textColor: 'white' },
                        '2024-08-21': { color: colors.roxo2, textColor: 'white' },
                        '2024-08-22': { color: colors.roxo2, textColor: 'white' },
                        '2024-08-23': { color: colors.roxo2, textColor: 'white' },
                        '2024-08-24': { endingDay: true, color: colors.roxo2, textColor: 'white' },

                        '2024-08-27': { startingDay: true, color: colors.roxo1, textColor: 'white' },
                        '2024-08-28': { color: colors.roxo1, textColor: 'white' },
                        '2024-08-29': { color: colors.roxo1, textColor: 'white' },
                        '2024-08-30': { endingDay: true, color: colors.roxo1, textColor: 'white' },

                        //Seleção dias de descanso - Agosto
                        '2024-08-04': { marked: true, dotColor: colors.laranja1 },
                        '2024-08-10': { marked: true, dotColor: colors.laranja1 },
                        '2024-08-11': { marked: true, dotColor: colors.laranja1 },
                        '2024-08-17': { marked: true, dotColor: colors.laranja1 },
                        '2024-08-18': { marked: true, dotColor: colors.laranja1 },
                        '2024-08-25': { marked: true, dotColor: colors.laranja1 },
                        '2024-08-31': { marked: true, dotColor: colors.laranja1 },
                        '2024-08-14': { marked: true, dotColor: colors.laranja1 },
                        '2024-08-26': { marked: true, dotColor: colors.laranja1 },

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

                        //Seleção dias de treino -Novembro
                        '2024-11-01': { endingDay: true, color: colors.roxo1, textColor: 'white' },
                        '2024-11-04': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-11-05': { color: colors.roxo2, textColor: 'white' },
                        '2024-11-06': { endingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-11-08': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-11-09': { endingDay: true, color: colors.roxo2, textColor: 'white' },

                        '2024-11-11': { startingDay: true, color: colors.roxo10, textColor: 'white' },
                        '2024-11-12': { endingDay: true, color: colors.roxo10, textColor: 'white' },
                        '2024-11-14': { startingDay: true, color: colors.roxo10, textColor: 'white' },
                        '2024-11-15': { color: colors.roxo10, textColor: 'white' },
                        '2024-11-16': { endingDay: true, color: colors.roxo10, textColor: 'white' },

                        '2024-11-18': { startingDay: true, color: colors.roxo1, textColor: 'white' },
                        '2024-11-19': { color: colors.roxo1, textColor: 'white' },
                        '2024-11-20': { color: colors.roxo1, textColor: 'white' },
                        '2024-11-21': { color: colors.roxo1, textColor: 'white' },
                        '2024-11-22': { endingDay: true, color: colors.roxo1, textColor: 'white' },

                        '2024-11-25': { startingDay: true, color: colors.roxo2, textColor: 'white' },
                        '2024-11-26': { endingDay: true, color: colors.roxo2, textColor: 'white' },

                        //Seleção dias de descanso --Novembro
                        '2024-11-07': { marked: true, dotColor: colors.laranja1 },
                        '2024-11-10': { marked: true, dotColor: colors.laranja1 },
                        '2024-11-13': { marked: true, dotColor: colors.laranja1 },
                        '2024-11-17': { marked: true, dotColor: colors.laranja1 },
                        '2024-11-23': { marked: true, dotColor: colors.laranja1 },
                        '2024-11-24': { marked: true, dotColor: colors.laranja1 },
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
        marginTop: 6,
        backgroundColor: "transparent",
    },
    subTitle: {
        textAlign: 'center',
        marginTop: 50,
        padding: 30,
        fontSize: 16,
        fontFamily: fonts.Light,
        color: colors.roxo3,
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        fontFamily: fonts.Regular,
        color: colors.laranjaDetalhe,
    },
}
)