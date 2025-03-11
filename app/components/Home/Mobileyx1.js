import { Pressable, View ,Text, ImageBackground, Button} from "react-native";
const yx1 = require("../../../assets/Home/yx1.jpg")
export default function Mobileyx1() {
  
  return (
    <View className="flex flex-col gap-y-8 w-full  bg-white px-10">
     <View className="rounded-xl"> <ImageBackground source={yx1} className="w-full h-52  "></ImageBackground></View>
      <View className="flex flex-col  gap-y-10 justify-center w-full h-52 bg-zinc-100 px-4 rounded-xl">
        <Text className=" text-xl text-black tracking-[6px] font-bold">
          YX1 EARPHONES
        </Text>
        <Pressable
        
        className=" w-48  border-2 border-black text-black font-bold py-4 pl-8 "
      >
       <Text className="font-medium">SEE PRODUCT</Text> 
      </Pressable>
      </View>
    </View>
  );
}