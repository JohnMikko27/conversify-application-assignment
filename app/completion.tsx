import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react"
import { Context } from "./_layout"
import { useEffect } from "react";
import { db } from "@/db/db";

export default function completion() {
    const [progress, setProgress] = useContext(Context)

    useEffect(() => {
        console.log(db)
        setProgress(1)
    }, [])

    return (
        <View style={styles.main}>
            <Text style={styles.message}>You’re all set! Get ready to master conversations.</Text>
            <Link href="/main" style={styles.homeBtn}>Home</Link>
        </View>
    )
}

    

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40
    },

    message: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        paddingHorizontal: 12
    },

    homeBtn: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        padding: 10
    }

})