import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PinVerifyScreen = ({ onSuccess }) => {
  const [pin, setPin] = useState('');

  const verifyPin = async () => {
    const savedPin = await AsyncStorage.getItem('REAL_PIN');

    if (pin === savedPin) {
      onSuccess();
    } else {
      Alert.alert('Wrong PIN');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🔐</Text>

      <Text style={styles.title}>Enter Your PIN</Text>
      <Text style={styles.subtitle}>
        App unlock karne ke liye apna PIN daale
      </Text>

      <TextInput
        style={styles.input}
        placeholder="••••"
        placeholderTextColor="#93c5fd"
        secureTextEntry
        keyboardType="number-pad"
        maxLength={4}
        value={pin}
        onChangeText={setPin}
      />

      <TouchableOpacity style={styles.button} onPress={verifyPin}>
        <Text style={styles.buttonText}>Unlock</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PinVerifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1a33',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    fontSize: 52,
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#e0f2fe',
  },
  subtitle: {
    color: '#93c5fd',
    marginTop: 6,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '75%',
    backgroundColor: '#0f2a52',
    borderRadius: 14,
    paddingVertical: 14,
    textAlign: 'center',
    fontSize: 22,
    color: '#ffffff',
    letterSpacing: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 16,
    elevation: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 1,
  },
});
