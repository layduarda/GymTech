import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './src/screens/HomeScreen';
import Login from './src/screens/Login';
import SignupScreen from './src/screens/____SignUp';
import { loadFonts } from './src/utils/fonts';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <GestureHandlerRootView onLayout={onLayoutRootView}>
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
          <Stack.Screen name={"home"} component={HomeScreen} />
          <Stack.Screen name={"login"} component={Login} />
          <Stack.Screen name={"signup"} component={SignupScreen} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})