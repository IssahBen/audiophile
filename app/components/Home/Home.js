import { SafeAreaView,View,Text ,StatusBar, ScrollView, ImageBackground, Pressable,Image} from "react-native" 
import MobileHero from "./MobileHero"
import MobileCategory from "./MobileCategory"
import Mobilezx9 from "./Mobilezx9"
import Mobilezx7 from "./Mobilezx7"
import Mobileyx1 from "./Mobileyx1"
import Mobilesummary from "./MobileSummary"
import Mobilefooter from "./MobileFooter"
import * as Animatable from "react-native-animatable"
const cart =require("../../../assets/Home/shopping-cart.png")
 export default function Home({navigation}){
    return(  <View className="flex-1 bg-black">
      <StatusBar backgroundColor="black" barStyle={"light-content"}></StatusBar>
     <ScrollView className="flex-1  bg-black relative">
      
       <MobileHero/>
       <MobileCategory navigation={navigation}/>
        <Mobilezx9/>
        <Mobilezx7/>
        <Mobileyx1/>
        <Mobilesummary/>
        <Mobilefooter/>
   </ScrollView>
  </View>)
 }