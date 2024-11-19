import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";

//Firebase authentication
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../firebase";

import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const [secureEnter, setSecureEnter] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSignUp = () => {
    // navigation.navigate()
    //@ts-ignore
    navigation.navigate('signup')
  };

  const handleSubmit = async () => {
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      console.log("store in storage", credential.user.getIdToken());
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(errorCode, errorMessage);
    }
  };

  return (
    <View style={styles.containerL}>
      <TouchableOpacity style={styles.backButton}
        onPress={handleGoBack}
      >
        <Ionicons name={"arrow-back-outline"}
          color={colors.laranjaDetalhe}
          size={25}
        />
      </TouchableOpacity>

      <View style={styles.containerLogo}>
        <Image source={require("../assets/Image.png")} style={styles.bannerImage} />
      </View>

      <View style={styles.formContainer}>
        <KeyboardAvoidingView>
          <View style={styles.inputLogin}>
            <Ionicons name={"mail-outline"} size={25}
              color={colors.secondary} />
            <TextInput style={styles.textInput}
              placeholder="Insira seu email"
              placeholderTextColor={colors.secondary}
              keyboardType="email-address"
              onChangeText={setEmail}
            />
          </View>
        </KeyboardAvoidingView>

        <View style={styles.inputLogin}>
          <Ionicons name={"lock-closed-outline"} size={25}
            color={colors.secondary} />
          <TextInput style={styles.textInput}
            placeholder="Insira sua senha"
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEnter}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => {
              setSecureEnter((prev) => !prev);
            }}
          >
            <Ionicons name={"eye-off-outline"} size={20} color={
              colors.secondary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.loginButtonWrapperL,
          ]}
          onPress={handleSubmit}
        >
          <Text style={styles.loginText}>Acessar</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Não possui uma conta?</Text>

          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.signInC,]}
          >
            <Text style={styles.signInText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerL: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 30,
    color: colors.roxo1,
    fontFamily: fonts.SemiBold,
  },
  formContainer: {
    marginTop: 20,
  },
  inputLogin: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: 'center',
    padding: 6,
    marginVertical: 17,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    marginVertical: 10,
  },
  loginButtonWrapperL: {
    borderWidth: 1,
    borderColor: colors.roxo1,
    backgroundColor: colors.roxo2,
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    textAlign: 'center',
    padding: 10,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  googleButtonContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 2,
  },
  accountText: {
    color: colors.primary,
    fontFamily: fonts.Regular,
    marginTop: 20,
    fontSize: 15,
  },
  signInC: {
    marginTop: 20,
  },
  signInText: {
    fontSize: 18,
    color: colors.laranjaDetalhe,
  },
  containerLogo: {
    alignItems: 'center',
    flex: 1,
  },
  bannerImage: {
    width: 400,
    height: 250,
    marginVertical: 10,
    marginTop: 30,
  },
});

