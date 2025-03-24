import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useData } from "../Context/DataContext";
const xx59 = require("../../../assets/Productimages/xx59p.jpg");

export default function MobileVXX59() {
  const [xx59s, setXx59s] = useState(0);
  const { setNumberOfxx59 } = useData();

  const handleDecrease = () => {
    if (xx59s > 0) setXx59s(xx59s - 1);
  };

  const handleIncrease = () => {
    setXx59s(xx59s + 1);
  };

  return (
    <View className="w-full flex flex-col space-y-6 h-auto mt-5 mb-5">
      {/* Product Image */}
      <Image 
        source={xx59} 
        className="w-full h-[352px] rounded-lg overflow-hidden bg-cover mb-5"
      />

      {/* Product Info */}
      <View className="flex flex-col w-full items-start ">
        <Text className="text-brown text-sm font-medium tracking-[4px] uppercase">New Product</Text>

        <Text className="text-xl font-bold tracking-wide leading-tight mt-2">
          XX59 
        </Text>
        <Text className="text-xl font-bold tracking-wide leading-tight mt-2">
           HEADPHONES
        </Text>

        <Text className="text-gray-600 text-base leading-6 mt-2">
          Enjoy your audio almost anywhere and customize it to your specific 
          tastes with the XX59 headphones. The stylish yet durable versatile 
          wireless headset is a brilliant companion at home or on the move.
        </Text>

        <Text className="text-lg font-bold mt-2">$899</Text>

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
              value={String(xx59s)}
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
            setNumberOfxx59(xx59s);
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
