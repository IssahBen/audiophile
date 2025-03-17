import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const xx59 =require("../../../assets/Optionsbar/xx59.jpg")
const mark1 =require("../../../assets/Optionsbar/mark1.jpg")
const mark2 =require("../../../assets/Optionsbar/mark2.jpg")
const zx9 =require("../../../assets/Optionsbar/zx9.jpg")
const zx7 =require("../../../assets/Optionsbar/zx7.jpg")
export default function MobileOptionsZX9() {
  const navigation = useNavigation();

  return (
    <View className="flex flex-col w-full space-y-10 smallhide largehide">
      <Text className="text-center manropebh6 font-bold mb-5">YOU MAY ALSO LIKE</Text>

      {/* ZX7 Speaker */}
      <View className="flex flex-col w-full items-center gap-4">
        <Image
          source={zx7}
          className="w-full h-[120px] bg-cover rounded-xl"
        />
        <Text className="text-center font-bold manropebh6 tracking-wide">ZX7 SPEAKER</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Vzx7")}
          className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px] flex items-center justify-center"
        >
          <Text className="text-white">SEE PRODUCT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
