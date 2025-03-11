
import { MobileMark1 } from "./MobileMark1";
import { MobileMark2 } from "./MobileMark2";
import { Mobile59 } from "./Mobile59";
import MobileCategory from "../Home/MobileCategory";
import Mobilesummary from "../Home/MobileSummary";
import Mobilefooter from "../Home/MobileFooter";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Headphones() {
  return (
    <View className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <ScrollView className="w-full h-full">
      
        <View id="overlay" className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80" />
        <View id="body" className="w-full h-full">
          <View className="w-full h-24 mb-10 flex justify-center items-center bg-black  manropebh4 font-semibold tracking-widest">
            <Text className="text-white text-lg font-bold">HEADPHONES</Text>
          </View>
          <View className="w-full flex flex-col px-5 bg-white space-y-5">
            <MobileMark2 />
           
            <MobileMark1 />
            
            <Mobile59 />
            
            <MobileCategory />
            
          
            <Mobilesummary />
            
          </View>
          <View className="w-full h-[654px] mt-10 smallhide largehide">
            <Mobilefooter />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}