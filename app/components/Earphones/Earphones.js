
import { SafeAreaView,View,Text ,StatusBar} from "react-native" 
 export default function Earphones(){
    return(  <SafeAreaView className="flex-1 bg-red-700">
    <View className=" bg-red-700 flex-1 justify-center items-center">
     <Text className='text-white'>Earphones</Text>
     <StatusBar style="auto" />
   </View>
  </SafeAreaView>)
 }