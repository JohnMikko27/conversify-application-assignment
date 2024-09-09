import { Text, View, StyleSheet, } from "react-native";
import { Link } from 'expo-router'

/*
  add a route to a profile setup screen 
  which includes:
  - a form (name, age, gender, etc.)
  - allow users to upload a profile pic

*/

export default function Index() {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.welcome}>Welcome to Conversify</Text>
        <Text style={styles.tagLine}>Level up your conversation in just minutes.</Text>
      </View>
      <Link href="/profileSetup" style={styles.startBtn}>Get Started</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },

  welcome: {
    fontSize: 30
  },

  tagLine: {
    fontSize: 15
  },

  startBtn: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4
  }
})
