import { StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});