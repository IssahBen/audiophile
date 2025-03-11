
import { View, Text, ScrollView, StyleSheet,TouchableOpacity, ImageBackground } from "react-native";
const mark59 =require("../../../assets/Headphones/mark59.jpg")
import { useNavigation } from "@react-navigation/native";
export function Mobile59() {
    const navigation = useNavigation();
  
    function HandleClick() {
      navigation.navigate("HeadphonesXX59");
    }
  
    return (
      <View className="w-full flex flex-col space-y-8 h-[550px]">
        <ImageBackground source={mark59} className="w-full h-[352px]  bg-cover mb-5"/>
        
        <View className="flex flex-col w-full items-center space-y-4">
          <View className="flex flex-col w-full items-center justify-center mb-2">
            <Text className="tracking-wide manropebh4 text-center font-bold mb-2">XX59</Text>
            <Text className="tracking-wide manropebh4 text-center font-bold">HEADPHONES</Text>
          </View>
          <Text className="text-center text-ash manropemed leading-6">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </Text>
          <TouchableOpacity onPress={HandleClick} className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10">
            <Text>SEE PRODUCT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }