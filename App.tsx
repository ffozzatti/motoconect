import React from 'react';
import { SafeAreaView, ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#051D40"} barStyle='light-content'/>
      <Routes />
    </NavigationContainer>

  );
}


