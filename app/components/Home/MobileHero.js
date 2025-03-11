import { ImageBackground, Pressable, Text, View } from "react-native"
const header = require("../../../assets/Home/image-header.jpg")
export default function MobileHero(){
    return(
        <ImageBackground source={header} resizeMode="cover"  className="  flex justify-center items-center w-full h-[600px] ">
        <View className="flex  gap-y-5  items-center w-2/3 h-80 ">
        <Text className="font-thin text-slate-300 tracking-[10px] manropesub">
          New Product
        </Text>
        <Text className="text-3xl text-center tracking-widest font-bold text-white">
          XX99 MARK II HEADPHONES
        </Text>
        <Text className=" text-center text-zinc-300 text-sm font-medium tracking-[0.2px] leading-6">
          Experience natural,lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </Text>
        <Pressable
         
          className="bg-amber-700 hover:bg-hoverbrown  font-normal py-4 px-10 "
        >
         <Text className="text-white"> SEE PRODUCT</Text>
        </Pressable>
        </View>
        </ImageBackground>
    )
    
}