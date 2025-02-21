 import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Chat from '../screens/Chat';
import MyProfile from '../screens/MyProfile';
import Contacts from '../screens/Contacts';
import Calls from '../screens/Calls';
import SavedMessage from '../screens/SavedMessage';
import Settings from '../screens/Settings';

const CustomDrawerRootNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
        detachPreviousScreen: false,
      }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Calls" component={Calls} />
      <Stack.Screen name="SavedMessage" component={SavedMessage} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default CustomDrawerRootNavigator;
