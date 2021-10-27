import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
} from 'react-native';

const NavigationTab = ({tabId, setTab, currentTab, title}) => {
  const isCurrent = currentTab === tabId;
  return (
    <TouchableOpacity
      style={[styles.btn, isCurrent ? styles.btnActive : null]}
      onPress={() => setTab(tabId)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 10,
  },
  btnActive: {
    backgroundColor: 'cyan',
  },
});

export default NavigationTab;
