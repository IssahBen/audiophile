import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MobileCategory from "../Home/MobileCategory";
import Mobilesummary from "../Home/MobileSummary";
import Mobilefooter from "../Home/MobileFooter";
import MobileOptionsZX9 from "./MobileOptionszx9";
import ZX9features from "./zx9features";
import Mobilevzx9 from "./Mobilevzx9";
import Icon from "react-native-vector-icons/Ionicons";

export default function Vzx9() {
  const navigation = useNavigation();
  return (
    <ScrollView className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <View className="w-full bg-white h-full">
        <View
          id="overlay"
          className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="mt-5 text-ash manropemed pl-4 font-bold"
        >
          <Icon name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <View id="body" className="w-full h-full">
          <View className="w-full flex flex-col px-5 bg-white space-y-8">
            <Mobilevzx9 />

            <ZX9features />

            <MobileOptionsZX9 />

            <View className="w-full ">
              <MobileCategory />
            </View>
            <Mobilesummary />
          </View>
          <View className="w-full h-[654px] mt-10 ">
            <Mobilefooter />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
