import { Image, StyleSheet, Text, View } from 'react-native';
import React from "react";
import { fonts } from '../utils/fonts';
import { colors } from '../utils/colors';
import { ScrollView } from 'react-native-gesture-handler';

export function Feed() {
    return (
        <ScrollView style={styles.container}>
              <View style={styles.containerTwo}>
              </View>
        </ScrollView>
    );
}

export default Feed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fundo,
    },
    containerTwo: {
        alignItems: 'center',
    },
})
