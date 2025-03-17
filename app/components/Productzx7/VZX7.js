import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MobileCategory from '../Home/MobileCategory';
import Mobilesummary from '../Home/MobileSummary';
import Mobilefooter from '../Home/MobileFooter';
import Mobilevx7 from './Mobilevzx7';

import MobileOptionsZX7 from './MobileOptionszx7';
import Zx7features from './zx7features';

export default function Vzx7(){
  const navigation = useNavigation();
  return (
    <ScrollView className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <View className="w-full h-full">
        <View id="overlay" className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80" />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="mt-5 text-ash manropemed pl-4 font-bold"
        >
          <Text>Go Back</Text>
        </TouchableOpacity>
        <View id="body" className="w-full h-full">
          <View className="w-full flex flex-col px-5 bg-white space-y-8">
           <Mobilevx7/>
           <Zx7features/>
            
            
            <MobileOptionsZX7/>
          
            <View className="w-full ">
              <MobileCategory />
            </View>
            <Mobilesummary />
          
          </View>
          <View className="w-full h-[654px] mt-10 ">
            <Mobilefooter />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
