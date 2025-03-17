import { View, Text, TouchableOpacity,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const xx59 =require("../../../assets/Optionsbar/xx59.jpg")
const mark2 =require("../../../assets/Optionsbar/mark2.jpg")
const zx9 =require("../../../assets/Optionsbar/zx9.jpg")
export default function MobileOptionsMark1() {
  const navigation = useNavigation();
  return (
    <View className="flex flex-col w-full gap-10 smallhide largehide">
      <Text className="text-center manropebh6 font-bold">YOU MAY ALSO LIKE</Text>
      <View className="flex flex-col w-full items-center gap-4">
        <ImageBackground source={mark2} className="w-full h-[120px] mobilemark2option bg-cover rounded-xl" />
        <Text className="text-center font-bold manropebh6 tracking-wide">XX99 MARK II</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Mark2")}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px] flex items-center justify-center"
        >
          <Text className="text-center text-white">SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-col w-full items-center gap-4">
        <ImageBackground source={xx59} className="w-full h-[120px] mobilexx59option bg-cover rounded-xl" />
        <Text className="text-center font-bold manropebh6 tracking-wide">XX59</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Vxx59")}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px] flex items-center justify-center"
        >
          <Text className="text-center text-white">SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}