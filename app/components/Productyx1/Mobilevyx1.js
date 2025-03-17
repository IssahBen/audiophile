import { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

const yx1 =require("../../../assets/Productimages/yx1p.jpg")

export default function MobileVYX1() {
  const [yx1s, setYx1s] = useState(0);
 

  return (
    <View className="w-full flex flex-col space-y-8 h-[724px] mt-5 smallhide largehide">
      {/* Product Image */}
      <Image source={yx1} className="w-full h-[352px] bg-cover" />

      {/* Product Details */}
      <View className="flex flex-col w-full items-start space-y-4">
        <Text className="text-brown manropereg tracking-[10px]">NEW PRODUCT</Text>
        <View className="flex flex-col">
          <Text className="tracking-wide manropebh4 font-bold">YX1 WIRELESS</Text>
          <Text className="tracking-wide manropebh4 font-bold">EARPHONES</Text>
        </View>

        <Text className="text-ash manropemed leading-6">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </Text>

        <Text className="manropebh5 font-bold">$599</Text>

        {/* Quantity Selector & Add to Cart */}
        <View className="flex flex-row h-[48px] w-[296px] space-x-2">
          <View className="flex flex-row w-[120px] bg-ashwhite items-center px-5">
            <TouchableOpacity
              onPress={() => setYx1s(yx1s > 0 ? yx1s - 1 : 0)}
            >
              <Text className="font-bold">-</Text>
            </TouchableOpacity>

            <TextInput
              value={yx1s.toString()}
              editable={false}
              className="w-full h-[32px] text-black bg-ashwhite text-center font-bold"
            />

            <TouchableOpacity
              onPress={() => setYx1s(yx1s + 1)}
            >
              <Text className="font-bold">+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => setNumberOfYx1(yx1s)}
            className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-4"
          >
            <Text className="text-white font-bold">ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
