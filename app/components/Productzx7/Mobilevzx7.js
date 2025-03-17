import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";

const zx7 = require("../../../assets/Productimages/zx7p.jpg");

export default function MobileVZX7() {
  const [zx7s, setZx7s] = useState(0);

  const handleDecrease = () => {
    if (zx7s > 0) setZx7s(zx7s - 1);
  };

  const handleIncrease = () => {
    setZx7s(zx7s + 1);
  };

  return (
    <ScrollView className="w-full flex flex-col space-y-6 h-auto mt-5 mb-5">
      {/* Product Image */}
      <Image source={zx7} className="w-full h-[352px] rounded-lg overflow-hidden bg-cover mb-5" />

      {/* Product Details */}
      <View className="flex flex-col w-full items-start gap-4">
        <Text className="text-brown text-sm font-medium tracking-[4px] uppercase">New Product</Text>

        <Text className="text-xl font-bold tracking-wide leading-tight">
          ZX7 SPEAKER
        </Text>

        <Text className="text-gray-600 text-base leading-6">
          Stream high-quality sound wirelessly with minimal to no loss. The ZX7
          speaker uses high-end audiophile components that represent the top of
          the line powered speakers for home or studio use.
        </Text>

        <Text className="text-lg font-bold">$3,500</Text>

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
              value={String(zx7s)}
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
            onPress={() => console.log(`Added ${zx7s} items to cart`)}
            className="bg-brown hover:bg-hoverbrown text-white font-medium py-4 px-6 "
          >
            <Text className="text-white font-semibold">ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
