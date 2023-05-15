import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/views/Home';
import MetaScreen from './src/views/Metas';
import LoginScreen from './src/views/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Metas' component={MetaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;