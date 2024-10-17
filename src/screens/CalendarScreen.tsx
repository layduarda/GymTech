import React, { useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import Ionicons from "react-native-vector-icons/Ionicons";

import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
//import {ptBR} from '../utils/localeCalendarConfig';

import { useNavigation } from "@react-navigation/native";
import { AppBar } from '../components/app.bar';

// LocaleConfig.locales["pt=br"] = ptBR
// LocaleConfig.defaultLocale = "pt-br"

export function CalendarScreen() {

    const [day, setDay] = useState<DateData>()

    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <AppBar title=""
            />
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                <Ionicons
                    name={"arrow-back-outline"}
                    color={colors.laranjaDetalhe}
                    size={25}
                />
            </TouchableOpacity>
            <View style={styles.containerFeed}>
                <Text style={styles.textFeed}>
                    Calendário
                </Text>
                <Calendar style={styles.calendar}
                    headerStyle={{
                        borderBottomWidth: 1,
                        borderBottomColor: colors.laranjaDetalhe,
                        paddingBottom: 10,
                        marginBottom: 10,
                    }}
                    theme={{
                        textMonthFontSize: 20,
                        monthTextColor: colors.roxo1,
                        textMonthFontFamily: fonts.Regular,
                        todayTextColor: colors.roxo3,
                        selectedDayBackgroundColor: colors.laranja1,
                        selectedDayTextColor: colors.roxo2,
                        arrowColor: colors.laranja8,
                        calendarBackground: "transparent",
                        textDayStyle: { color: colors.roxo2 },
                        textDisabledColor: colors.fundo2,
                    }}
                    minDate={new Date().toDateString()}
                    hideExtraDays={true}
                    onDayPress={setDay}
                    markedDates={day && {
                        [day.dateString]: { selected: true },
                    }}
                />
                <Text style={styles.subtitle}>
                    Registre seus dias de treino
                    para uma melhor performance e
                    melhores resultados
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    containerFeed: {
        alignItems: 'center',
    },
    textFeed: {
        fontSize: 28,
        fontFamily: fonts.SemiBold,
        color: colors.roxo3,
        marginTop: 50,
        marginBottom: 30,
    },
    calendar: {
        backgroundColor: "transparent",
        //borderWidth: 2,
        //borderRadius: 15,
        // borderColor: colors.laranja4,
        height: 350,
        width: "90%",
    },
    subtitle: {
        fontSize: 15,
        fontFamily: fonts.Regular,
        color: colors.roxo3,
        marginVertical: 40,
        justifyContent: 'center',
        textAlign: 'center',
    },
    backButtonWrapper: {
        height: 20,
        width: 20,
        marginLeft: 20,
    },
}
)