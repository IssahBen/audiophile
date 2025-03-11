import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { verifyInstallation } from 'nativewind';
import "../global.css"
import MyTabs from './components/Shared/Tab';
export default function App() {
  verifyInstallation();
  return( 
    <NavigationContainer>
     <MyTabs/>
</NavigationContainer>)
}



