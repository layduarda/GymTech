import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from "react-native-vector-icons/Ionicons";

import { UserDetailsService } from "../services/user-service";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
//mport { ObjectiveType } from "../models/UserDetails";
import { ScrollView } from "react-native-gesture-handler";

import * as ImagePicker from 'expo-image-picker';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import { auth } from "../firebase";

export const FichaInicialScreen = () => {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

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

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const dateTimeString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        setDateOfBirth(dateTimeString);
        hideDatePicker();
    };

    // State for form fields
    const [profileImage, setProfileImage] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [opcaoSexual, setOpcaoSexual] = useState('');
    const [objective, setObjetive] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
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
        const result = await service.upsert({
            userId: auth.currentUser.uid,
            dateOfBirth: dateOfBirth,
            peso: peso,
            altura: altura,
            chronicDisease: chronicDisease,
            surgery: surgery,
            injury: injury,
            playSports: playSports,
            bodyBuilding: bodyBuilding,
            controlledMedication: controlledMedication,
        })

        if (!result) {
            Alert.alert("Error", "Failed to sava user data");
        } else {
            //@ts-ignore
            navigation.navigate('perfil')
        }
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    const [switchValue, setSwitchValue] = useState(false);
    const toggleSwitch = (value) => {
        setSwitchValue(value);
    }


    const clickHandler = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const imageUri = result.assets[0].uri
            setProfileImage(imageUri)
        }
    }

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

    return (
        <ScrollView>
            <View style={styles.container}>
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
                        <View style={styles.containerBottom}>
                            <TouchableOpacity
                                style={styles.bottomGalery}
                                onPress={clickHandler}
                            >
                                {profileImage && <Image source={{ uri: profileImage }} style={{ width: 200, height: 200, resizeMode: 'contain' }} />}
                                {!profileImage && <Ionicons name="images-outline" size={30} color={colors.fundo5} />}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.form1}>
                            <Text style={styles.labelFoto}>
                                Adicione uma foto ao seu perfil
                            </Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <Button title="Insira sua data de nascimento" onPress={showDatePicker} />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>

                        <SelectList
                            boxStyles={styles.containerForm}
                            setSelected={setOpcaoSexual}
                            data={sexo}
                            save="value"
                            placeholder="Sexo que você se identifica"
                        />
                    </View>

                    <View style={styles.inputTwo}>
                        <SelectList
                            boxStyles={styles.containerForm}
                            setSelected={setObjetive}
                            data={objetivo}
                            save="value"
                            placeholder="Insira seu objetivo"
                        />

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
                        <MultipleSelectList
                            boxStyles={styles.containerForm2}
                            setSelected={setChronicDisease}
                            data={chronic}
                            save="key"
                            placeholder="Possui alguma doença crônica?"
                        />

                        <SelectList
                            boxStyles={styles.containerForm}
                            setSelected={setControlledMedication}
                            data={medication}
                            save="value"
                            placeholder="Faz uso de medicação controlada?"
                        />

                        <SelectList
                            boxStyles={styles.containerForm2}
                            setSelected={setSurgery}
                            data={cirurgia}
                            save="value"
                            placeholder="Já passou por alguma cirurgia?"
                        />
                    </View>

                    <View style={styles.inputFour}>

                        <MultipleSelectList
                            boxStyles={styles.containerForm2}
                            setSelected={setInjury}
                            data={lesao}
                            save="value"
                            placeholder="Já sofreu alguma lesão?"
                        />

                        <SelectList
                            boxStyles={styles.containerForm}
                            setSelected={setPlaySports}
                            data={sports}
                            save="value"
                            placeholder="Já praticou ou pratica algum tipo de esporte?"
                        />

                        <SelectList
                            boxStyles={styles.containerForm}
                            setSelected={setBodyBuilding}
                            data={musculação}
                            save="value"
                            placeholder="Já praticou musculação?"
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={handleSubmit}
                    style={[styles.finalizeButtonWrapper,
                    { backgroundColor: colors.laranja1 },
                    { borderWidth: 2 },
                    { borderColor: colors.laranjaDetalhe },
                    ]}
                >
                    <Text style={styles.finalizeText}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    labelFoto: {
        fontSize: 16,
        fontFamily: fonts.Light,
        color: colors.roxo3,
        textAlign: 'right',
    },
    form1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
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
        fontSize: 16,
        color: colors.roxo3,
        fontFamily: fonts.Regular,
        textAlign: 'center',
    },
    formContainer: {
        borderWidth: 2,
        marginTop: 20,
        backgroundColor: colors.fundo4,
        width: "100%",
        padding: 20,
        borderRadius: 20,
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
    inputFive: {
        marginBottom: 30,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.roxo3,
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
    },
    finalizeText: {
        color: colors.white,
        fontSize: 20,
        fontFamily: fonts.Regular,
        textAlign: "center",
        padding: 12,
    },
    label: {
        fontFamily: fonts.Medium,
        fontSize: 15,
        color: colors.roxo3,
        textAlign: 'left',
    },
    boxContainer: {
        borderWidth: 1,
        borderColor: colors.roxo1,
        borderRadius: 15,
        height: 80,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        marginVertical: 9,
    },
    bottomGalery: {
        borderWidth: 2,
        borderColor: colors.roxo3,
        position: "absolute",
        width: 105,
        height: 105,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 16,
        backgroundColor: colors.fundo,
        elevation: 5,

    },
    containerBottom: {
        marginTop: "40%",
        width: "9%",
        marginLeft: "62%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerFotoBtn: {
        flex: 1,
        height: 200,
        width: "100%",
        flexDirection: 'row',
        marginBottom: 50,
        marginTop: 20,
        backgroundColor: colors.fundo
    },
    containerForm: {
        borderWidth: 1,
        borderColor: colors.roxo3,
        borderRadius: 20,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        marginVertical: 9,
    },
    containerForm2: {
        borderWidth: 1,
        borderColor: colors.roxo3,
        borderRadius: 20,
        height: 68,
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
    },
});