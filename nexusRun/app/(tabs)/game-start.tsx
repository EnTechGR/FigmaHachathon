import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors'; // Same Colors file

export default function GameStartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Started!</Text>
      <Text style={styles.subtitle}>Let the games begin...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    color: Colors.grey,
    fontSize: 18,
  },
});
