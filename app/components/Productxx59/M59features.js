
import { View, Text, Image, ScrollView } from "react-native";
const mark3g1 =require("../../../assets/Headphones/mark3g1.jpg")
const mark3g2 =require("../../../assets/Headphones/mark3g2.jpg")
const mark3g3 =require("../../../assets/Headphones/mark3g3.jpg")
export default function M59features() {
  return (
    <ScrollView className="w-full flex flex-col smallhide largehide">
      <Text className="manropebh4 font-bold">FEATURES</Text>
      <Text className="text-ash manropemed leading-6 mt-5">
        These headphones have been created from durable, high-quality materials
        tough enough to take anywhere. Its compact folding design fuses comfort
        and minimalist style making it perfect for travel. Flawless transmission
        is assured by the latest wireless technology engineered for audio
        synchronization with videos.
      </Text>
      <Text className="text-ash manropemed leading-6 mt-5">
        More than a simple pair of headphones, this headset features a pair of
        built-in microphones for clear, hands-free calling when paired with a
        compatible smartphone. Controlling music and calls is also intuitive
        thanks to easy-access touch buttons on the earcups. Regardless of how
        you use the XX59 headphones, you can do so all day thanks to an
        impressive 30-hour battery life that can be rapidly recharged via USB-C.
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
        
        <View className="flex  flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">1x</Text>
          <Text className="text-ash manropemed">User Manual</Text>
        </View>
        
        <View className="flex  flex-row justify-center gap-5 mb-2">
          <Text className="text-brown font-bold">1x</Text>
          <Text className="text-ash manropemed">3.5mm 5m Audio Cable</Text>
        </View>
      </View>

      <View className="flex gap-4 mt-10 mb-10">
        <Image
          source={mark3g1} // replace with actual image URL
          className="w-full h-[174px] mobilevxx59i1 bg-cover rounded-xl"
        />
        <Image
          source={mark3g2} // replace with actual image URL
          className="w-full h-[174px] mobilevxx59i2 bg-cover rounded-xl"
        />
        <Image
          source={mark3g3} // replace with actual image URL
          className="w-full h-[368px] mobilevxx59i3 bg-cover rounded-xl"
        />
      </View>
    </ScrollView>
  );
}
