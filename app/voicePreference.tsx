import { View, Text, StyleSheet, Pressable } from "react-native";
import { CheckBox } from "@rneui/base";
import { useState } from "react";
import { Link } from "expo-router";

export default function voicePreference() {
    // change how i handle state for this and conversationFocus
    const [checks, setChecks] = useState({ casual: false, professional: false, romantic: false, other: false})

    const handleCheck = (check: string) => {
        if (check === "casual") setChecks({ casual: true, professional: false, romantic: false, other: false});
        else if (check === "professional") setChecks({ casual: false, professional: true, romantic: false, other: false});
        else if(check === "romantic") setChecks({ casual: false, professional: false, romantic: true, other: false});
        else if(check === "other") setChecks({ casual: false, professional: false, romantic: false, other: true});
    }

    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.mainHeader}>Preferred Conversation Mode</Text>
            </View>
            <View style={styles.checkboxesContainer}>
                <View style={styles.checkboxGroup}>
                    <Text>Casual</Text>
                    <CheckBox
                        nativeID="casual"
                        checked={checks.casual}
                        onPress={() => handleCheck("casual")}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>
                <View style={styles.checkboxGroup}>
                    <Text>Professional</Text>
                    <CheckBox
                        checked={checks.professional}
                        onPress={() => handleCheck("professional")}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>
                <View style={styles.checkboxGroup}>
                    <Text>Romantic</Text>
                    <CheckBox
                        checked={checks.romantic}
                        onPress={() => handleCheck("romantic")}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>
                <View style={styles.checkboxGroup}>
                    <Text>Other</Text>
                    <CheckBox
                        checked={checks.other}
                        onPress={() => handleCheck("other")}
                        // onPress={() => setCheck3(!check3)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>
            </View>
            <Pressable>
                <Link href="/completion" style={styles.nextBtn}>Next</Link>
            </Pressable>
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

    checkboxesContainer: {
        flex: 1,
        gap: 20
    },

    checkboxGroup: {
        paddingHorizontal: 20,
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