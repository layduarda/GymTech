import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import Login from './src/screens/Login';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
          <Stack.Screen name={"home"} component={HomeScreen} />
          <Stack.Screen name={"login"} component={Login} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})