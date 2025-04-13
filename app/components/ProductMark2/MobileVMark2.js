import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useData } from "../Context/DataContext";
const mark2 = require("../../../assets/Productimages/mark2p.jpg");

export default function MobileVMark2() {
  const [mark2s, setMark2s] = useState(0);
  const { setNumberOfMark2 } = useData();

  const handleDecrease = () => {
    if (mark2s > 0) setMark2s(mark2s - 1);
  };

  const handleIncrease = () => {
    setMark2s(mark2s + 1);
  };

  return (
    <View className="w-full flex flex-col space-y-6 h-auto mt-5 mb-5">
      <ImageBackground
        source={mark2}
        className="w-full h-[352px] bg-cover rounded-lg mb-5"
      />

      <View className="">
        <Text className="text-brown uppercase tracking-[4px] font-semibold">
          New Product
        </Text>
        <View className="flex">
          <Text className="text-xl font-bold mt-2">XX99 MARK II </Text>
          <Text className="text-xl font-bold mt-2">HEADPHONES</Text>
        </View>
        <Text className="text-gray-600 leading-6 mt-2">
          The new XX99 Mark II headphones are the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </Text>
        <Text className="text-lg font-bold mt-4">$2,999</Text>

        <View className="flex flex-row items-center mt-6 gap-2">
          <View className="flex flex-row items-center  py-3 bg-gray-200  px-4 ">
            <TouchableOpacity
              onPress={handleDecrease}
              activeOpacity={0.7}
              className="px-2"
            >
              <Text className="text-lg font-bold">-</Text>
            </TouchableOpacity>

            <TextInput
              value={mark2s.toString()}
              editable={false}
              className="w-10 text-center text-lg font-bold bg-transparent"
            />

            <TouchableOpacity
              onPress={handleIncrease}
              activeOpacity={0.7}
              className="px-2"
            >
              <Text className="text-lg font-bold">+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              setNumberOfMark2(mark2s);
            }}
            activeOpacity={0.8}
            className="bg-brown hover:bg-hoverbrown text-white px-6 py-4 "
          >
            <Text className="text-white font-semibold">ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
