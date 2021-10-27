import React from 'react';
import {useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import NavigationTab from './NavigationTab';

const NavigationBar = ({setTab, currentTab}) => {
  return (
    <View style={styles.btnWrap}>
      <NavigationTab
        title="main"
        tabId={1}
        currentTab={currentTab}
        setTab={setTab}
      />
      <NavigationTab
        title="about"
        tabId={2}
        currentTab={currentTab}
        setTab={setTab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnWrap: {display: 'flex', flexDirection: 'row', width: '100%'},
});

export default NavigationBar;
