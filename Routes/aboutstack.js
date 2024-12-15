import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../Screens/about';

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
        headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
      }}
    >
      <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AboutStack;
