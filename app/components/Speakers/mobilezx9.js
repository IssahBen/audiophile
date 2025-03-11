import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const zx9 =require("../../../assets/Speakers/zx9.jpg")
export default function Mobilezx9() {
  const navigation = useNavigation();
  function HandleClick() {
    navigation.navigate("/speakers/zx9");
  }
  return (
    <View className="w-full flex flex-col space-y-8 h-[600px]  ">
      <ImageBackground source={zx9} className="w-full h-[352px] mobileczx9 bg-cover" />
      <View className="flex flex-col w-full items-center space-y-5 mt-5">
        <Text className="text-brown manropereg tracking-[10px] mb-2">NEW PRODUCT</Text>
        <View className="flex flex-col w-full items-center justify-center mb-2">
          <Text className="tracking-wide manropebh4 text-center font-bold">ZX9</Text>
          <Text className="tracking-wide manropebh4 text-center font-bold">SPEAKER</Text>
        </View>
        <Text className="text-center text-ash manropemed leading-6">
          Upgrade your sound system with the all-new ZX9 active speaker. It's a
          bookshelf speaker system that offers truly wireless
          connectivity—creating new possibilities for more pleasing and practical
          audio setups.
        </Text>
        <TouchableOpacity onPress={HandleClick} className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10">
          <Text>SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
