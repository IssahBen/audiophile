import { ImageBackground, Pressable, Text, View } from "react-native";

const zx7= require("../../../assets/Home/zx7.jpg")
export default function Mobilezx7() {
  
  
  return (
   <View  className="bg-white px-10 py-10 ">
     <ImageBackground source={zx7}  resizeMode="cover" className="flex   gap-y-10 justify-center w-full h-80  px-8  rounded-xl">
      <Text className=" text-xl text-black tracking-[6px] font-bold">ZX7 SPEAKER</Text>
      <Pressable
        
        className=" w-48  border-2 border-black text-black font-bold py-4 pl-8"
      >
       <Text className="font-medium">SEE PRODUCT</Text> 
      </Pressable>
    </ImageBackground>
   </View>
  );
}