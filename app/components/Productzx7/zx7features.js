
import { View, Text, Image, ScrollView } from "react-native";
const zx7g1 =require("../../../assets/Speakers/zx7g1.jpg")
const zx7g2 =require("../../../assets/Speakers/zx7g2.jpg")
const zx7g3 =require("../../../assets/Speakers/zx7g3.jpg")
export default function Zx7features(){
  return (
    <ScrollView className="w-full flex flex-col smallhide largehide">
      <Text className="manropebh4 font-bold">FEATURES</Text>
      <Text className="text-ash manropemed leading-6 mt-5">
        Reap the advantages of a flat diaphragm tweeter cone. This provides a
        fast response rate and excellent high frequencies that lower-tiered
        bookshelf speakers cannot provide. The woofers are made from aluminum
        that produces a unique and clear sound. XLR inputs allow you to connect
        to a mixer for more advanced usage.
      </Text>
      <Text className="text-ash manropemed leading-6 mt-5">
        The ZX7 speaker is the perfect blend of stylish design and high
        performance. It houses an encased MDF wooden enclosure which minimizes
        acoustic resonance. Dual connectivity allows pairing through Bluetooth
        or traditional optical and RCA input. Switch input sources and control
        volume at your fingertips with the included wireless remote. This
        versatile speaker is equipped to deliver an authentic listening
        experience.
      </Text>

      <View className="flex flex-col mt-10 items-start">
        <Text className="manropebh4 font-bold mb-5">IN THE BOX</Text>

        <View className="flex flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">2x</Text>
          <Text className="text-ash manropemed">Speaker Unit</Text>
        </View>

        <View className="flex  flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">2x</Text>
          <Text className="text-ash manropemed">Speaker Cloth Panel</Text>
        </View>

        <View className="flex  flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">1x</Text>
          <Text className="text-ash manropemed">User Manual</Text>
        </View>

        <View className="flex  flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">1x</Text>
          <Text className="text-ash manropemed">3.5mm 10m Audio Cable</Text>
        </View>

        <View className="flex  flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">1x</Text>
          <Text className="text-ash manropemed">7.5m Optical Cable</Text>
        </View>
      </View>

      <View className="flex gap-4 mt-10 mb-10">
        <Image
          source={zx7g1}
          className="w-full h-[174px] mobilevzx7i1 bg-cover rounded-xl"
        />
        <Image
          source={zx7g2}
          className="w-full h-[174px] mobilevzx7i2 bg-cover rounded-xl"
        />
        <Image
          source={zx7g3}
          className="w-full h-[368px] mobilevzx7i3 bg-cover rounded-xl"
        />
      </View>
    </ScrollView>
  );
}
