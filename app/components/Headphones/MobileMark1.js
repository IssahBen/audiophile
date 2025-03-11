import { useNavigation } from "@react-navigation/native";

import { View, Text, ScrollView, StyleSheet,TouchableOpacity,ImageBackground } from "react-native";
const mark1 =require("../../../assets/Headphones/mark1.jpg")
export function MobileMark1() {
    const navigation = useNavigation();
  
    function HandleClick() {
      navigation.navigate("HeadphonesMark1");
    }
  
    return (
      <View className="w-full flex flex-col space-y-8 h-[600px] smallhide largehide">
         <ImageBackground source={mark1} className="w-full h-[352px]  bg-cover mb-5"/>
        <View className="flex flex-col w-full items-center space-y-4">
          <Text className="tracking-wide manropebh4 text-center font-bold mb-2">XX99 MARK I HEADPHONES</Text>
          <Text className="text-center text-ash manropemed leading-6 mb-2">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </Text>
          <TouchableOpacity onPress={HandleClick} className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10">
            <Text>SEE PRODUCT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  