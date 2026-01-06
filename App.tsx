import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PinSetupScreen from './src/screens/PinSetupScreen';
import PinVerifyScreen from './src/screens/PinVerifyScreen';
import HomeScreen from './src/screens/HomeScreen';

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

  // 🔐 NEW USER
  if (!pinExists) {
    return <PinSetupScreen onPinSaved={() => setPinExists(true)} />;
  }

  // 🔓 VERIFY PIN
  if (!loggedIn) {
    return <PinVerifyScreen onSuccess={() => setLoggedIn(true)} />;
  }

  // 🏠 DASHBOARD
  return <HomeScreen />;
}
