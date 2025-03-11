import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import "../global.css"
import MyTabs from './components/Shared/Tab';
export default function App() {
  return( 
    <NavigationContainer>
     <MyTabs/>
</NavigationContainer>)
}



