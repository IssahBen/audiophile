
import { View, Text, Image } from "react-native";
const yx1g1 =require("../../../assets/Earphones/yx1g1.jpg")
const yx1g2 =require("../../../assets/Earphones/yx1g2.jpg")
const yx1g3 =require("../../../assets/Earphones/yx1g3.jpg")
export default function YX1features() {
  return (
    <View className="w-full flex flex-col smallhide largehide">
      <Text className="manropebh4 font-bold">Features</Text>

      <Text className="text-ash manropemed leading-6 mt-5">
        Experience unrivalled stereo sound thanks to innovative acoustic
        technology. With improved ergonomics designed for full-day wearing,
        these revolutionary earphones have been finely crafted to provide you
        with the perfect fit, delivering complete comfort all day long while
        enjoying exceptional noise isolation and truly immersive sound.
      </Text>

      <Text className="text-ash manropemed leading-6 mt-5">
        The YX1 Wireless Earphones feature customizable controls for volume,
        music, calls, and voice assistants built into both earbuds. The new
        7-hour battery life can be extended up to 28 hours with the charging
        case, giving you uninterrupted play time. Exquisite craftsmanship with a
        splash-resistant design now available in an all-new white and grey color
        scheme as well as the popular classic black.
      </Text>

      {/* In The Box Section */}
      <View className="flex flex-col mt-10 items-start">
        <Text className="manropebh4 font-bold mb-5">IN THE BOX</Text>

        {[ 
          { quantity: "2x", item: "Earphone Unit" },
          { quantity: "6x", item: "Multi-size Earplugs" },
          { quantity: "1x", item: "User Manual" },
          { quantity: "1x", item: "USB-C Charging Cable" },
          { quantity: "1x", item: "Travel Pouch" }
        ].map((boxItem, index) => (
          <View key={index} className="flex flex-row justify-center gap-5 mb-2">
            <Text className="text-brown font-bold">{boxItem.quantity}</Text>
            <Text className="text-ash manropemed">{boxItem.item}</Text>
          </View>
        ))}
      </View>

      {/* Image Section */}
      <View className="flex gap-4 mt-10 mb-10">
        <Image source={yx1g1} className="w-full h-[174px] bg-cover rounded-xl" />
        <Image source={yx1g2} className="w-full h-[174px] bg-cover rounded-xl" />
        <Image source={yx1g3} className="w-full h-[368px] bg-cover rounded-xl" />
      </View>
    </View>
  );
}
