import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../services/firebaseConfig";

import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  }

  const navigation = useNavigation();
  const [secureEnter, setSecureEnter] = useState(true);
  const handleHomeTab = () => {
    navigation.navigate('HomeTab')
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp')
  };

  return (
    <View style={styles.containerL}>
      <TouchableOpacity style={styles.backButton}
        onPress={handleGoBack}
      >
        <Ionicons name={"arrow-back-outline"}
          color={colors.setaBack}
          size={25}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Olá,</Text>
        <Text style={styles.headingText}>bem-vindo</Text>
        <Text style={styles.headingText}>de volta!</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputLogin}>
          <Ionicons name={"mail-outline"} size={25}
            color={colors.secondary} />
          <TextInput style={styles.textInput}
            placeholder="Insira seu email"
            placeholderTextColor={colors.secondary}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputLogin}>
          <Ionicons name={"lock-closed-outline"} size={25}
            color={colors.secondary} />
          <TextInput style={styles.textInput}
            placeholder="Insira sua senha"
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEnter}
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
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>Acessar</Text>
        </TouchableOpacity>

        <Text style={styles.continueText}>
          ou continue com
        </Text>

        <TouchableOpacity style={styles.googleButtonContainer}>
          <Ionicons
            name={"logo-google"}
            size={30}
            color={colors.secondary}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Não possui uma conta?</Text>

          <TouchableOpacity
            style={[styles.signupC,
            ]}
            onPress={handleSignUp}
          >
            <Text style={styles.signupText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default LoginScreen;

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
    color: colors.bottom1,
    fontFamily: fonts.Medium,
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
    borderColor: colors.bottom1,
    backgroundColor: colors.bottom2,
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
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 14,
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
  signupC: {
    marginTop: 20,
  },
  signupText: {
    fontSize: 18,
    color: colors.bottom1,
  },
});