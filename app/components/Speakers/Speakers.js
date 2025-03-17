
import MobileCategory from "../Home/MobileCategory";
import Mobilesummary from "../Home/MobileSummary";
import Mobilefooter from "../Home/MobileFooter";
import Mobilezx7 from "./mobilezx7";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Mobilezx9 from "./mobilezx9";

export default function Speakers() {
  return (
    <View className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <ScrollView className="w-full h-full">
      
        <View id="overlay" className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80" />
        <View id="body" className="w-full h-full">
          <View className="w-full h-24 mb-10 flex justify-center items-center bg-black  manropebh4 font-semibold tracking-widest">
            <Text className="text-white text-lg font-bold">Speakers</Text>
          </View>
          <View className="w-full flex flex-col px-5 bg-white space-y-5 ">
            
            <Mobilezx7/>
            <Mobilezx9/>
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