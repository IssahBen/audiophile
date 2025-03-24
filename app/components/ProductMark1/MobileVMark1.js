import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { useState } from 'react';
import { useData } from '../Context/DataContext';
const mark1 = require("../../../assets/Productimages/mark1p.jpg");

export default function MobileVMark1() {
  const [mark1s, setMark1s] = useState(0);
  const {setNumberOfMark1} = useData()

  const handleDecrease = () => {
    if (mark1s > 0) setMark1s(mark1s - 1);
  };

  const handleIncrease = () => {
    setMark1s(mark1s + 1);
  };

  return (
    <View className="w-full flex flex-col space-y-6 h-auto mt-5 mb-5">
      {/* Product Image */}
      <ImageBackground 
        source={mark1} 
        className="w-full h-[352px] rounded-lg overflow-hidden bg-cover mb-5"
      />

      {/* Product Details */}
      <View className="flex flex-col w-full items-start ">
        <Text className="text-brown text-sm font-medium tracking-[4px] uppercase">New Product</Text>
        <Text className="text-xl font-bold leading-tight tracking-wide mt-2">XX99 MARK I </Text>
        <Text className="text-xl font-bold leading-tight tracking-wide mt-2">HEADPHONES</Text>
        <Text className="text-gray-600 text-base leading-6 mt-2">
          As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate 
          audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
        </Text>
        <Text className="text-lg font-bold mt-2">$1,750</Text>

        {/* Quantity Selector & Add to Cart */}
         <View className="flex flex-row items-center mt-6 gap-2">
            <View className="flex flex-row items-center bg-gray-200  px-4 ">
              <TouchableOpacity onPress={handleDecrease} activeOpacity={0.7} className="px-2">
                <Text className="text-lg font-bold">-</Text>
              </TouchableOpacity>
  
              <TextInput
                value={mark1s.toString()}
                editable={false}
                className="w-10 text-center text-lg font-bold bg-transparent"
              />
  
              <TouchableOpacity onPress={handleIncrease} activeOpacity={0.7} className="px-2">
                <Text className="text-lg font-bold">+</Text>
              </TouchableOpacity>
            </View>
  
            <TouchableOpacity 
              onPress={() => {
                setNumberOfMark1(mark1s);
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
