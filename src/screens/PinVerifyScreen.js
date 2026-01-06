import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PinVerifyScreen = ({ onSuccess }) => {
  const [pin, setPin] = useState('');

  const verifyPin = async () => {
    const savedPin = await AsyncStorage.getItem('REAL_PIN');

    if (pin === savedPin) {
      onSuccess();
    } else {
      Alert.alert('Galat PIN');
    }
  };

  return (
    <View>
      <Text>Enter PIN</Text>
      <TextInput
        secureTextEntry
        keyboardType="number-pad"
        value={pin}
        onChangeText={setPin}
      />
      <TouchableOpacity onPress={verifyPin}>
        <Text>Unlock</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PinVerifyScreen;
