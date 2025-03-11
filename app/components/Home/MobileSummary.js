import { View, Text, ImageBackground } from "react-native";
const gear = require("../../../assets/Home/gear.jpg")
export default function Mobilesummary() {
    return (
     <View className="bg-white px-10 pt-20"> <View className="w-full flex flex-col  bg-white mb-24  py-2">
     <ImageBackground source={gear} resizeMode="cover" className="w-full h-[300px]  rounded-xl"></ImageBackground>
     <View className="flex  items-center gap-y-7 mt-10  px-2">
       <Text className="text-center text-3xl tracking-[2px] font-bold w-[300px]">
         BRINGING YOU THE <Text className="text-amber-700">BEST</Text> AUDIO GEAR
       </Text>
       <Text className="  text-zinc-400 font-regular text-lg text-center tracking-[-1px] leading-7 w-[290px]">
         Located at the heart of New York City,Audiophile is the premier
         storefor high end headphones,earphones,speakers, and audio
         accessories.We have a large showroom and luxury demonstration rooms
         available for you to browse and experience awide range of our
         porducts.Stop by our store to meet some of the fantastic people who
         make Audiophile the best place to buy your portable audio equipment
       </Text>
     </View>
   </View></View>
    );
  }