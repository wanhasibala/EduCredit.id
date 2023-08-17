import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
        <StatusBar style="auto" />
        <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#B7D3EA'
  },
});
