import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


import { UserDetailsService } from "../services/user-service";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
//mport { ObjectiveType } from "../models/UserDetails";
import { ScrollView } from "react-native-gesture-handler";

import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';

//Date picker


export const FichaInicialScreen = () => {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    //DropDown select-list
    const [selected, setSelected] = React.useState("");
    const chronic = [
        { key: '1', value: 'Câncer' },
        { key: '2', value: 'AVC' },
        { key: '3', value: 'Pressão alta' },
        { key: '3', value: 'Bronquite' },
        { key: '3', value: 'Asma' },
        { key: '3', value: 'Rinite' },
        { key: '3', value: 'Sinusite' },
        { key: '3', value: 'Obesidade' },
        { key: '3', value: 'Diabetes' },
        { key: '3', value: 'Colesterol' },
    ]

    const medication = [
        { key: '1', value: 'Sim' },
        { key: '2', value: 'Não' },
    ]

    const cirurgia = [
        { key: '1', value: 'Sim' },
        { key: '2', value: 'Não' },
        { key: '3', value: 'Cardíaca' },
        { key: '4', value: 'Torácica' },
        { key: '5', value: 'Aparelho digestivo' },
        { key: '6', value: 'Vascular' },
        { key: '7', value: 'Ortopédica' },
        { key: '8', value: 'Urológica' },
        { key: '9', value: 'Ginecológica' },
        { key: '10', value: 'Obstétrica' },
        { key: '11', value: 'Oncológica' },
        { key: '12', value: 'Plástica' }
    ]

    const lesao = [
        { key: '1', value: 'Sim' },
        { key: '2', value: 'Não' },
        { key: '3', value: 'Muscular' },
        { key: '4', value: 'Articular' },
        { key: '5', value: 'Óssea' },
        { key: '6', value: 'Traumas contusos' },
        { key: '7', value: 'Tecidos moles' },
        { key: '8', value: 'Traumas penetrantes' },
        { key: '9', value: 'Traumas mistos' },
    ]

    const sports = [
        { key: '1', value: 'Sim' },
        { key: '2', value: 'Não' },
    ]

    const musculação = [
        { key: '1', value: 'Sim' },
        { key: '2', value: 'Não' },
    ]

    const sexo = [
        { key: '1', value: 'Feminino' },
        { key: '2', value: 'Masculino' },
        { key: '3', value: 'Nenhum dos acima' }
    ]

    const objetivo = [
        { key: '1', value: 'Emagrecimento' },
        { key: '2', value: 'Definição' },
        { key: '3', value: 'Hipertrofia' }
    ]

    //Picker select


    // State for form fields
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [objective, setObjetive] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [daysOfTheWeek, setDaysOfTheWeek] = useState('');
    const [chronicDisease, setChronicDisease] = useState('');
    const [surgery, setSurgery] = useState('');
    const [injury, setInjury] = useState('');
    const [playSports, setPlaySports] = useState('');
    const [bodyBuilding, setBodyBuilding] = useState('');
    const [controlledMedication, setControlledMedication] = useState('');

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    }

    const onChange = ({ type }, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate);

        } else {
            toggleDatepicker();
        }
    };

    const handleSubmit = async () => {
        const service = new UserDetailsService();
        await service.create({
            dateOfBirth: dateOfBirth,
            //objective: ObjectiveType.DEFINICAO,
            peso: peso,
            altura: altura,
            daysOfTheWeek: daysOfTheWeek,
            chronicDisease: chronicDisease,
            surgery: surgery,
            injury: injury,
            playSports: playSports,
            bodyBuilding: bodyBuilding,
            controlledMedication: controlledMedication,
        })
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                    <Ionicons
                        name={"arrow-back-outline"}
                        color={colors.roxo1}
                        size={25}
                    />
                </TouchableOpacity>

                <View style={styles.textContainer}>
                    <Text style={styles.headingText}>Ficha anamnese</Text>
                </View>

                <View style={styles.textSubtitle}>
                    <Text style={styles.headingSubtitle}>
                        A ficha de anamnese é essencial para
                        adaptar o treino ao seu perfil,
                        garantindo qualidade e segurança.
                    </Text>
                </View>

                {/* form  */}
                <View style={styles.formContainer}>
                    <View style={styles.inputOne}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Inserir foto de perfil"
                                inputMode="text"
                                placeholderTextColor={colors.secondary}
                                onChangeText={setBodyBuilding}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={sexo}
                                save="value"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Sexo que você se identifica"
                                inputMode="text"
                                placeholderTextColor={colors.secondary}
                                onChangeText={setObjetive}
                            />
                        </View>

                        <View style={styles.inputContainer}>

                            {/* {showPicker && (
                                <DateTimePicker
                                    mode="date"
                                    display="spinner"
                                    value={date}
                                    onChange={onChange}
                                />
                            )} */}

                            {/* <DateTimePicker
                               dateFormat="DD/MM/YYYY"
                               style={styles.dateComponent}
                               date={}
                            /> */}

                            <TextInput
                                style={styles.textInput}
                                placeholder="Insira sua data de nascimento"
                                placeholderTextColor={colors.secondary}
                                value={dateOfBirth}
                                onChangeText={setDateOfBirth}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={objetivo}
                                save="value"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Insira seu objetivo"
                                inputMode="text"
                                placeholderTextColor={colors.secondary}
                                onChangeText={setObjetive}
                            />
                        </View>

                    </View>

                    <View style={styles.inputTwo}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Peso (kg)"
                                inputMode="text"
                                placeholderTextColor={colors.secondary}
                                onChangeText={setPeso}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Altura (cm)"
                                inputMode="text"
                                placeholderTextColor={colors.secondary}
                                onChangeText={setAltura}
                            />
                        </View>
                    </View>

                    <View style={styles.inputThree}>
                        <View style={styles.inputContainer}>
                            <MultipleSelectList
                                setSelected={(val) => setSelected(val)}
                                data={chronic}
                                save="value"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Possui alguma doença crônica?"
                                inputMode="text"
                                placeholderTextColor={colors.secondary}
                                onChangeText={setChronicDisease}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={medication}
                                save="value"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Faz uso de medicação controlada?"
                                inputMode="text"
                                placeholderTextColor={colors.secondary}
                                onChangeText={setControlledMedication}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={cirurgia}
                                save="value"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Já passou por alguma cirurgia?"
                                inputMode="text"
                                placeholderTextColor={colors.secondary}
                                onChangeText={setSurgery}
                            />
                        </View>
                    </View>

                    <View style={styles.inputFour}>
                        <View style={styles.inputContainer}>
                            <MultipleSelectList
                                setSelected={(val) => setSelected(val)}
                                data={lesao}
                                save="value"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Já sofreu alguma lesão?"
                                inputMode="text"
                                placeholderTextColor={colors.secondary}
                                onChangeText={setInjury}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={sports}
                                save="value"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Já praticou ou pratica algum tipo de esporte?"
                                inputMode="text"
                                placeholderTextColor={colors.secondary}
                                onChangeText={setPlaySports}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={musculação}
                                save="value"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Já praticou musculação?"
                                inputMode="text"
                                placeholderTextColor={colors.secondary}
                                onChangeText={setBodyBuilding}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={handleSubmit}
                    style={[styles.finalizeButtonWrapper,
                    { backgroundColor: colors.laranja1 },
                    { borderWidth: 1 },
                    { borderColor: colors.laranja8 },
                    ]}
                >
                    <Text style={styles.finalizeText}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    dateComponent: {
        width: 300,
        backgroundColor: colors.roxo2,
    },
    backButtonWrapper: {
        height: 20,
        width: 20,
    },
    textContainer: {
        alignItems: 'center',
        //backgroundColor: colors.roxo2,
        marginTop: 10,
    },
    headingText: {
        fontSize: 32,
        color: colors.laranjaDetalhe,
        fontFamily: fonts.SemiBold,
    },
    textSubtitle: {
        marginTop: 7,
        textAlign: 'center',
        alignItems: 'center',
    },
    headingSubtitle: {
        fontSize: 15,
        color: colors.roxo3,
        fontFamily: fonts.Regular,
    },
    formContainer: {
        marginTop: 20,
        backgroundColor: colors.roxo6,
        width: "100%",
        padding: 20,
        borderRadius: 20,
        borderWidth: 1.2,
        borderColor: colors.roxo1,
    },
    inputOne: {
        marginBottom: 30,
    },
    inputTwo: {
        marginBottom: 30,
    },
    inputThree: {
        marginBottom: 30,
    },
    inputFour: {
        marginBottom: 30,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.roxo1,
        borderRadius: 15,
        height: 40,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        marginVertical: 9,
    },
    textInput: {
        flex: 1,
        fontFamily: fonts.Light,
        color: colors.roxo3,
        fontSize: 14,
    },
    forgotPasswordText: {
        textAlign: "right",
        color: colors.primary,
        fontFamily: fonts.SemiBold,
        marginVertical: 10,
    },
    finalizeButtonWrapper: {
        borderRadius: 40,
        marginTop: 20,
        borderColor: colors.laranjaDetalhe,
    },
    finalizeText: {
        color: colors.white,
        fontSize: 20,
        fontFamily: fonts.Regular,
        textAlign: "center",
        padding: 12,
    },
});