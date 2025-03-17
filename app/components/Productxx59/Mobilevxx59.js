import  { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const xx59 =require("../../../assets/Productimages/xx59p.jpg")
export default function MobileVXX59() {
  const [xx59s, setxx59s] = useState(0);


  return (
    <View className="w-full flex flex-col space-y-8 h-[724px] mt-5 smallhide largehide">
      <Image
        source={xx59} // replace with actual image URL
        className="w-full h-[352px] mobilevxx59 bg-cover"
      />
      
      <View className="flex flex-col w-full items-start space-y-4">
        <Text className="text-brown manropereg tracking-[10px]">NEW PRODUCT</Text>
        
        <View className="flex flex-col">
          <Text className="tracking-wide manropebh4 font-bold">XX59</Text>
          <Text className="tracking-wide manropebh4 font-bold">HEADPHONES</Text>
        </View>
        
        <Text className="text-ash manropemed leading-6">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </Text>
        
        <Text className="manropebh5 font-bold">$899</Text>
        
        <View className="flex h-[48px] w-[296px] space-x-2">
          <View className="flex w-[120px] bg-ashwhite items-center px-5">
            <TouchableOpacity
              onPress={() => {
                if (xx59s > 0) {
                  setxx59s(xx59s - 1);
                } else {
                  setxx59s(xx59s);
                }
              }}
              className="font-bold"
            >
              <Text>-</Text>
            </TouchableOpacity>

            <TextInput
              value={xx59s.toString()}
              editable={false}
              className="w-full h-[32px] text-black bg-ashwhite text-center font-bold"
            />
            
            <TouchableOpacity
              onPress={() => {
                if (xx59s >= 0) {
                  setxx59s(xx59s + 1);
                } else {
                  setxx59s(xx59s);
                }
              }}
              className="font-bold"
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity
            onPress={() => {
              setNumberOfxx59(xx59s);
            }}
            className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-4"
          >
            <Text className="text-center text-white">ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
