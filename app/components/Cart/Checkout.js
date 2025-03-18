
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";



import MobileCheckout from "./MobileCheckout";
import Mobilefooter from "../Home/MobileFooter";




export default function Checkout()  {
  const navigation = useNavigation();
  return (
    <ScrollView className="  relative w-screen h-screen overflow-y-auto flex flex-col">
      <View className="w-full  bg-white h-full">
       
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="mt-5  text-ash manropemed pl-2 font-bold pb-5 "
        >
          <Text className=" font-bold">Go Back</Text>
        </TouchableOpacity>
        <View id="body" className="w-full h-full">
          <View className="w-full  flex flex-col px-5 bg-white space-y-8">
            <MobileCheckout/>
          
          </View>
          <View className="w-full h-[654px] mt-10 bg-red-700 ">
            <Mobilefooter />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


