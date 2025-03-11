import { useNavigation } from "@react-navigation/native";

import { View, Text, ScrollView, StyleSheet,TouchableOpacity,ImageBackground } from "react-native";
const mark2 =require("../../../assets/Headphones/mark2.jpg")
export function MobileMark2() {
    const navigation = useNavigation();
  
    function HandleClick() {
      navigation.navigate("HeadphonesMark2");
    }
  
    return (
      <View className="w-full flex flex-col space-y-8 h-[600px] mt-14 smallhide largehide">
       <ImageBackground source={mark2} className="w-full h-[352px] mb-5  bg-cover"/>
        <View className="flex flex-col w-full items-center space-y-14">
          <Text className="text-brown manropereg tracking-[10px] mb-2">NEW PRODUCT</Text>
          <Text className="tracking-wide manropebh4 text-center font-bold mb-2">XX99 MARK II HEADPHONES</Text>
          <Text className="text-center text-ash manropemed leading-6 ">
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It
            redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </Text>
          <TouchableOpacity onPress={HandleClick} className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10">
            <Text>SEE PRODUCT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }