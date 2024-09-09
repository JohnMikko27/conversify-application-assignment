import { View, Text, StyleSheet } from "react-native"
import { CheckBox } from "@rneui/base"
import { useState } from "react"
import { Link } from "expo-router"

export default function conversationFocus() {
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)

    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.mainHeader}>Choose your area of focus</Text>
            </View>
            <View style={styles.checkboxesContainer}>
                <View style={styles.checkboxGroup}>
                    <View>
                        <Text style={styles.heading}>Public Speaking</Text>
                        <Text>Improve ability to speaking in a public setting.</Text>
                    </View>
                    <CheckBox
                        style={styles.checkbox}
                        checked={check1}
                        onPress={() => setCheck1(!check1)}
                    />
                </View>
                <View style={styles.checkboxGroup}>
                    <View>
                        <Text style={styles.heading}>Professional</Text>
                        <Text>Improve ability to speaking in a professional setting.</Text>
                    </View>
                    <CheckBox
                        style={styles.checkbox}
                        checked={check2}
                        onPress={() => setCheck2(!check2)}
                    />
                </View>
                <View style={styles.checkboxGroup}>
                    <View>
                        <Text style={styles.heading}>Academic</Text>
                        <Text>Improve ability to speaking in an academic setting.</Text>
                    </View>
                    <CheckBox
                        style={styles.checkbox}
                        checked={check3}
                        onPress={() => setCheck3(!check3)}
                    />
                </View>
                <View style={styles.checkboxGroup}>
                    <View>
                        <Text style={styles.heading}>Rizz</Text>
                        <Text>Improve ability to pick up boys or girls.</Text>
                    </View>
                    <CheckBox
                        style={styles.checkbox}
                        checked={check4}
                        onPress={() => setCheck4(!check4)}
                    />
                </View>
            </View>
            <Link href="/voicePreference" style={styles.nextBtn}>Next</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 80,
        paddingBottom: 60,
        flex: 1,
        gap: 40
    },

    mainHeader: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 15
    },

    checkboxesContainer: {
        flex: 1,
        gap: 20
    },

    checkboxGroup: {
        paddingHorizontal: 20,
    },

    checkbox: {
        width: 20,
        height: 20
    },

    nextBtn: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        textAlign: 'center',
        fontSize: 20, 
        padding: 10,
        margin: 10
    }
})