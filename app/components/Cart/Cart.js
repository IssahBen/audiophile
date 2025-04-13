import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { useData } from "../Context/DataContext";
import { useNavigation } from "@react-navigation/native";
import { useStripe } from "@stripe/stripe-react-native";
const cmk1 = require("../../../assets/Cart/cmk1.jpg");
const cmk2 = require("../../../assets/Cart/cmk2.jpg");
const cx59 = require("../../../assets/Cart/cx59.jpg");
const cyx1 = require("../../../assets/Cart/cyx1.jpg");
const czx7 = require("../../../assets/Cart/czx7.jpg");
const czx9 = require("../../../assets/Cart/czx9.jpg");
export default function MobileCart() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [sum, setSum] = useState(0);
  const navigation = useNavigation();

  const {
    numberOfMark1,
    setNumberOfMark1,
    numberOfMark2,
    setNumberOfMark2,
    numberOfxx59,
    setNumberOfxx59,
    numberOfZx7,
    setNumberOfZx7,
    numberOfZx9,
    setNumberOfZx9,
    numberOfYx1,
    setNumberOfYx1,
  } = useData();

  useEffect(() => {
    const itemCounts = [
      numberOfMark1,
      numberOfMark2,
      numberOfYx1,
      numberOfZx7,
      numberOfZx9,
      numberOfxx59,
    ];
    const total =
      numberOfMark2 * 2999 +
      numberOfMark1 * 1750 +
      numberOfxx59 * 899 +
      numberOfYx1 * 599 +
      numberOfZx7 * 3500 +
      numberOfZx9 * 4500;
    setSum(total);
    setNumberOfItems(itemCounts.filter((count) => count > 0).length);
  }, [
    numberOfMark1,
    numberOfMark2,
    numberOfYx1,
    numberOfZx7,
    numberOfZx9,
    numberOfxx59,
  ]);

  function removeAll() {
    setNumberOfMark1(0);
    setNumberOfMark2(0);
    setNumberOfYx1(0);
    setNumberOfZx7(0);
    setNumberOfZx9(0);
    setNumberOfxx59(0);
  }

  function Checkout() {
    if (numberOfItems > 0) navigation.navigate("Checkout");
  }

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let formattedNumber = formatNumber(sum);

  return (
    <ScrollView className="w-full h-full flex flex-col  px-10 py-5 ">
      <View className="flex w-full gap-5 justify-between">
        <Text className="text-black font-bold">CART ({numberOfItems})</Text>
        <TouchableOpacity onPress={removeAll}>
          <Text className="text-gray-500 underline">Remove all</Text>
        </TouchableOpacity>
      </View>
      <CartItem
        label="XX99 MK I"
        price={1750}
        count={numberOfMark1}
        setCount={setNumberOfMark1}
        src={cmk1}
      />
      <CartItem
        label="XX99 MK II"
        price={2999}
        count={numberOfMark2}
        setCount={setNumberOfMark2}
        src={cmk2}
      />
      <CartItem
        label="XX59"
        price={899}
        count={numberOfxx59}
        setCount={setNumberOfxx59}
        src={cx59}
      />
      <CartItem
        label="ZX7"
        price={3500}
        count={numberOfZx7}
        setCount={setNumberOfZx7}
        src={czx7}
      />
      <CartItem
        label="ZX9"
        price={4500}
        count={numberOfZx9}
        setCount={setNumberOfZx9}
        src={czx9}
      />
      <CartItem
        label="YX1"
        price={599}
        count={numberOfYx1}
        setCount={setNumberOfYx1}
        src={cyx1}
      />

      <View className="flex justify-between flex-row mt-4">
        <Text className="text-gray-600">Total</Text>
        <Text className="font-bold text-black">${formattedNumber}</Text>
      </View>

      <TouchableOpacity
        onPress={Checkout}
        className="bg-brown py-3 mt-4 rounded-lg"
      >
        <Text className="text-white text-center font-bold">CHECKOUT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function CartItem({ label, price, count, setCount, src }) {
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  let formattedNumber = formatNumber(price);
  if (count === 0) return null;
  return (
    <View className="flex flex-row justify-between items-center py-2">
      <View className="flex flex-row items-center">
        <Image source={src} className="w-16 h-16 bg-gray-200" />
        <View className="ml-4">
          <Text className="font-bold text-black">{label}</Text>
          <Text className="text-gray-600">${formattedNumber}</Text>
        </View>
      </View>
      <View className="flex flex-row items-center border px-4 py-2 rounded-lg">
        <TouchableOpacity onPress={() => setCount(Math.max(0, count - 1))}>
          <Text className="font-bold">-</Text>
        </TouchableOpacity>
        <TextInput
          value={String(count)}
          editable={false}
          className="w-10 text-center"
        />
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text className="font-bold">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
