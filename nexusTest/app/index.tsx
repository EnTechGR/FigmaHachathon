import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useFonts } from 'expo-font'; // If you're using custom fonts
import Colors from '../constants/Colors'; // Assuming you have a Colors.ts

export default function GameLinkScreen() {
  // Load custom fonts if you have them in assets/fonts
  const [fontsLoaded] = useFonts({
    'Kings': require('../assets/fonts/Kings-Regular.ttf'),
    'Playfair': require('../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" /> {/* For white text on a dark background */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>9:41</Text>
        <View style={styles.statusBarIcons}>
          <View style={styles.signalBar1} />
          <View style={styles.signalBar2} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Game Link</Text>
        <Text style={styles.subtitle}>Welcome Outcast</Text>
        <Text style={styles.paragraph}>Prove Your Worth</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Game Link" // Add a placeholder for the input
          placeholderTextColor={Colors.grey} // Assuming you have grey in your Colors
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerIndicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black, // Assuming you have black in your Colors
    paddingHorizontal: 16, // Equivalent to p-4
    paddingTop: 40, // Adjust for status bar on some devices
    justifyContent: 'space-between', // Aligns items with space in between
    alignItems: 'center', // Centers items horizontally
  },
  statusBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44, // Approximate height of status bar
  },
  statusBarText: {
    color: Colors.white, // Assuming you have white in your Colors
    fontSize: 16,
    fontFamily: 'System', // Default sans-serif font on iOS and Android
  },
  statusBarIcons: {
    flexDirection: 'row',
    gap: 8, // Equivalent to gap-2
    opacity: 0.5,
  },
  signalBar1: {
    width: 20,
    height: 8,
    backgroundColor: Colors.white, // Assuming you have white in your Colors
    borderRadius: 2, // Equivalent to rounded-sm
  },
  signalBar2: {
    width: 16,
    height: 12,
    backgroundColor: Colors.white, // Assuming you have white in your Colors
  },
  batteryIcon: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: Colors.white, // Assuming you have white in your Colors
    borderRadius: 4, // Approximate for rounded
  },
  content: {
    flex: 1, // Take up remaining vertical space
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24, // Equivalent to gap-6
    justifyContent: 'center', // Center content vertically
  },
  title: {
    color: Colors.white, // Assuming you have white in your Colors
    fontSize: 48, // Equivalent to text-5xl (adjust as needed)
    fontFamily: 'Kings', // Your custom font
    fontWeight: 'normal', // Equivalent to font-normal
    lineHeight: 48, // Approximate for leading-tight
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.white, // Assuming you have white in your Colors
    fontSize: 36, // Equivalent to text-4xl (adjust as needed)
    fontFamily: 'Playfair', // Your custom font
    fontWeight: 'normal',
    lineHeight: 53, // As specified
    textAlign: 'center',
  },
  paragraph: {
    color: Colors.white, // Assuming you have white in your Colors
    fontSize: 20, // Equivalent to text-2xl (adjust as needed)
    fontFamily: 'Playfair', // Your custom font
    fontWeight: 'normal',
    lineHeight: 28, // Approximate for leading-loose
    textAlign: 'center',
  },
  input: {
    width: 320, // Equivalent to w-80 (assuming a base of 4)
    height: 48, // Equivalent to h-12
    backgroundColor: Colors.neutral900, // Assuming you have this color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: Colors.red900, // Assuming you have this color
    borderRadius: 8, // Equivalent to rounded-md
    paddingHorizontal: 12,
    color: Colors.white, // Ensure text color is visible
    fontSize: 16,
  },
  button: {
    width: 320, // Equivalent to w-80
    paddingVertical: 12, // Equivalent to py-3
    backgroundColor: Colors.red950, // Assuming you have this color
    borderRadius: 8, // Equivalent to rounded-md
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white, // Assuming you have white in your Colors
    fontSize: 20, // Equivalent to text-2xl
    fontFamily: 'Playfair', // Your custom font
    fontWeight: 'normal',
  },
  footer: {
    width: '100%',
    height: 56, // Equivalent to h-14
    marginTop: 32, // Equivalent to mt-8
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)', // Equivalent to white/20
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Approximate for backdrop-blur-md
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIndicator: {
    width: 128, // Equivalent to w-32
    height: 5, // Equivalent to h-[5px]
    backgroundColor: Colors.white, // Assuming you have white in your Colors
    borderRadius: 100, // For a full rounded effect
  },
});