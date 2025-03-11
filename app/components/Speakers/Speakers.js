import { SafeAreaView,View,Text ,StatusBar} from "react-native" 
 export default function Speakers(){
    return(  <SafeAreaView className="flex-1 bg-red-700">
    <View className=" bg-red-700 flex-1 justify-center items-center">
     <Text className='text-white'>Speakers</Text>
     <StatusBar style="auto" />
   </View>
  </SafeAreaView>)
 }