import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home/Home';
import Headphones from '../Headphones/Headphones';
const StackNav = createNativeStackNavigator();
export default function Stack(){
    return (
       
          <StackNav.Navigator>
            <StackNav.Screen
              name="Home"
              component={Home}
              options={{title: 'Home'}}
            />
            <StackNav.Screen name="Headphones" component={Headphones} />
          </StackNav.Navigator>
        
      ); 
}