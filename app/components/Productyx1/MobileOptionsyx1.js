
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const xx59 =require("../../../assets/Optionsbar/xx59.jpg")
const mark1 =require("../../../assets/Optionsbar/mark1.jpg")
const mark2 =require("../../../assets/Optionsbar/mark2.jpg")
const zx9 =require("../../../assets/Optionsbar/zx9.jpg")
export default function MobileOptionsYX1() {
  const navigation = useNavigation();

  return (
    <View className="flex flex-col w-full space-y-10">
      <Text className="text-center manropebh6 font-bold">YOU MAY ALSO LIKE</Text>

      {/* XX99 MARK 1 */}
      <View className="flex flex-col w-full items-center space-y-4">
        <Image source={mark1} className="w-full h-[120px] bg-cover rounded-xl" />
        <Text className="text-center font-bold manropebh6 tracking-wide">XX99 MARK 1</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("HeadphonesMark1")}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px] flex justify-center items-center"
        >
          <Text className="text-white font-bold">SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>

      {/* XX59 */}
      <View className="flex flex-col w-full items-center space-y-4">
        <Image source={xx59} className="w-full h-[120px] bg-cover rounded-xl" />
        <Text className="text-center font-bold manropebh6 tracking-wide">XX59</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Headphones/Vxx59")}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px] flex justify-center items-center"
        >
          <Text className="text-white font-bold">SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>

      {/* ZX9 SPEAKER */}
      <View className="flex flex-col w-full items-center space-y-4">
        <Image source={zx9} className="w-full h-[120px] bg-cover rounded-xl" />
        <Text className="text-center font-bold manropebh6 tracking-wide">ZX9 SPEAKER</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SpeakersZX9")}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px] flex justify-center items-center"
        >
          <Text className="text-white font-bold">SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
