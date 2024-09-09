import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Link } from 'expo-router'
import { useForm, Controller,  } from 'react-hook-form'

export default function profileSetup() {
    const { control, handleSubmit, formState: { errors }} = useForm()

    return (
        <View style={styles.main}>
            <Link href="/">Index</Link>
            <Text>Name</Text>
            <Controller
                control={control}
                name="name"
                rules={{ required: true}}
                render={({ field }) => (
                    <TextInput
                        onBlur={field.onBlur}
                        onChangeText={field.onChange}
                        value={field.value}
                        placeholder="Name"
                    />
                )}
            />
            <Button title={'Submit'} onPress={handleSubmit(() => console.log('hi'))}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})