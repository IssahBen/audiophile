import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MobileOptionsMark1() {
  const navigation = useNavigation();
  return (
    <View className="flex flex-col w-full space-y-10 smallhide largehide">
      <Text className="text-center manropebh6 font-bold">YOU MAY ALSO LIKE</Text>
      <View className="flex flex-col w-full items-center space-y-4">
        <View className="w-full h-[120px] mobilemark2option bg-cover rounded-xl" />
        <Text className="text-center font-bold manropebh6 tracking-wide">XX99 MARK II</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HeadphonesMark2');
          }}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px]"
        >
          <Text>SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-col w-full items-center space-y-4">
        <View className="w-full h-[120px] mobilexx59option bg-cover rounded-xl" />
        <Text className="text-center font-bold manropebh6 tracking-wide">XX59</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HeadphonesXX59');
          }}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px]"
        >
          <Text>SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-col w-full items-center space-y-4">
        <View className="w-full h-[120px] mobilezx9option bg-cover rounded-xl" />
        <Text className="text-center font-bold manropebh6 tracking-wide">ZX9 SPEAKER</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SpeakersZX9');
          }}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px]"
        >
          <Text>SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}