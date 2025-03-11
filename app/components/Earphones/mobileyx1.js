import { View, Text, TouchableOpacity,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const yx1 =require("../../../assets/Earphones/yx1.jpg")
export default function Mobileyx1() {
  const navigation = useNavigation();
  function HandleClick() {
    navigation.navigate("/earphones/yx1");
  }
  return (
    <View className="w-full flex flex-col space-y-8 h-[600px] mt-14 smallhide largehide">
      <ImageBackground source={yx1} className="w-full h-[352px] mobilecyx1 bg-cover mb-2" />
      <View className="flex flex-col w-full items-center space-y-4">
        <Text className="text-brown manropereg tracking-[10px] mb-2">NEW PRODUCT</Text>
        <View className="flex flex-col w-full items-center justify-center mb-2">
          <Text className="tracking-wide manropebh4 text-center font-bold">YX1 WIRELESS</Text>
          <Text className="tracking-wide manropebh4 text-center font-bold">EARPHONES</Text>
        </View>
        <Text className="text-center text-ash manropemed leading-6">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </Text>
        <TouchableOpacity onPress={HandleClick} className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10">
          <Text>SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
