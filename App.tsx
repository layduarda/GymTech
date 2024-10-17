import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { MainScreen } from './src/screens/MainScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { FichaScreen } from './src/screens/FichaScreen';
import {CalendarScreen} from './src/screens/CalendarScreen';
import {FeedScreen} from './src/screens/FeedScreen';
import {FichaInicialScreen} from  './src/screens/FichaInicialScreen';
import { ArtOneScreen } from './src/screens/Artigos/ArtOneScreen';

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
          <Stack.Screen name={"welcome"} component={WelcomeScreen} />
          <Stack.Screen name={"login"} component={LoginScreen} />
          <Stack.Screen name={"signup"} component={SignUpScreen} />
          <Stack.Screen name={"main"} component={MainScreen} />
          <Stack.Screen name={"feed"} component={FeedScreen} />
          <Stack.Screen name={"agenda"} component={CalendarScreen} />
          <Stack.Screen name={"ficha"} component={FichaScreen} />
          <Stack.Screen name={"fichaD"} component={FichaScreen} />
          <Stack.Screen name={"fichaI"} component={FichaInicialScreen} />
          <Stack.Screen name={"artigo1"} component={ArtOneScreen} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App;
