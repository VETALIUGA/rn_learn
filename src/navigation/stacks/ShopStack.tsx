import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../../pages/About';
import Main from '../../pages/Main';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Main" component={Main} options={{title: 'Main'}} />
        <Stack.Screen
          name="About"
          component={About}
          options={{title: 'About'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ShopStack;
