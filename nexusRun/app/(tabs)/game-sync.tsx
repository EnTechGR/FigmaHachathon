import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

// Define a union type for the game names
type Game = 'League of Legends' | 'Valorant' | 'Teamflight Tactics';

const GameSyncScreen = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Function to handle button press
  const handleButtonPress = (game: Game) => {
    // If the same button is pressed, toggle selection off, otherwise set the selected game
    setSelectedGame(selectedGame === game ? null : game);
  };

  // Function to get button style based on selection
  const getButtonStyle = (game: Game) => {
    // Define button color based on the game
    const colorMap: Record<Game, string> = {
      'League of Legends': '#C30A3C',
      'Valorant': '#00B0B9',
      'Teamflight Tactics': '#FF9F00',
    };
    const buttonColor = colorMap[game];

    return {
      backgroundColor: selectedGame === game ? buttonColor : '#000',
      borderColor: selectedGame === game ? buttonColor : buttonColor,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={styles.timeText}>9:41</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Game Sync</Text>

        {/* Game Options */}
        {['League of Legends', 'Valorant', 'Teamflight Tactics'].map((game) => (
          <TouchableOpacity
            key={game}
            style={[styles.gameButton, getButtonStyle(game as Game)]}
            onPress={() => handleButtonPress(game as Game)}
          >
            <Text style={styles.gameButtonText}>{game}</Text>
          </TouchableOpacity>
        ))}

        {/* Done Button */}
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.indicator} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    paddingTop: 60,
    paddingBottom: 100,
    alignItems: 'center',
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
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Playfair',
    textAlign: 'center',
    lineHeight: 67,
    marginTop: 120,
  },
  gameButton: {
    width: '80%',
    height: 60,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
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
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B5000A',
    borderRadius: 4,
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
