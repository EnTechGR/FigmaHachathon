import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CreateProfileScreen = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/token-generation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Profile</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#fff"
          />
        </View>

        <View style={styles.inputField}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#fff"
          />
        </View>

        <View style={styles.inputField}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#fff"
            secureTextEntry
          />
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <View style={styles.footerIndicator} />
      </View>

      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#000',
  },
  title: {
    position: 'absolute',
    top: 102,
    left: '50%',
    transform: [{ translateX: -100 }],
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Playfair',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  inputContainer: {
    position: 'absolute',
    top: 183,
    left: 40,
    width: 320,
    justifyContent: 'space-between',
  },
  inputField: {
    marginBottom: 20,
  },
  label: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Playfair',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  input: {
    height: 48,
    backgroundColor: '#1A1A1A',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#B92A2A',
    color: '#fff',
    paddingLeft: 16,
    fontSize: 18,
    fontFamily: 'Playfair',
  },
  submitButton: {
    position: 'absolute',
    bottom: 120,
    left: 40,
    backgroundColor: '#B92A2A',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Playfair',
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
});

export default CreateProfileScreen;

