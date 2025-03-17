import { View, Text, Image } from 'react-native';
const mark1g1 =require("../../../assets/Headphones/mark1g1.jpg")
const mark1g2 =require("../../../assets/Headphones/mark1g2.jpg")
const mark1g3 =require("../../../assets/Headphones/mark1g3.jpg")
export default function Mark1features() {
  return (
    <View className="w-full flex flex-col smallhide largehide">
      <Text className="manropebh4 font-bold">FEATURES</Text>
      <Text className="text-ash manropemed leading-6 mt-5">
        Features As the headphones all others are measured against, the XX99
        Mark I demonstrates over five decades of audio expertise, redefining the
        critical listening experience. This pair of closed-back headphones are
        made of industrial, aerospace-grade materials to emphasize durability at
        a relatively light weight of 11 oz.
      </Text>
      <Text className="text-ash manropemed leading-6 mt-5">
        From the handcrafted microfiber ear cushions to the robust metal
        headband with inner damping element, the components work together to
        deliver comfort and uncompromising sound. Its closed-back design
        delivers up to 27 dB of passive noise cancellation, reducing resonance
        by reflecting sound to a dedicated absorber. For connectivity, a
        specially tuned cable is included with a balanced gold connector.
      </Text>
      <View className="flex flex-col mt-10 items-start">
        <Text className="manropebh4 font-bold mb-5">IN THE BOX</Text>
        <View className="flex  flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">1x</Text>
          <Text className="text-ash manropemed">Headphone Unit</Text>
        </View>
        <View className="flex  flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">2x</Text>
          <Text className="text-ash manropemed">Replacement Earcups</Text>
        </View>
        <View className="flex flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">1x</Text>
          <Text className="text-ash manropemed">User Manual</Text>
        </View>
        <View className="flex  flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">1x</Text>
          <Text className="text-ash manropemed">3.5mm 5m Audio Cable</Text>
        </View>
      </View>
      <View className="flex gap-4 spac mt-10 mb-10">
        <Image source={mark1g1} className="w-full h-[174px] mobilevmark1i1 bg-cover rounded-xl" />
        <Image source={mark1g2} className="w-full h-[174px] mobilevmark1i2 bg-cover rounded-xl" />
        <Image source={mark1g3} className="w-full h-[368px] mobilevmark1i3 bg-cover rounded-xl" />
      </View>
    </View>
  );
}