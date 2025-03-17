
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const xx59 =require("../../../assets/Optionsbar/xx59.jpg")
const mark1 =require("../../../assets/Optionsbar/mark1.jpg")
const mark2 =require("../../../assets/Optionsbar/mark2.jpg")
const zx9 =require("../../../assets/Optionsbar/zx9.jpg")
export default function MobileOptions59() {
  const navigation = useNavigation();

  return (
    <View className="flex flex-col w-full gap-10 smallhide largehide">
      <Text className="text-center manropebh6 font-bold">YOU MAY ALSO LIKE</Text>

      <View className="flex flex-col w-full items-center gap-4">
        <Image
          source={mark2} // replace with actual image URL
          className="w-full h-[120px] mobilemark2option bg-cover rounded-xl"
        />
        <Text className="text-center font-bold manropebh6 tracking-wide">
          XX99 MARK II
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Mark2")}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px] flex items-center justify-center"
        >
          <Text className="text-center text-white">SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>

      <View className="flex flex-col w-full items-center gap-4">
        <Image
          source={mark1} // replace with actual image URL
          className="w-full h-[120px] mobilemark1option bg-cover rounded-xl"
        />
        <Text className="text-center font-bold manropebh6 tracking-wide">
          XX99 Mark I
        </Text>
         <TouchableOpacity
          onPress={() => navigation.navigate("Mark1")}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px] flex items-center justify-center"
        >
          <Text className="text-center text-white">SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
}
