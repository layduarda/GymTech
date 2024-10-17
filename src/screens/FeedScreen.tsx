import React, { useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

import { useNavigation } from "@react-navigation/native";
import { AppBar } from '../components/app.bar';

import Ionicons from "react-native-vector-icons/Ionicons";
export function FeedScreen() {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const handleFeed = () => {
        //@ts-ignore
        navigation.navigate('feed')
    };

    return (
        <ScrollView style={styles.container}>
            <AppBar title="Home" 
            />
            <View style={styles.container}>
                <View style={styles.containerFeed}>
                    <Text style={styles.textFeed}>
                        Em desenvolvimento
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fundo,
    },
    containerFeed: {
        alignItems: 'center',
    },
    textFeed: {
        fontSize: 20,
        fontFamily: fonts.SemiBold,
        color: colors.roxo1,
        marginVertical: 50,
    },
}
)