import { Text, View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native"
import { useForm, Controller } from "react-hook-form"
import * as ImagePicker from "expo-image-picker"
import { useState } from "react"
import { Link } from "expo-router"

export default function App() {
  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: null
    },
  })
  const [image, setImage] = useState("../assets/images/profilePlacholder.png")

  const onSubmit = (data: any) => {
    console.log(data)
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
        }
    } catch(e) {
        console.log(e)
    }
  }

//
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
          <View>
            <Text>First Name</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.firstName && <Text>This is required.</Text>}

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
          <View>
            <Text>Last Name</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.lastName && <Text>This is required.</Text>}

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
          <View>
            <Text>Age</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              keyboardType="numeric"
            />
            {errors.age && <Text>This is required.</Text>}

          </View>
        )}
        name="age"
      />

      <Pressable onPress={handleSubmit(onSubmit)} style={styles.submitBtn}>
        <Link href="/conversationFocus">Submit</Link>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        borderWidth: 1,
        borderColor: 'black'
    },

    image: {
        width: 30, 
        height: 30,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 15
    },

    submitBtn: {
        padding: 4,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15
    }
})