
import { SafeAreaView,View,Text ,StatusBar} from "react-native" 
 export default function Cart(){
    return(  <SafeAreaView className="flex-1 bg-red-700">
    <View className=" bg-red-700 flex-1 justify-center items-center">
     <Text className='text-white'>Cart</Text>
     <StatusBar style="auto" />
   </View>
  </SafeAreaView>)
 }