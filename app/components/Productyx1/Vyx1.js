import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MobileCategory from '../Home/MobileCategory';
import Mobilesummary from '../Home/MobileSummary';
import Mobilefooter from '../Home/MobileFooter';
import YX1features from './Yx1features';
import MobileVYX1 from './Mobilevyx1';

export default function Vyx1(){
  const navigation = useNavigation();
  return (
    <ScrollView className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <View className="w-full  bg-white h-full">
        <View id="overlay" className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80" />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="mt-5 text-ash manropemed pl-2 font-bold mb-5"
        >
          <Text className="font-bold">Go Back</Text>
        </TouchableOpacity>
        <View id="body" className="w-full h-full">
          <View className="w-full flex flex-col px-5 bg-white space-y-8">
           <MobileVYX1/>
           
            <YX1features/>
            
            
          
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
