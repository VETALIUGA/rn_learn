import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from '../pages/Main';
import About from '../pages/About';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './stacks/MainStack';
import ShopStack from './stacks/ShopStack';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  const [tab, setTab] = useState(1);
  return (
    <React.Fragment>
      <NavigationContainer>
        {tab === 1 ? <MainStack /> : null}
        {tab === 2 ? <ShopStack /> : null}
      </NavigationContainer>
      <NavigationBar currentTab={tab} setTab={setTab} />
    </React.Fragment>
  );
}
