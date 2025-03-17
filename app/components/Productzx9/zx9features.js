import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
const zx9g1 =require("../../../assets/Speakers/zx9g1.jpg")
const zx9g2 =require("../../../assets/Speakers/zx9g2.jpg")
const zx9g3 =require("../../../assets/Speakers/zx9g3.jpg")
export default function ZX9features() {
  return (
    <ScrollView className="w-full flex flex-col smallhide largehide">
      <Text className="manropebh4 font-bold">FEATURES</Text>

      <Text className="text-ash manropemed leading-6 mt-5">
        Connect via Bluetooth or nearly any wired source. This speaker features
        optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs,
        allowing you to have up to five wired source devices connected for easy
        switching. Improved Bluetooth technology offers near lossless audio
        quality at up to 328ft (100m).
      </Text>

      <Text className="text-ash manropemed leading-6 mt-5">
        Discover clear, more natural sounding highs than the competition with
        ZX9’s signature planar diaphragm tweeter. Equally important is its
        powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit.
        You’ll be able to enjoy equal sound quality whether in a large room or
        small den. Furthermore, you will experience new sensations from old
        songs since it can respond to even the subtle waveforms.
      </Text>

      <View className="flex flex-col mt-10 items-start">
        <Text className="manropebh4 font-bold mb-5">IN THE BOX</Text>

        {[
          { quantity: "2x", item: "Speaker Unit" },
          { quantity: "2x", item: "Speaker Cloth Panel" },
          { quantity: "1x", item: "User Manual" },
          { quantity: "1x", item: "3.5mm 10m Audio Cable" },
          { quantity: "1x", item: "10m Optical Cable" },
        ].map((boxItem, index) => (
          <View key={index} className="flex flex-row justify-center gap-5 mb-2">
            <Text className="text-brown font-bold">{boxItem.quantity}</Text>
            <Text className="text-ash manropemed">{boxItem.item}</Text>
          </View>
        ))}
      </View>

      <View className="flex gap-4 mt-10 mb-10">
        <Image source={zx9g1} className="w-full h-[174px] bg-cover rounded-xl" />
        <Image source={zx9g2} className="w-full h-[174px] bg-cover rounded-xl" />
        <Image source={zx9g3} className="w-full h-[368px] bg-cover rounded-xl" />
      </View>
    </ScrollView>
  );
}
