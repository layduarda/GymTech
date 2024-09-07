import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from "react";
import { fonts } from '../utils/fonts';
import { colors } from '../utils/colors';

export function Profile() {
    return (
        <ScrollView style={styles.container}>
        <View style={styles.containerTwo}>
            <View style={styles.containerProfile}>
                
            </View>
        </View>
  </ScrollView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fundo,
    },
    containerTwo: {
        alignItems: 'center',
    },
    containerProfile: {
        width: "80%",
        backgroundColor: colors.purple,
    },
})
