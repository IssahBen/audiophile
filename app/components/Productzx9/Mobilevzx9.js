import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";


const zx9 =require("../../../assets/Productimages/zx9p.jpg")
export default function Mobilevzx9(){
  const [zx9s, setZx9s] = useState(0);


  return (
    <View className="w-full flex flex-col space-y-8 h-[724px] mt-5 smallhide largehide">
      <Image source={zx9} className="w-full h-[352px] bg-cover" />

      <View className="flex flex-col w-full items-start space-y-4">
        <Text className="text-brown manropereg tracking-[10px]">NEW PRODUCT</Text>

        <View className="flex flex-col">
          <Text className="tracking-wide manropebh4 font-bold">ZX9</Text>
          <Text className="tracking-wide manropebh4 font-bold">SPEAKERS</Text>
        </View>

        <Text className="text-ash manropemed leading-6">
          Upgrade your sound system with the all-new ZX9 active speaker. It’s a
          bookshelf speaker system that offers truly wireless connectivity—
          creating new possibilities for more pleasing and practical audio setups.
        </Text>

        <Text className="manropebh5 font-bold">$4,500</Text>

        <View className="flex flex-row h-[48px] w-[296px] space-x-2">
          <View className="flex flex-row w-[120px] bg-ashwhite items-center px-5">
            <TouchableOpacity
              onPress={() => setZx9s((prev) => Math.max(0, prev - 1))}
            >
              <Text className="font-bold">-</Text>
            </TouchableOpacity>

            <TextInput
              value={String(zx9s)}
              editable={false}
              className="w-full h-[32px] text-black bg-ashwhite text-center font-bold"
            />

            <TouchableOpacity onPress={() => setZx9s((prev) => prev + 1)}>
              <Text className="font-bold">+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => setNumberOfZx9(zx9s)}
            className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-4"
          >
            <Text className="text-white">ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
