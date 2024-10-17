import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "../utils/colors";

import { RoutesTab } from "../tabs/RoutesTab";

export const MainScreen = () => {

    return (
        <View style={styles.container}>
            <RoutesTab />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
})