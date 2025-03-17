import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Earphones from '../Earphones/Earphones';
import Headphones from '../Headphones/Headphones';
import Speakers from '../Speakers/Speakers';
import Home from '../Home/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../Cart/Cart';
import RootStack from './Stack';
import Vxx59 from '../Productxx59/Vxx59';
import MARK1 from '../ProductMark1/Mark1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Vzx7 from '../Productzx7/VZX7';
import Mark2 from '../ProductMark2/Mark2';
import Vzx9 from '../Productzx9/VZx9';
import Vyx1 from '../Productyx1/Vyx1';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
    screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black' }
      }} >
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }} />
    <Tab.Screen name="Headphones" component={HeadphonesStack} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="headphones" size={size} color={color} />;
          }
        }} />
      <Tab.Screen name="Earphones" component={EarphonesStack} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="earbuds" size={size} color={color} />;
          }
        }} />
      <Tab.Screen name="Speakers" component={SpeakersStack} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="speaker" size={size} color={color} />;
          },
        }}  />
      <Tab.Screen name="Cart" component={Cart} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cart" size={size} color={color} />;
          },
        }}  />
     
    </Tab.Navigator>
  );
}


function HeadphonesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HeadphonesList" component={Headphones} options={{ headerShown: false }} />
      <Stack.Screen name="Mark1" component={MARK1} options={{ headerShown: false }} />
      <Stack.Screen name="Mark2" component={Mark2} options={{ headerShown: false }} />
      <Stack.Screen name="Vxx59" component={Vxx59} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
function SpeakersStack(){
  return (
    <Stack.Navigator>
       <Stack.Screen name="Speakerslist" component={Speakers} options= {{ headerShown: false }}/>
      <Stack.Screen name="Vzx7"  component={Vzx7}   options={{ headerShown: false }}/>
      <Stack.Screen name="Vzx9" component={Vzx9}  options={{ headerShown: false }}/>

    </Stack.Navigator>
  );
}
function EarphonesStack(){
  return (
    <Stack.Navigator>
       <Stack.Screen name="EarphonesList"  component={Earphones}  options= {{ headerShown: false }}/>
      <Stack.Screen name="Vyx1" component={Vyx1} options={{ headerShown: false }}/>
     

    </Stack.Navigator>
  );
}

