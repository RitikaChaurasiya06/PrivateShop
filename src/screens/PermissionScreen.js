import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, NativeModules } from 'react-native';

const { PermissionModule } = NativeModules;

const PermissionScreen = ({ navigation }) => {

  const checkPermission = async () => {
    const enabled = await PermissionModule.isAccessibilityEnabled();
    if (enabled) {
      navigation.replace('PinSetup');
    }
  };

  useEffect(() => {
    checkPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enable Accessibility Permission</Text>

      <TouchableOpacity onPress={checkPermission}>
        <Text style={styles.link}>I have enabled</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PermissionScreen;

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  title:{fontSize:20},
  link:{color:'blue',marginTop:20}
});