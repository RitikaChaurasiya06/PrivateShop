import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PinSetupScreen from './src/screens/PinSetupScreen';
import PinVerifyScreen from './src/screens/PinVerifyScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [pinExists, setPinExists] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkPin();
  }, []);

  const checkPin = async () => {
    const savedPin = await AsyncStorage.getItem('REAL_PIN');
    setPinExists(!!savedPin);
    setLoading(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  // 🔐 NEW USER → SET PIN
  if (!pinExists) {
    return <PinSetupScreen onPinSaved={() => setPinExists(true)} />;
  }

  // 🔓 EXISTING USER → VERIFY PIN
  if (!loggedIn) {
    return <PinVerifyScreen onSuccess={() => setLoggedIn(true)} />;
  }

  // 🏠 DASHBOARD
  return <Text>Welcome to Real Dashboard</Text>;
}
