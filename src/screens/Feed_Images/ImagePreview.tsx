import { ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

export function ImagePreview({route, navigation}){
    const {imageFile} = route.params;
    return (
        <View style={styles.container}>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
    },
})