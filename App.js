import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Home from "./screens/Home";
import Colors from "./constant/color";

export default function App() {
  return (
    <>
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Home />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBorder,
    paddingTop: 20,
  },
});
