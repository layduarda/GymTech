import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//Screens
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { MainScreen } from './src/screens/MainScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { CalendarScreen } from './src/screens/CalendarScreen';
import { FichaInicialScreen } from './src/screens/FichaInicialScreen';
import { ImagePreview } from './src/screens/Feed_Images/ImagePreview';
import { FeedScreen } from './src/screens/FeedScreen';

//Screens Artigos
import { ArtOneScreen } from './src/screens/Artigos/ArtOneScreen';
import { ArtTwoScreen } from './src/screens/Artigos/ArtTwoScreen';
import { ArtThreeScreen } from './src/screens/Artigos/ArtThreeScreen';
import { ArtFourScreen } from './src/screens/Artigos/ArtFourScreen';
import { ArtFiveScreen } from './src/screens/Artigos/ArtFiveScreen';

//Screens Fichas
import { FichaAScreen } from './src/screens/Fichas/FIchaAScreen';
import { FichaBScreen } from './src/screens/Fichas/FichaBScreen';
import { FichaCScreen } from './src/screens/Fichas/FIchaCScreen';
import { FichaDScreen } from './src/screens/Fichas/FichaDScreen';
import { FichaEScreen } from './src/screens/Fichas/FichaEScreen';
import { loadFonts } from './src/utils/fonts';

import { ProfileTab } from './src/tabs/ProfileTab';

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
          <Stack.Screen name={"perfil"} component={ProfileTab} />
          <Stack.Screen name={"agenda"} component={CalendarScreen} />
          <Stack.Screen name={"fichaI"} component={FichaInicialScreen} />
          <Stack.Screen name={"artigo1"} component={ArtOneScreen} />
          <Stack.Screen name={"artigo2"} component={ArtTwoScreen} />
          <Stack.Screen name={"artigo3"} component={ArtThreeScreen} />
          <Stack.Screen name={"artigo4"} component={ArtFourScreen} />
          <Stack.Screen name={"artigo5"} component={ArtFiveScreen} />
          <Stack.Screen name={"fichaA"} component={FichaAScreen} />
          <Stack.Screen name={"fichaB"} component={FichaBScreen} />
          <Stack.Screen name={"fichaC"} component={FichaCScreen} />
          <Stack.Screen name={"fichaD"} component={FichaDScreen} />
          <Stack.Screen name={"fichaE"} component={FichaEScreen} />
          <Stack.Screen name={"feed"} component={FeedScreen} />
          <Stack.Screen name={"imagepreview"} component={ImagePreview} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App;
