import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.subtitle}>Protect your privacy</Text>
      </View>

      {/* AppLock Card */}
      <View style={styles.bigCard}>
        <View>
          <Text style={styles.cardTitle}>Applock</Text>
          <Text style={styles.cardSub}>Nice to meet you</Text>
        </View>
        <View style={styles.lockIcon}>
          <Text style={{ fontSize: 20 }}>🔒</Text>
        </View>
      </View>

      {/* More Features */}
      <Text style={styles.sectionTitle}>More Features</Text>

      <View style={styles.grid}>
        <FeatureBox title="Password type" icon="🔐" />
        <FeatureBox title="Themes" icon="🎨" />
        <FeatureBox title="Fake icon" icon="👻" />
        <FeatureBox title="Intruder selfie" icon="📸" />
      </View>
    </View>
  );
};

const FeatureBox = ({ title, icon }) => (
  <TouchableOpacity style={styles.smallCard}>
    <Text style={styles.icon}>{icon}</Text>
    <Text style={styles.featureText}>{title}</Text>
  </TouchableOpacity>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f46e5',
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
  },
  hello: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
  },
  subtitle: {
    color: '#c7d2fe',
    marginTop: 4,
  },
  bigCard: {
    backgroundColor: '#6366f1',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  cardSub: {
    color: '#c7d2fe',
    marginTop: 4,
  },
  lockIcon: {
    backgroundColor: '#4f46e5',
    padding: 14,
    borderRadius: 14,
  },
  sectionTitle: {
    marginTop: 30,
    marginBottom: 14,
    color: '#e0e7ff',
    fontWeight: '700',
    fontSize: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  smallCard: {
    width: '48%',
    backgroundColor: '#6366f1',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  icon: {
    fontSize: 26,
    marginBottom: 10,
  },
  featureText: {
    color: '#e0e7ff',
    fontWeight: '600',
    textAlign: 'center',
  },
});
