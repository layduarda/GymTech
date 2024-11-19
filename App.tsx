import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//Screens
import { CalendarScreen } from './src/screens/CalendarScreen';
import { ImagePreview } from './src/screens/Feed_Images/ImagePreview';
import { FeedScreen } from './src/screens/FeedScreen';
import { FichaInicialScreen } from './src/screens/FichaInicialScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { MainScreen } from './src/screens/MainScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';

//Screens Artigos
import { ArtFiveScreen } from './src/screens/Artigos/ArtFiveScreen';
import { ArtFourScreen } from './src/screens/Artigos/ArtFourScreen';
import { ArtOneScreen } from './src/screens/Artigos/ArtOneScreen';
import { ArtThreeScreen } from './src/screens/Artigos/ArtThreeScreen';
import { ArtTwoScreen } from './src/screens/Artigos/ArtTwoScreen';

//Screens Fichas
import { FichaAScreen } from './src/screens/Fichas/FIchaAScreen';
import { FichaBScreen } from './src/screens/Fichas/FichaBScreen';
import { FichaCScreen } from './src/screens/Fichas/FIchaCScreen';
import { FichaDScreen } from './src/screens/Fichas/FichaDScreen';
import { FichaEScreen } from './src/screens/Fichas/FichaEScreen';
import { loadFonts } from './src/utils/fonts';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/firebase';
import { ProfileTab } from './src/tabs/ProfileTab';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName="main">
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
);

const UnauthenticatedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName="welcome">
    <Stack.Screen name={"welcome"} component={WelcomeScreen} />
    <Stack.Screen name={"login"} component={LoginScreen} />
    <Stack.Screen name={"signup"} component={SignUpScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFonts()
      .then(() => {
        console.log("Fonts loadded");
        setIsLoading(false);
      })
      .catch((e) => {
        console.error("Failed to load fonts");
      });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  // if (isLoading) return <View><Text>Loading...</Text></View>

  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        {user ? <AuthenticatedStack /> : <UnauthenticatedStack />}
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App;
