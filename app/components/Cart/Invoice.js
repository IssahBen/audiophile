import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView,Image } from "react-native";
import { useData } from "../Context/DataContext";
import { useNavigation } from "@react-navigation/native";
const cmk1 = require("../../../assets/Cart/cmk1.jpg");
const cmk2 = require("../../../assets/Cart/cmk2.jpg");
const cx59 = require("../../../assets/Cart/cx59.jpg");
const cyx1 = require("../../../assets/Cart/cyx1.jpg");
const czx7 = require("../../../assets/Cart/czx7.jpg");
const czx9 = require("../../../assets/Cart/czx9.jpg");
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
    navigation.navigate("Alt");
  }
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const formattedSum = formatNumber(sum)
const formattedVat = formatNumber(vat.toFixed(2))
const formattedTotal =formatNumber(grandTotal.toFixed(2))
  return (
    <ScrollView className="w-full h-full flex  gap-5 px-5 py-5">
      <View className="flex w-full justify-between">
        <Text className="text-black font-bold text-lg">Summary</Text>
      </View>
      <CartItem label="XX99 MK I" price={1750} count={numberOfMark1} src={cmk1} />
      <CartItem label="XX99 MK II" price={2999} count={numberOfMark2} src={cmk2}/>
      <CartItem label="XX59" price={899} count={numberOfxx59} src={cx59} />
      <CartItem label="ZX7" price={3500} count={numberOfZx7} src={czx7} />
      <CartItem label="ZX9" price={4500} count={numberOfZx9}  src={czx9}/>
      <CartItem label="YX1" price={599} count={numberOfYx1}  src={cyx1}/>

      <View className="flex justify-between flex-row mb-2">
        <Text className="font-medium text-gray-600">TOTAL</Text>
        <Text className="font-bold text-black">$ {formattedSum}</Text>
      </View>
      <View className="flex justify-between flex-row mb-2">
        <Text className="font-medium text-gray-600">SHIPPING</Text>
        <Text className="font-bold text-black">$ {shipping}</Text>
      </View>
      <View className="flex justify-between flex-row mb-2">
        <Text className="font-medium text-gray-600">TAX</Text>
        <Text className="font-bold text-black">$ {formattedVat}</Text>
      </View>
      <View className="flex justify-between flex-row mb-2">
        <Text className="font-medium text-gray-600">GRAND TOTAL</Text>
        <Text className="font-bold text-black">$ {formattedTotal}</Text>
      </View>

      <TouchableOpacity onPress={Purchase} className="bg-brown py-3 mt-4 rounded-lg">
        <Text className="text-white text-center font-bold">PURCHASE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function CartItem({ label, price, count,src }) {
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const formattedNumber=  formatNumber(price)
  if (count === 0) return null;
  return (
    <View className="flex flex-row justify-between items-center py-2">
      <Image source={src} className="w-16 h-16 bg-gray-200" />
      <Text className="font-bold text-black">{label}</Text>
      <Text className="text-gray-600">x{count}</Text>
      <Text className="text-black">${formattedNumber}</Text>
    </View>
  );
}
