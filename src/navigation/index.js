import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/dashBoard';
import Result from '../screens/result';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}

export default AppStack