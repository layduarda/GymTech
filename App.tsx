import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/SignUp';
import HomeTab from './src/tabs/HomeTab';
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
        console.warn('huuum', e);
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
          <Stack.Screen name={"Home"} component={HomeScreen} />
          <Stack.Screen name={"login"} component={LoginScreen} />
          <Stack.Screen name={"signup"} component={SignupScreen} />
          <Stack.Screen name={"HomeTab"} component={HomeTab} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})