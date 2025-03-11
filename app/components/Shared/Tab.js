import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Earphones from '../Earphones/Earphones';
import Headphones from '../Headphones/Headphones';
import Speakers from '../Speakers/Speakers';
import Home from '../Home/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../Cart/Cart';

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
      <Tab.Screen name="Headphones" component={Headphones} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="headphones" size={size} color={color} />;
          },
        }} />
      <Tab.Screen name="Earphones" component={Earphones} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="earbuds" size={size} color={color} />;
          },
        }} />
      <Tab.Screen name="Speakers" component={Speakers} options={{
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

