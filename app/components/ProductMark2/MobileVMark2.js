import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";

const mark2 =require("../../../assets/Productimages/mark2p.jpg")

export default function MobileVMark2() {
  const [mark2s, setMark2s] = useState(0);
  

  return (
    <View className="w-full flex flex-col space-y-8 h-[724px] mt-5 smallhide largehide">
      <ImageBackground
        source={mark2} // replace with actual image URL
        className="w-full h-[352px] mobilevmark2 bg-cover"
      />
      
      <View className="flex flex-col w-full items-start space-y-4">
        <Text className="text-brown manropereg tracking-[10px]">NEW PRODUCT</Text>
        <Text className="tracking-wide manropebh4 font-bold">
          XX99 MARK II HEADPHONES
        </Text>
        <Text className="text-ash manropemed leading-6">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </Text>
        <Text className="manropebh5 font-bold">$2,999</Text>
        
        <View className="flex h-[48px] w-[296px] space-x-2">
          <View className="flex w-[120px] bg-ashwhite items-center px-5">
            <TouchableOpacity
              onPress={() => {
                if (mark2s > 0) {
                  setMark2s(mark2s - 1);
                } else {
                  setMark2s(mark2s);
                }
              }}
              className="font-bold"
            >
              <Text>-</Text>
            </TouchableOpacity>

            <TextInput
              value={mark2s.toString()}
              editable={false}
              className="w-full h-[32px] text-black bg-ashwhite text-center font-bold"
            />
            
            <TouchableOpacity
              onPress={() => {
                if (mark2s >= 0) {
                  setMark2s(mark2s + 1);
                } else {
                  setMark2s(mark2s);
                }
              }}
              className="font-bold"
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              setNumberOfMark2(mark2s);
            }}
            className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-4"
          >
            <Text className="text-center text-white">ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
