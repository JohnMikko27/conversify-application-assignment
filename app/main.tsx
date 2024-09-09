import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function main() {
    return (
        <View style={styles.main}>
            <Text style={styles.message}>Welcome to Conversify</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    message: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        paddingHorizontal: 12
    }
})