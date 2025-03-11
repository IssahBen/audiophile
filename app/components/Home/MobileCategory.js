import { Text, View ,Image,Pressable} from "react-native";
import {useNavigation } from '@react-navigation/native'

const  headphonepic=require("../../../assets/Home/headphone.png")
const earphonepic  = require("../../../assets/Home/earphone.png")
const speakerpic = require("../../../assets/Home/speaker.png")
export default function MobileCategory({navigation}) {
  return (
    <View className=" w-full  flex  bg-white gap-y-24 pt-24 px-10 ">
      <Headphones navigation={navigation}/>
      <Speakers navigation={navigation}/>
      <Earphones navigation={navigation}/>
    </View>
  );
}

function Headphones({navigation}) {
  
  return (
    <View className=" w-full h-44  flex flex-col relative items-center bg-zinc-100 rounded-xl gap-y-2 ">
      <Image
        source={headphonepic}
        alt=""
        className="h-48 w-48 absolute top-[-80px]"
      />
      <Text className="text-black text-md font-bold tracking-[-0.1px] pt-20">
        HEADPHONES
      </Text>
      <Pressable  onPress={() =>
        navigation.navigate('Headphones')} className="flex flex-row gap-x-2 mt-2 items-center">
    <Text className="text-slate-700 font-semibold ">SHOP</Text>
    <Text className="font-extrabold text-amber-600">{">"}</Text>
  </Pressable>
    </View>
  );
}
function Speakers({navigation}) {
  return (
    <View className=" w-full h-44  flex flex-col relative items-center bg-zinc-100 rounded-xl gap-y-2 ">
      <Image source={speakerpic} alt="" className="h-48 w-48 absolute top-[-80px]" />
      <Text className="text-black text-md font-semibold tracking-[-0.1px] pt-20">
        SPEAKERS
      </Text>
      <Pressable   onPress={() =>
        navigation.navigate('Speakers')}className="flex  flex-row gap-x-2 mt-2 items-center">
        <Text className="text-slate-700 font-semibold ">SHOP</Text>
        <Text className="font-extrabold text-amber-600">{">"}</Text>
      </Pressable>
    </View>
  );
}
function Earphones({navigation}) {
  return (
    <View className=" w-full h-44  flex flex-col relative items-center bg-zinc-100 rounded-xl gap-y-2 ">
      <Image
        source={earphonepic}
        alt=""
        className="h-48 w-48 absolute top-[-80px]"
      />
      <Text className="text-black text-md font-semibold tracking-[-0.1px] pt-20">
        EARPHONES
      </Text>
      <Pressable onPress={() =>
        navigation.navigate('Earphones')}  className="flex flex-row gap-x-2 mt-2 items-center">
        <Text className="text-slate-700 font-semibold ">SHOP</Text>
        <Text className="font-extrabold text-amber-600">{">"}</Text>
      </Pressable>
    </View>
  );
}