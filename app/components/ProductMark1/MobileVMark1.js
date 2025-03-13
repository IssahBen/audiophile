import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';


export default function MobileVMark1() {
  const [mark1s, setMark1s] = useState(0);
  

  return (
    <View className="w-full flex flex-col space-y-8 h-[724px] mt-5 smallhide largehide">
      <View className="w-full h-[352px] mobilevmark1 bg-cover" />
      <View className="flex flex-col w-full items-start space-y-4">
        <Text className="text-brown manropereg tracking-[10px]">NEW PRODUCT</Text>
        <Text className="tracking-wide manropebh4 font-bold">XX99 MARK I HEADPHONES</Text>
        <Text className="text-ash manropemed leading-6">
          As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction
          for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
        </Text>
        <Text className="manropebh5 font-bold">$1,750</Text>
        <View className="flex h-[48px] w-[296px] space-x-2">
          <View className="flex w-[120px] bg-ashwhite items-center px-5">
            <TouchableOpacity
              onPress={() => {
                if (mark1s > 0) {
                  setMark1s(mark1s - 1);
                }
              }}
              className="font-bold cursor-pointer"
            >
              <Text>-</Text>
            </TouchableOpacity>
            <TextInput
              value={String(mark1s)}
              editable={false}
              className="w-full h-[32px] text-black bg-ashwhite text-center font-bold"
            />
            <TouchableOpacity
              onPress={() => {
                setMark1s(mark1s + 1);
              }}
              className="font-bold cursor-pointer"
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              setNumberOfMark1(mark1s);
            }}
            className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-4"
          >
            <Text>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}