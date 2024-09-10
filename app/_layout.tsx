import { Stack, } from "expo-router";
import { View, StyleSheet } from "react-native";
import * as Progress from 'react-native-progress';
import { useState, useEffect, createContext } from "react"

export const Context = createContext<[number, React.Dispatch<React.SetStateAction<number>>]>([0, () => {}])

export default function RootLayout() {
  const [progress, setProgress] = useState(0)

  return (
    <Context.Provider value={[progress, setProgress]}>
      <View style={styles.main}>
        <Progress.Bar progress={progress} width={300} style={styles.progressBar}/>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }}  />
          <Stack.Screen name="profileSetup" options={{ headerShown: false }} initialParams={{ setProgress }}/>
          <Stack.Screen name="conversationFocus" options={{ headerShown: false }} />
          <Stack.Screen name="voicePreference" options={{ headerShown: false }} />
          <Stack.Screen name="completion" options={{ headerShown: false }} />
          <Stack.Screen name="main" options={{ headerShown: false }} />
        </Stack>
      </View>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    // alignItems: 'center'
  }, 

  progressBar: {
    alignSelf: 'center'
  }
})
