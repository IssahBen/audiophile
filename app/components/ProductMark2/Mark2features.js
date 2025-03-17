import { View, Text, Image } from 'react-native';
const mark2g1 =require("../../../assets/Headphones/mark2g1.jpg")
const mark2g2 =require("../../../assets/Headphones/mark2g2.jpg")
const mark2g3 =require("../../../assets/Headphones/mark2g3.jpg")
export default function Mark2features() {
  return (
    <View className="w-full flex flex-col smallhide largehide">
      <Text className="manropebh4 font-bold">FEATURES</Text>
      <Text className="text-ash manropemed leading-6 mt-5">
        Featuring a genuine leather head strap and premium earcups, these
        headphones deliver superior comfort for those who like to enjoy endless
        listening. It includes intuitive controls designed for any situation.
        Whether you’re taking a business call or just in your own personal
        space, the auto on/off and pause features ensure that you’ll never miss
        a beat.
      </Text>
      <Text className="text-ash manropemed leading-6 mt-5">
        The advanced Active Noise Cancellation with built-in equalizer allows you
        to experience your audio world on your terms. It lets you enjoy your
        audio in peace, but quickly interact with your surroundings when you
        need to. Combined with Bluetooth 5.0 compliant connectivity and 17-hour
        battery life, the XX99 Mark II headphones give you superior sound,
        cutting-edge technology, and a modern design aesthetic.
      </Text>
      <View className="flex flex-col mt-10 items-start">
        <Text className="manropebh4 font-bold mb-5">IN THE BOX</Text>
        <View className="flex  flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">1x</Text>
          <Text className="text-ash manropemed">Headphone Unit</Text>
        </View>
        <View className="flex flex-row justify-center gap-5 mb-2">
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
        <View className="flex flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">1x</Text>
          <Text className="text-ash manropemed">Travel Bag</Text>
        </View>
      </View>
      <View className="flex  gap-4 mt-10 mb-10">
        <Image source={mark2g3} className="w-full h-[174px] mobilevmark2i1 bg-cover rounded-xl" />
        <Image source={mark2g2} className="w-full h-[174px] mobilevmark2i2 bg-cover rounded-xl" />
        <Image source={mark2g1} className="w-full h-[368px] mobilevmark2i3 bg-cover rounded-xl" />
      </View>
    </View>
  );
}