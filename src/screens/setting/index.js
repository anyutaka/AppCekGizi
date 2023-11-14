import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

const menuItems = [
  'Personal information',
  'Account Management',
  'Home feed Tunner',
  'Claimed Account',
  'Notifications',
  'Privacy and Data',
  'Security and log ins',
];

const Action = ['Add Acount', 'Log out'];

const Support = ['Get help', 'Terms of Service', 'Privacy and Policy', 'About'];

const handleMenuItemPress = menuItem => {
  console.log(`MenuItem selected: ${menuItem}`);
};

const handleActionPress = action => {
  console.log(`Action selected: ${action}`);
};

const renderMenuItem = (item, onPress) => (
  <TouchableOpacity
    key={item}
    style={styles.menuItem}
    onPress={() => onPress(item)}>
    <Text style={styles.menuItemText}>{item}</Text>
    <Text style={styles.menuItemText}>{'>'}</Text>
  </TouchableOpacity>
);

const renderActionItem = (item, onPress) => (
  <TouchableOpacity
    key={item}
    style={styles.actionItem}
    onPress={() => onPress(item)}>
    <Text>{item}</Text>
  </TouchableOpacity>
);

const SettingScreen = ({setCurrentScreen}) => {
  console.log('Rendering SettingScreen');
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Settings</Text>
        {menuItems.map(item => renderMenuItem(item, handleMenuItemPress))}
      </View>

      <View style={styles.separator} />

      <View style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Actions</Text>
        {Action.map(item => renderMenuItem(item, handleActionPress))}
      </View>

      <View style={styles.separator} />

      <View style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Support</Text>
        {Support.map(item => renderMenuItem(item, handleMenuItemPress))}
      </View>

      {/* <Button
        title="Kembali ke Home"
        onPress={() => setCurrentScreen('Home')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: '#004D47',
  },
  menuContainer: {
    marginBottom: 24,
  },
  menuItemText: {
    fontSize: 17,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  actionItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#010101',
    borderRadius: 8,
    marginBottom: 8,
  },
  separator: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default SettingScreen;