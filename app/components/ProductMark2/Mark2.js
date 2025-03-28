import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MobileVMark2 from "./MobileVMark2";
import Mark2features from "./Mark2features";
import MobileOptionsMark2 from "./MobileOptionsMark2";
import MobileCategory from "../Home/MobileCategory";
import Mobilesummary from "../Home/MobileSummary";
import Mobilefooter from "../Home/MobileFooter";
import Icon from "react-native-vector-icons/Ionicons";
export default function Mark2() {
  const navigation = useNavigation();
  return (
    <ScrollView className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <View className="w-full h-full bg-white">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="mt-5  text-ash manropemed pl-2 font-bold pb-5"
        >
          <Icon name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <View id="body" className="w-full h-full">
          <View className="w-full flex flex-col px-5 bg-white space-y-8">
            <MobileVMark2 />

            <Mark2features />

            <MobileOptionsMark2 />

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
