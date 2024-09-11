import { View, Text, StyleSheet, Pressable } from "react-native"
import { CheckBox } from "@rneui/base"
import { useState, useEffect } from "react"
import { Link, useRouter } from "expo-router"
import { useContext } from "react"
import { Context } from "./_layout"

export default function conversationFocus() {
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    const [progress, setProgress] = useContext(Context)
    const [error, setError] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setProgress(0.5)
    }, [])

    const handleNext = () => {
        if (!(check1 || check2 || check3 || check4)) {
          setError(true)
          return
        }

        router.push('/voicePreference')
    }
        
    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.mainHeader}>Choose Your Area of Focus</Text>
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
                {error && <Text style={styles.errorMsg}>Please choose an option</Text>}
            </View>
            <Pressable onPress={handleNext}>
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
    },

    errorMsg: {
        fontStyle: 'italic',
        color: 'red',
        paddingHorizontal: 20
    }
})