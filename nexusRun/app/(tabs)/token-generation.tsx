import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TokenGeneratedScreen = () => {
  return (
    <View style={styles.container}>
      {/* Unique Token Generated Text */}
      <Text style={styles.tokenGeneratedText}>Unique Token Generated</Text>

      {/* Footer Indicator */}
      <View style={styles.footer}>
        <View style={styles.footerIndicator} />
      </View>

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
        </View>
      </View>

      {/* Token Display and Save Prompt */}
      <View style={styles.tokenContainer}>
        <View style={styles.tokenBox}>
          <Text style={styles.tokenNumber}>15241578750190521</Text>
        </View>
        <Text style={styles.savePrompt}>Save in secure location</Text>
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  tokenGeneratedText: {
    position: 'absolute',
    top: 262,
    left: '50%',
    transform: [{ translateX: -140 }],
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Playfair',
    fontWeight: '500',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 56,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIndicator: {
    width: 32,
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  statusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'SF Pro',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 6,
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 3,
    marginLeft: 8,
    opacity: 0.3,
  },
  tokenContainer: {
    position: 'absolute',
    top: 369,
    left: 40,
    width: 320,
    justifyContent: 'space-between',
  },
  tokenBox: {
    borderWidth: 2,
    borderColor: '#B92A2A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  tokenNumber: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Playfair',
    fontWeight: '700',
    letterSpacing: 9,
  },
  savePrompt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Playfair',
    fontWeight: 'normal',
    marginBottom: 16,
  },
  doneButton: {
    backgroundColor: '#B92A2A',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButtonText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Playfair',
  },
});

export default TokenGeneratedScreen;
