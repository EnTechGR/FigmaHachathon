import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ImageBackground } from 'react-native'; // Import ImageBackground
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';

export default function GameLinkScreen() {
  const [fontsLoaded] = useFonts({
    'Kings': require('../../assets/fonts/Kings-Regular.ttf'),
    'Playfair': require('../../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return null;
  }


  const handleSubmit = () => {
    router.push('/game-start');
  };

  return (
    <ImageBackground // Use ImageBackground instead of View
      source={require('../../assets/images/background.png')} // Path to your image
      style={styles.container}
      resizeMode="cover" // Or 'contain', 'stretch', etc.
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>9:41</Text>
        <View style={styles.statusBarIcons}>
          <View style={styles.signalBar1} />
          <View style={styles.signalBar2} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Nexus</Text>
        <Text style={styles.subtitle}>Welcome Outcast</Text>
        <Text style={styles.paragraph}>Prove Your Worth</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Game Reference Code"
          placeholderTextColor={Colors.grey}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerIndicator} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: Colors.black, // Remove backgroundColor
    paddingHorizontal: 16,
    paddingTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
  },
  statusBarText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: 'System',
  },
  statusBarIcons: {
    flexDirection: 'row',
    gap: 8,
    opacity: 0.5,
  },
  signalBar1: {
    width: 20,
    height: 8,
    backgroundColor: Colors.white,
    borderRadius: 2,
  },
  signalBar2: {
    width: 16,
    height: 12,
    backgroundColor: Colors.white,
  },
  batteryIcon: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 4,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
    justifyContent: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 48,
    fontFamily: 'Kings',
    fontWeight: 'normal',
    lineHeight: 48,
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.white,
    fontSize: 36,
    fontFamily: 'Playfair',
    fontWeight: 'normal',
    lineHeight: 53,
    textAlign: 'center',
  },
  paragraph: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: 'Playfair',
    fontWeight: 'normal',
    lineHeight: 28,
    textAlign: 'center',
  },
  input: {
    width: 320,
    height: 48,
    backgroundColor: Colors.neutral900,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: Colors.red900,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: Colors.white,
    fontSize: 16,
  },
  button: {
    width: 320,
    paddingVertical: 12,
    backgroundColor: Colors.red950,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: 'Playfair',
    fontWeight: 'normal',
  },
  footer: {
    width: '100%',
    height: 56,
    marginTop: 32,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIndicator: {
    width: 128,
    height: 5,
    backgroundColor: Colors.white,
    borderRadius: 100,
  },
});