import { Text, View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native"
import { useForm, Controller } from "react-hook-form"
import * as ImagePicker from "expo-image-picker"
import { useState } from "react"
import { Link, useRouter, } from "expo-router"
import { useEffect, useContext } from "react"
import { Context } from "./_layout"
import { db } from "../db/db"

export default function profileSetup({ route }: { route: any }) {
  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: null
    },
  })
  const [image, setImage] = useState("../assets/images/profilePlacholder.png")
  const router = useRouter()
  const [progress, setProgress] = useContext(Context)

  useEffect(() => {
    setProgress(0.25)
  }, [])

  const onSubmit = (data: any) => {
    if (errors.firstName || errors.lastName || errors.age) {
      return
    }
    db.profile.firstName = data.firstName
    db.profile.lastName = data.lastName
    db.profile.age = data.age
    router.push('/conversationFocus')
  }

  const uploadImage = async() => {
    try {
        await ImagePicker.requestCameraPermissionsAsync()
        let result = await ImagePicker.
        launchCameraAsync({
            cameraType: ImagePicker.CameraType.front,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1
        })
        if (!result.canceled) {
            setImage(result.assets[0].uri)
            db.profile.image = result.assets[0].uri
        }
    } catch(e) {
        console.log(e)
    }
  }

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={uploadImage}>
        <Image 
            source={{uri: image}}
            style={styles.image}
        />
        
      </TouchableOpacity>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputGroup}>
            <Text>First Name</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.firstName && <Text style={styles.errorMsg}>This is required.</Text>}

          </View>
        )}
        name="firstName"
      />
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputGroup}>
            <Text>Last Name</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.lastName && <Text style={styles.errorMsg}>This is required.</Text>}

          </View>
        )}
        name="lastName"
      />

    <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputGroup}>
            <Text>Age</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              keyboardType="numeric"
            />
            {errors.age && <Text style={styles.errorMsg}>This is required.</Text>}

          </View>
        )}
        name="age"
      />

      <Pressable onPress={handleSubmit(onSubmit)} style={styles.submitBtn}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center', 
        gap: 15
    },

    inputGroup: {
        gap: 4
    },

    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3
    },

    image: {
        width: 100, 
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50
    },

    submitBtn: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 12,
        padding: 8
    },

    errorMsg: {
        color: 'red',
        fontStyle: 'italic'
    }
})