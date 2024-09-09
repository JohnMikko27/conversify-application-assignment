import { Stack, } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="profileSetup" options={{ headerShown: false }} />
      <Stack.Screen name="conversationFocus" options={{ headerShown: false}} />
      <Stack.Screen name="voicePreference" options={{ headerShown: false}} />
      <Stack.Screen name="completion" options={{ headerShown: false}} />
      <Stack.Screen name="main" options={{ headerShown: false}} />
    </Stack>
  );
}
