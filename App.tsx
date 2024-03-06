import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import GS1 from './src/pages/GS1';

const App = () => {
  return(
    <SafeAreaView>
      <GS1/>
    </SafeAreaView>
  )
}

export default App;
