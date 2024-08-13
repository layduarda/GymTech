import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const Login = () => {
  const navigation = useNavigation();
  const [secureEnter, setSecureEnter] = useState(true);
  const handleHome = () => {
    navigation.navigate("home")
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.containerL}>
      <TouchableOpacity style={styles.backButton}
        onPress={handleGoBack}
      >
        <Ionicons name={"arrow-back-outline"}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Olá,</Text>
        <Text style={styles.headingText}>bem-vindo</Text>
        <Text style={styles.headingText}>de volta!</Text>
      </View>
      {/* form */}
      <View style={styles.formContainer}>
        <View style={styles.inputLogin}>
          <Ionicons name={"mail-outline"} size={30}
            color={colors.secondary} />
          <TextInput style={styles.textInput}
            placeholder="Insira seu email"
            placeholderTextColor={colors.secondary}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputLogin}>
          <SimpleLineIcons name={"lock"} size={30}
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
            <SimpleLineIcons name={"eye"} size={20} color={
              colors.secondary} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.loginButtonWrapper,
          {backgroundColor: colors.primary},
        ]}
        onPress={handleHome}
        >
          <Text style={styles.loginText}>Acessar</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>
          ou continue com
        </Text>

        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image source={require("../assets/Vector.png")} style={styles.googleImage} />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Não possui uma conta?</Text>
          <Text style={styles.signupText}>Cadastre-se</Text>
        </View>
      </View>
    </View>
  );
};

export default Login

const styles = StyleSheet.create({
  containerL: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  backButton: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 30,
    color: colors.primary,
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
    padding: 2,
    marginVertical: 20,
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
  loginButtonWrapper: {
    backgroundColor: colors.primary,
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
  googleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
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
  },
  signupText: {
    color: colors.primary,
    fontFamily: fonts.Bold,
  },
});