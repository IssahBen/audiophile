
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const xx59 =require("../../../assets/Optionsbar/xx59.jpg")
const mark1 =require("../../../assets/Optionsbar/mark1.jpg")
const zx9 =require("../../../assets/Optionsbar/zx9.jpg")
export default function MobileOptionsMark2() {
  const navigation = useNavigation();

  return (
    <View className="flex flex-col w-full space-y-10 smallhide largehide">
      <Text className="text-center manropebh6 font-bold">YOU MAY ALSO LIKE</Text>

      <View className="flex flex-col w-full items-center space-y-4">
        <Image
          source={mark1} // replace with actual image URL
          className="w-full h-[120px] mobilemark1option bg-cover rounded-xl"
        />
        <Text className="text-center font-bold manropebh6 tracking-wide">
          XX99 MARK I
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Mark1")}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px]"
        >
          <Text className="text-center text-white">SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>

      <View className="flex flex-col w-full items-center space-y-4">
        <Image
          source={xx59} // replace with actual image URL
          className="w-full h-[120px] mobilexx59option bg-cover rounded-xl"
        />
        <Text className="text-center font-bold manropebh6 tracking-wide">XX59</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Vxx59")}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px]"
        >
          <Text className="text-center text-white">SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
