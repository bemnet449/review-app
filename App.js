import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import HomeStack from './Routes/homestack';
import AboutStack from './Routes/aboutstack';

const Drawer = createDrawerNavigator();

const getFonts = () =>
  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

export default function App() {
  const [fontLoad, setFontLoad] = useState(false);

  useEffect(() => {
    getFonts().then(() => setFontLoad(true));
  }, []);

  if (fontLoad) {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({ route }) => ({
            headerShown: route.name !== 'ReviewD', // Hide header for ReviewD screen
          })}
        >
          <Drawer.Screen name="GameZone" component={HomeStack} />
          <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
