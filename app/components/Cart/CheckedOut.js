import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useData } from "../Context/DataContext";

export default function CheckedOut() {
  const [numberofitems, setNumberOfItems] = useState(0);
  const [sum, setSum] = useState(0);
  const [vat, setVat] = useState(0);
  const [grandtotal, setGrandTotal] = useState(0);
  const shipping = 50;
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
    const list = [numberOfMark1, numberOfMark2, numberOfYx1, numberOfZx7, numberOfZx9, numberOfxx59];
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

    let items = list.filter(item => item !== 0).length;
    setNumberOfItems(items);
  }, [numberOfMark1, numberOfMark2, numberOfYx1, numberOfZx7, numberOfZx9, numberOfxx59, vat]);

  function Home() {
    setNumberOfMark1(0);
    setNumberOfMark2(0);
    setNumberOfYx1(0);
    setNumberOfZx7(0);
    setNumberOfZx9(0);
    setNumberOfxx59(0);
    navigation.navigate("Homereturn");
  }

  return (
    <ScrollView className="w-full h-full flex flex-col space-y-8 px-5 py-5">
      <View className="flex w-full justify-between">
        <View className="flex flex-col">
          <Text className="text-black manropebh4 font-bold">THANK YOU</Text>
          <Text className="text-black manropebh4 font-bold">FOR YOUR ORDER</Text>
          <Text className="text-ash mt-5">
            You will receive an email confirmation shortly
          </Text>
        </View>
      </View>

      <View className="flex flex-col rounded-xl bg-tintwhite">
        <View className="flex flex-col px-2 py-2">
          {numberOfMark1 !== 0 && <Mark1 mark1s={numberOfMark1} />}
          {numberOfMark2 !== 0 && <Mark2 mark2s={numberOfMark2} />}
          {numberOfxx59 !== 0 && <Xx59 xx59s={numberOfxx59} />}
          {numberOfZx7 !== 0 && <Zx7 zx7s={numberOfZx7} />}
          {numberOfZx9 !== 0 && <Zx9 zx9s={numberOfZx9} />}
          {numberOfYx1 !== 0 && <Yx1 yx1s={numberOfYx1} />}
        </View>

        <View className="flex justify-between items-center px-5 py-5 rounded-b-xl bg-black">
          <Text className="font-bold text-tintwhite manropereg">GRAND TOTAL</Text>
          <Text className="font-bold text-tintwhite manropereg">$ {grandtotal}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={Home}
        className="bg-brown tracking-widest hover:bg-hoverbrown text-white font-bold w-[271px] h-[48px] flex items-center justify-center"
      >
        <Text className="text-white">BACK TO HOME</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Mark2({ mark2s }) {
  return (
    <View className="flex w-full justify-between items-center">
      <View className="flex flex-row space-x-2 items-center">
        <View className="w-[64px] h-[64px] cartmark2 bg-cover" />
        <View className="flex flex-col space-y-2">
          <Text className="manropemed font-bold text-black">XX99 MK II</Text>
          <Text className="font-semi-bold text-ash">$2,999</Text>
        </View>
      </View>
      <View className="flex bg-ashwhite items-center px-5">
        <Text>x{mark2s}</Text>
      </View>
    </View>
  );
}

function Mark1({ mark1s }) {
  return (
    <View className="flex w-full justify-between items-center">
      <View className="flex flex-row space-x-2 items-center">
        <View className="w-[64px] h-[64px] cartmark1 bg-cover" />
        <View className="flex flex-col space-y-2">
          <Text className="manropemed font-bold text-black">XX99 MK I</Text>
          <Text className="font-semi-bold text-ash">$1,750</Text>
        </View>
      </View>
      <View className="flex bg-ashwhite items-center px-5">
        <Text>x{mark1s}</Text>
      </View>
    </View>
  );
}

function Xx59({ xx59s }) {
  return (
    <View className="flex w-full justify-between items-center">
      <View className="flex flex-row space-x-2 items-center">
        <View className="w-[64px] h-[64px] cartxx59 bg-cover" />
        <View className="flex flex-col space-y-2">
          <Text className="manropemed font-bold text-black">XX59</Text>
          <Text className="font-semi-bold text-ash">$899</Text>
        </View>
      </View>
      <View className="flex bg-ashwhite items-center px-5">
        <Text>x{xx59s}</Text>
      </View>
    </View>
  );
}
