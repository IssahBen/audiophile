import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useData } from "../Context/DataContext";
import { useNavigation } from "@react-navigation/native";
export default function Invoice() {
    const navigation= useNavigation()
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [sum, setSum] = useState(0);
  const [vat, setVat] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const shipping = 50;
  const {
    numberOfMark1,
    numberOfMark2,
    numberOfxx59,
    numberOfZx7,
    numberOfZx9,
    numberOfYx1,
  } = useData();

  useEffect(() => {
    const itemCounts = [numberOfMark1, numberOfMark2, numberOfxx59, numberOfZx7, numberOfZx9, numberOfYx1];
    const total =
      numberOfMark2 * 2999 +
      numberOfMark1 * 1750 +
      numberOfxx59 * 899 +
      numberOfYx1 * 599 +
      numberOfZx7 * 3500 +
      numberOfZx9 * 4500;
    
    setSum(total);
    setVat(total * 0.13016);
    setGrandTotal(total + vat + shipping);
    setNumberOfItems(itemCounts.filter((count) => count > 0).length);
  }, [numberOfMark1, numberOfMark2, numberOfxx59, numberOfZx7, numberOfZx9, numberOfYx1, vat]);
  function Purchase() {
    navigation.navigate("Checkedout");
  }
  return (
    <ScrollView className="w-full h-full flex flex-col space-y-8 px-5 py-5">
      <View className="flex w-full justify-between">
        <Text className="text-black font-bold text-lg">Summary</Text>
      </View>
      <CartItem label="XX99 MK I" price={1750} count={numberOfMark1} />
      <CartItem label="XX99 MK II" price={2999} count={numberOfMark2} />
      <CartItem label="XX59" price={899} count={numberOfxx59} />
      <CartItem label="ZX7" price={3500} count={numberOfZx7} />
      <CartItem label="ZX9" price={4500} count={numberOfZx9} />
      <CartItem label="YX1" price={599} count={numberOfYx1} />

      <View className="flex justify-between flex-row">
        <Text className="font-medium text-gray-600">TOTAL</Text>
        <Text className="font-bold text-black">$ {sum}</Text>
      </View>
      <View className="flex justify-between flex-row">
        <Text className="font-medium text-gray-600">SHIPPING</Text>
        <Text className="font-bold text-black">$ {shipping}</Text>
      </View>
      <View className="flex justify-between flex-row">
        <Text className="font-medium text-gray-600">TAX</Text>
        <Text className="font-bold text-black">$ {vat.toFixed(2)}</Text>
      </View>
      <View className="flex justify-between flex-row">
        <Text className="font-medium text-gray-600">GRAND TOTAL</Text>
        <Text className="font-bold text-black">$ {grandTotal.toFixed(2)}</Text>
      </View>

      <TouchableOpacity onPress={Purchase} className="bg-brown py-3 mt-4 rounded-lg">
        <Text className="text-white text-center font-bold">PURCHASE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function CartItem({ label, price, count }) {
  if (count === 0) return null;
  return (
    <View className="flex flex-row justify-between items-center py-2">
      <Text className="font-bold text-black">{label}</Text>
      <Text className="text-gray-600">x{count}</Text>
      <Text className="text-black">$ {price}</Text>
    </View>
  );
}
