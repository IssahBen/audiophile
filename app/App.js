import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { verifyInstallation } from 'nativewind';
import "../global.css"
import MyTabs from './components/Shared/Tab';
import MARK1 from './components/ProductMark1/Mark1';
const Stack = createNativeStackNavigator();
export default function App() {
  verifyInstallation();
  return( 
    <NavigationContainer>
      <MyTabs/>
</NavigationContainer>)
}



