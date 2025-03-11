import MobileCategory from "../Home/MobileCategory";
import Mobilesummary from "../Home/MobileSummary";
import Mobileyx1 from "./mobileyx1";
import Mobilefooter from "../Home/MobileFooter";
import { SafeAreaView,View,Text ,StatusBar,ScrollView} from "react-native" 
export default function Earphones() {
  return (
    <View className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <ScrollView className="w-full h-full">
      
        <View id="overlay" className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80" />
        <View id="body" className="w-full h-full">
          <View className="w-full h-24 mb-10 flex justify-center items-center bg-black  manropebh4 font-semibold tracking-widest">
            <Text className="text-white text-lg font-bold">Earphones</Text>
          </View>
          <View className="w-full flex flex-col px-5 bg-white space-y-5">
            <Mobileyx1 />
          
            
            <MobileCategory />
            
          
            <Mobilesummary />
            
          </View>
          <View className="w-full h-[654px] mt-10 smallhide largehide">
            <Mobilefooter />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}