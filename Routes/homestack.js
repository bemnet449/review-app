import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/home';
import RDetail from '../Screens/reviewDetails';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
        headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen
        name="ReviewD"
        component={RDetail}
        options={{ title: 'Review Details' }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
