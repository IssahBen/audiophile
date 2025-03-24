import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useData } from "../Context/DataContext";
const zx9 = require("../../../assets/Productimages/zx9p.jpg");

export default function MobileVZX9() {
  const [zx9s, setZx9s] = useState(0);
  const { setNumberOfZx9 } = useData();
  const handleDecrease = () => {
    if (zx9s > 0) setZx9s(zx9s - 1);
  };

  const handleIncrease = () => {
    setZx9s(zx9s + 1);
  };

  return (
    <View className="w-full flex flex-col space-y-6 h-auto mt-5 mb-5">
      {/* Product Image */}
      <Image source={zx9} className="w-full h-[352px] rounded-lg overflow-hidden bg-cover mb-5" />

      {/* Product Details */}
      <View className="flex flex-col w-full items-start gap-4">
        <Text className="text-brown text-sm font-medium tracking-[4px] uppercase">New Product</Text>

        <Text className="text-xl font-bold tracking-wide leading-tight">
          ZX9 SPEAKERS
        </Text>

        <Text className="text-gray-600 text-base leading-6">
          Upgrade your sound system with the all-new ZX9 active speaker. It’s a
          bookshelf speaker system that offers truly wireless connectivity—
          creating new possibilities for more pleasing and practical audio setups.
        </Text>

        <Text className="text-lg font-bold">$4,500</Text>

        {/* Quantity Selector & Add to Cart */}
        <View className="flex flex-row items-center mt-6 gap-4">
                  {/* Counter */}
                  <View className="flex flex-row items-center justify-between  bg-gray-200 px-4  ">
                    <TouchableOpacity 
                      onPress={handleDecrease}
                      className="px-2"
                      aria-label="Decrease quantity"
                    >
                      <Text className="text-lg font-bold">-</Text>
                    </TouchableOpacity>
        
                    <TextInput
                      value={String(zx9s)}
                      editable={false}
                      className="w-8 text-center text-lg font-bold text-black"
                    />
        
                    <TouchableOpacity 
                      onPress={handleIncrease}
                      className="px-2"
                      aria-label="Increase quantity"
                    >
                      <Text className="text-lg font-bold">+</Text>
                    </TouchableOpacity>
                  </View>
        
                  {/* Add to Cart Button */}
                  <TouchableOpacity 
                    onPress={() => {
                      setNumberOfZx9(zx9s);
                    }}
                    className="bg-brown hover:bg-hoverbrown text-white font-medium py-4 px-6 "
                  >
                    <Text className="text-white font-semibold">ADD TO CART</Text>
                  </TouchableOpacity>
                </View>
      </View>
    </View>
  );
}
