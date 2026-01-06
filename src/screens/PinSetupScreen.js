import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PinSetupScreen = ({ onPinSaved }) => {
  const [pin, setPin] = useState('');

  const savePin = async () => {
    if (pin.length < 4) {
      Alert.alert('PIN kam se kam 4 digit ka hona chahiye');
      return;
    }

    await AsyncStorage.setItem('REAL_PIN', pin);
    onPinSaved();
  };

  return (
    <View>
      <Text>Set Your PIN</Text>
      <TextInput
        secureTextEntry
        keyboardType="number-pad"
        value={pin}
        onChangeText={setPin}
      />
      <TouchableOpacity onPress={savePin}>
        <Text>Save PIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PinSetupScreen;
