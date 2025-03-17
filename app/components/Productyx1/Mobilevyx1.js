import { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

const yx1 = require("../../../assets/Productimages/yx1p.jpg");

export default function MobileVYX1() {
  const [yx1s, setYx1s] = useState(0);

  const handleDecrease = () => {
    if (yx1s > 0) setYx1s(yx1s - 1);
  };

  const handleIncrease = () => {
    setYx1s(yx1s + 1);
  };

  return (
    <View className="w-full flex flex-col gap-6 h-[724px] mt-5 px-4">
      {/* Product Image */}
      <Image source={yx1} className="w-full h-[352px] rounded-lg overflow-hidden bg-cover" />

      {/* Product Details */}
      <View className="flex flex-col w-full items-start gap-4">
        <Text className="text-brown text-sm font-medium tracking-[4px] uppercase">New Product</Text>

        <Text className="text-xl font-bold tracking-wide leading-tight">
          YX1 WIRELESS 
        </Text>
        <Text className="text-xl font-bold tracking-wide leading-tight">
           EARPHONES
        </Text>

        <Text className="text-gray-600 text-base leading-6">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </Text>

        <Text className="text-lg font-bold">$599</Text>

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
              value={String(yx1s)}
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
            onPress={() => console.log(`Added ${yx1s} items to cart`)}
            className="bg-brown hover:bg-hoverbrown text-white font-medium py-4 px-6 "
          >
            <Text className="text-white font-semibold">ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
