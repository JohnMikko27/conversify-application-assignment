import { View, Text, StyleSheet, Pressable } from "react-native";
import { CheckBox } from "@rneui/base";
import { useState, useEffect } from "react";
import { Link, useRouter } from "expo-router";
import { useContext } from "react"
import { Context } from "./_layout"
import { db } from "@/db/db";

export default function voicePreference() {
    // change how i handle state for this and conversationFocus
    const [checks, setChecks] = useState({ casual: false, professional: false, romantic: false, other: false})
    const [progress, setProgress] = useContext(Context)
    const router = useRouter()
    const [error, setError] = useState(false)

    useEffect(() => {
        setProgress(0.75)
    }, [])

    const handleCheck = (check: string) => {
        if (check === "casual") setChecks({ casual: true, professional: false, romantic: false, other: false});
        else if (check === "professional") setChecks({ casual: false, professional: true, romantic: false, other: false});
        else if(check === "romantic") setChecks({ casual: false, professional: false, romantic: true, other: false});
        else if(check === "other") setChecks({ casual: false, professional: false, romantic: false, other: true});
    }

    const handleNext = () => {
        if (checks.casual === false && checks.professional === false && checks.romantic === false && checks.other === false) {
          setError(true)
          return
        }
        db.voicePreference = checks
        router.push('/completion')
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
                {error && <Text style={styles.errorMsg}>Please choose an option</Text>}
            </View>
            <Pressable onPress={handleNext} >
                <Text style={styles.nextBtn}>Next</Text>
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
    },

    errorMsg: {
        fontStyle: 'italic',
        color: 'red',
        paddingHorizontal: 20
    }
})