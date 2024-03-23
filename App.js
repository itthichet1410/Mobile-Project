import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Head from './components/Body';
import Body from './components/Body';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigation/HomeStack';

export default function App() {
  return (
    <NavigationContainer>
    <HomeStack/>
  </NavigationContainer>

  );
}
