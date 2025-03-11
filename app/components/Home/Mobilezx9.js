import { Image, ImageBackground, Pressable, Text, View } from "react-native";

const  zx9 = require("../../../assets/Home/zx9.png")
const circles = require("../../../assets/Home/pattern-circles.jpg")
export default function Mobilezx9() {
  
  
  return (
    <View className="w-full px-10 bg-white pt-[120px]">
        <View className="w-full h-full  flex-1  gap-y-4 circles items-center  bg-amber-700 py-8  rounded-xl">
      <Image source={zx9} alt="" className="w-44 h-52 mt-10" />
      <View className="flex flex-col space-y-0 mt-8  ">
        <Text className="font-bold text-white  text-2xl text-center tracking-[4px]">ZX9</Text>
        <Text className="font-bold text-white  text-2xl text-center tracking-[4px]">SPEAKER</Text>
      </View>
      <Text className="font-light tracking-wide text-center text-zinc-100 leading-7">
        Upgrade to premium speakers that are phoenomenally built to deliver
        truly remarkable sound
      </Text>
      <Pressable
       
        className="bg-black   py-4 px-10 "
      >
       <Text className='text-white font-normal'> SEE PRODUCT</Text> 
      </Pressable>
    </View>
    </View>
  );
}