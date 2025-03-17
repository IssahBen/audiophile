import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";


const zx7 =require("../../../assets/Productimages/zx7p.jpg")
export default function Mobilevx7(){
  const [zx7s, setZx7s] = useState(0);
 

  return (
    <ScrollView className="w-full flex flex-col space-y-8 h-[724px] mt-5 smallhide largehide">
      <Image 
        source={zx7} 
        className="w-full h-[352px] bg-cover"
      />

      <View className="flex flex-col w-full items-start space-y-4">
        <Text className="text-brown manropereg tracking-[10px]">NEW PRODUCT</Text>
        
        <View className="flex flex-col">
          <Text className="tracking-wide manropebh4 font-bold">ZX7</Text>
          <Text className="tracking-wide manropebh4 font-bold">SPEAKER</Text>
        </View>
        
        <Text className="text-ash manropemed leading-6">
          Stream high quality sound wirelessly with minimal to no loss. The ZX7
          speaker uses high-end audiophile components that represent the top of
          the line powered speakers for home or studio use.
        </Text>

        <Text className="manropebh5 font-bold">$3,500</Text>

        <View className="flex flex-row h-[48px] w-[296px] space-x-2">
          <View className="flex flex-row w-[120px] bg-ashwhite items-center px-5">
            <TouchableOpacity
              onPress={() => {
                if (zx7s > 0) {
                  setZx7s(zx7s - 1);
                }
              }}
            >
              <Text className="font-bold">-</Text>
            </TouchableOpacity>

            <TextInput
              value={String(zx7s)}
              editable={false}
              className="w-full h-[32px] text-black bg-ashwhite text-center font-bold"
            />

            <TouchableOpacity
              onPress={() => {
                setZx7s(zx7s + 1);
              }}
            >
              <Text className="font-bold">+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              setNumberOfZx7(zx7s);
            }}
            className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-4"
          >
            <Text className="text-white font-bold">ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
