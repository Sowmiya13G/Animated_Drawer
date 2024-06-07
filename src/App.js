import 'react-native-reanimated';
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomDrawerRootNavigator from './navigators/CustomDrawerRootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CustomDrawerRootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
