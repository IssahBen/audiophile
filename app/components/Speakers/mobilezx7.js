import { View, Text, TouchableOpacity,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const zx7 =require("../../../assets/Speakers/zx7.jpg")
export default function Mobilezx7() {
  const navigation = useNavigation();
  function HandleClick() {
    navigation.navigate("Vzx7");
  }
  return (
    <View className="w-full flex flex-col space-y-8 h-[600px] mt-14">
      <ImageBackground source={zx7} className="w-full h-[352px]  bg-cover  " />
      <View className="flex flex-col w-full items-center space-y-4 mt-5 ">
        <View className="flex flex-col w-full items-center justify-center mb-2">
          <Text className="tracking-wide manropebh4 text-center font-bold">ZX7</Text>
          <Text className="tracking-wide manropebh4 text-center font-bold">SPEAKER</Text>
        </View>
        <Text className="text-center text-ash manropemed leading-6">
          Stream high quality sound wirelessly with minimal loss. The ZX7
          bookshelf speaker uses high-end audiophile components that represent
          the top of the line powered speakers for home or studio use.
        </Text>
        <TouchableOpacity onPress={HandleClick} className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10 mt-5">
          <Text>SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
