import { StatusBar } from "expo-status-bar";
import { StripeProvider } from "@stripe/stripe-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { verifyInstallation } from "nativewind";
import "../global.css";
import MyTabs from "./components/Shared/Tab";
import { DataProvider } from "./components/Context/DataContext";
const Stack = createNativeStackNavigator();
export default function App() {
  verifyInstallation();
  return (
    <DataProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </DataProvider>
  );
}
