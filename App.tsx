import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Linking,
  Platform,
  NativeModules,
  Alert,
} from 'react-native';

const { PermissionModule } = NativeModules;

// Open App Info → user manually enable accessibility
const openAccessibilitySettings = () => {
  if (Platform.OS === 'android') {
    Linking.openSettings();
  }
};

const App = () => {
  const [accessibilityEnabled, setAccessibilityEnabled] = useState(false);
  const [pin, setPin] = useState('');
  const [pinSet, setPinSet] = useState(false);

  const checkAccessibility = async () => {
    try {
      const enabled = await PermissionModule.isAccessibilityEnabled();
      setAccessibilityEnabled(enabled);
    } catch (error) {
      console.log('Accessibility check error', error);
    }
  };

  useEffect(() => {
    checkAccessibility();
  }, []);

  const savePin = () => {
    if (pin.length < 4) {
      Alert.alert('PIN Error', 'PIN must be at least 4 digits');
      return;
    }
    setPinSet(true);
  };

  // 🔐 ACCESSIBILITY SCREEN
  if (!accessibilityEnabled) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Permission Required</Text>

        <Text style={styles.desc}>
          Please enable Accessibility permission for Private Shop
        </Text>

        <TouchableOpacity style={styles.button} onPress={openAccessibilitySettings}>
          <Text style={styles.buttonText}>Open Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={checkAccessibility}>
          <Text style={styles.link}>I have enabled it</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 🔐 PIN SETUP
  if (!pinSet) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Set Secure PIN</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter 4 digit PIN"
          keyboardType="number-pad"
          secureTextEntry
          maxLength={6}
          value={pin}
          onChangeText={setPin}
        />

        <TouchableOpacity style={styles.button} onPress={savePin}>
          <Text style={styles.buttonText}>Save PIN</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 🏠 DASHBOARD
  return (
    <View style={styles.container}>
      <Text style={styles.success}>Welcome to Private Shop 🔐</Text>
      <Text>Dashboard coming next...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#acbeff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
  },
  desc: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2f3cff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  link: {
    marginTop: 15,
    color: '#1e40af',
  },
  success: {
    fontSize: 20,
    fontWeight: '700',
    color: 'green',
  },
});

export default App;