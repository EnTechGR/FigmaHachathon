import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameSyncScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.timeText}>9:41</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Game Sync</Text>

      {/* Game Options */}
      <TouchableOpacity style={styles.gameButton}>
        <Text style={styles.gameButtonText}>League of Legends</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.gameButton}>
        <Text style={styles.gameButtonText}>Valorant</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.gameButton}>
        <Text style={styles.gameButtonText}>Teamflight Tactics</Text>
      </TouchableOpacity>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.indicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  timeText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'SF Pro',
  },
  title: {
    position: 'absolute',
    top: 102,
    left: 40,
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Playfair',
    textAlign: 'center',
    lineHeight: 67,
  },
  gameButton: {
    width: '80%',
    height: 60,
    backgroundColor: '#C30A3C',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B5000A',
    borderRadius: 4,
    alignSelf: 'center',
  },
  gameButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Playfair',
    letterSpacing: 1,
  },
  doneButton: {
    width: '80%',
    height: 60,
    backgroundColor: '#C30A3C',
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B5000A',
    borderRadius: 4,
    alignSelf: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Playfair',
    letterSpacing: 1,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  indicator: {
    width: 80,
    height: 5,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 100,
  },
});

export default GameSyncScreen;
