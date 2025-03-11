import { useNavigation } from "@react-navigation/native";
import { Button, Image, Pressable, Text, View } from "react-native";
const facebook =require("../../../assets/Home/icon-facebook.png")
const instagram =require("../../../assets/Home/icon-instagram.png")
const twitter =require("../../../assets/Home/icon-twitter.png")
import Headphones from "../Headphones/Headphones";
import Earphones from "../Earphones/Earphones";
import Speakers from "../Speakers/Speakers";
export default function Mobilefooter() {
 const navigation = useNavigation()
  return (
    <View className="flex  w-full h-full bg-black items-center gap-y-10 smallhide largehide">
      <View className="w-32 border-b-8 border-amber-700"></View>
      <Text className="text-2xl tracking-[-1px] font-bold text-white">
        audiophile
      </Text>
      <View className="flex items-center text-white gap-y-8 font-bold">
        <Pressable  onPress={()=>navigation.navigate(Headphones)} >
        <Text className="text-white tracking-[-1px] font-medium ">HEADPHONES</Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate(Speakers)} >
        <Text className="text-white tracking-[-1px] font-medium ">SPEAKERS</Text>
        </Pressable>
        <Pressable  onPress={()=>navigation.navigate(Earphones)} >
        <Text className="text-white tracking-[-1px] font-medium ">EARPHONES</Text>
        </Pressable>
      </View>
      <View className="flex flex-col gap-y-8 px-2">
        <Text className="text-zinc-400 leading-6 manropereg tracking-widest font-regular text-center">
          Audiophile is an all in one stop to fulfill your audio needs.We're a
          small team of music lovers and sound specialist who are devoted to
          helping you get the most out of personal audio.Come and visit our demo
          facility- we're open 7 days a week
        </Text>
        <Text className="text-zinc-400 text-center">
          Copyright 2021.All Rights Reserved
        </Text>
      </View>
      <View className="flex  flex-row gap-x-4 mb-10">
       <Image source={facebook} className="w-[24px] h-[24px]"/>
       <Image source={twitter} className="w-[24px] h-[24px]"/>
       <Image source={instagram} className="w-[24px] h-[24px]"/>
      </View>
    </View>
  );
}