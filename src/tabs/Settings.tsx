import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from "react";
import { fonts } from '../utils/fonts';
import { colors } from '../utils/colors';

export function Settings() {
    return (
        <ScrollView style={styles.container}>
        <View style={styles.containerTwo}>
        </View>
  </ScrollView>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fundo,
    },
    containerTwo: {
        alignItems: 'center',
    },
})
