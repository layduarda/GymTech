import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
// import { useNavigation } from "@react-navigation/native";

export function ArtOneScreen() {
    return (
        <ScrollView>
       <View style={styles.containerArtigo}>
        <Text style={styles.titleArtigo}>
            O que é musculação?
        </Text>
       </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
   containerArtigo: {
    flex: 1,
    backgroundColor: colors.white,
   },
   titleArtigo: {
    
   },
})