import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import M59features from './M59features';
import MobileOptions59 from './MobileOptions59';
import MobileVXX59 from './Mobilevxx59';
import MobileCategory from '../Home/MobileCategory';
import Mobilesummary from '../Home/MobileSummary';
import Mobilefooter from '../Home/MobileFooter';

export default function Vxx59() {
  const navigation = useNavigation();
  return (
    <ScrollView className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <View className="w-full h-full">
        <View id="overlay" className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80" />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="mt-5  text-ash manropemed pl-4 font-bold"
        >
          <Text>Go Back</Text>
        </TouchableOpacity>
        <View id="body" className="w-full h-full">
          <View className="w-full flex flex-col px-5 bg-white space-y-8">
            <MobileVXX59/>
           
            <M59features />
            
            <MobileOptions59/>
          
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
