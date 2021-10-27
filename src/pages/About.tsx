import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const About = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>About page lol</Text>
      <Button title="About" onPress={() => navigation.navigate('Main')} />
    </SafeAreaView>
  );
};

export default About;
