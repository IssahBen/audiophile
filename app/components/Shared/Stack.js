import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home/Home';
import Headphones from '../Headphones/Headphones';
import MARK1 from '../ProductMark1/Mark1';
const Stack = createNativeStackNavigator();
export default function RootStack() {
 
  <Stack.Navigator initialRouteName="Headphones">
     <Stack.Screen name="Headphones" component={Headphones}  options={{ headerShown: false }} />
    
   </Stack.Navigator>
;
}