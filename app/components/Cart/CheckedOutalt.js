import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import { useData } from "../Context/DataContext";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
export default function Alt() {
  const {
    setNumberOfMark1,
    setNumberOfMark2,
    setNumberOfYx1,
    setNumberOfZx7,
    setNumberOfZx9,
    setNumberOfxx59,
  } = useData();
  const navigation = useNavigation();
  function Home() {
    setNumberOfMark1(0);
    setNumberOfMark2(0);
    setNumberOfYx1(0);
    setNumberOfZx7(0);
    setNumberOfZx9(0);
    setNumberOfxx59(0);
    navigation.navigate("Home");
  }
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="flex-1 p-4 justify-center">
        <View className="bg-white rounded-3xl shadow-lg p-8 gap-5 mt-10 ">
          {/* Order Success Icon */}
          <View className="items-center">
            <View className="bg-green-100 p-3 rounded-full">
              <Svg width={64} height={64} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M22 11.08V12a10 10 0 11-5.93-9.14"
                  stroke="#16a34a"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M22 4L12 14.01l-3-3"
                  stroke="#16a34a"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          </View>

          {/* Thank You Message */}
          <View className="items-center space-y-2">
            <Text className="text-3xl font-bold text-gray-900">Thank You!</Text>
            <Text className="text-base text-gray-600">
              Your order has been successfully placed.
            </Text>
          </View>

          {/* Order Details */}
          <View className="bg-gray-50 rounded-xl p-6 space-y-4">
            <View className="flex-row items-center space-x-3">
              <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                  stroke="#2563eb"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
                  stroke="#2563eb"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <View>
                <Text className="text-sm font-medium text-gray-900">
                  Order #12345
                </Text>
                <Text className="text-sm text-gray-500">
                  Estimated delivery: 3-5 business days
                </Text>
              </View>
            </View>

            <View className="space-y-2">
              <View className="h-2 bg-blue-200 rounded-full">
                <View className="h-2 bg-blue-600 rounded-full w-1/3" />
              </View>
              <View className="flex-row justify-between">
                <Text className="text-sm text-gray-500">Order Placed</Text>
                <Text className="text-sm text-gray-500">Processing</Text>
                <Text className="text-sm text-gray-500">Shipped</Text>
              </View>
            </View>
          </View>

          {/* Email Confirmation Message */}
          <View className="bg-blue-50 rounded-lg p-4 items-center space-y-2">
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <Path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                stroke="#2563eb"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M22 6l-10 7-10-7"
                stroke="#2563eb"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text className="text-blue-700 text-center">
              A confirmation email with order details has been sent to your
              email
            </Text>
          </View>

          {/* Return Home Button */}
          <TouchableOpacity
            className="w-full bg-gray-100 py-3 px-4 rounded-lg flex-row items-center justify-center space-x-2"
            activeOpacity={0.7}
            onPress={Home}
          >
            <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <Path
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                stroke="#4b5563"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M9 22V12h6v10"
                stroke="#4b5563"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text className="text-gray-700 font-medium ml-2">
              Return to Home
            </Text>
          </TouchableOpacity>

          {/* Contact Support */}
          <View className="items-center">
            <Text className="text-sm text-gray-500">
              Need help?{" "}
              <Text className="text-blue-600 font-medium">Contact Support</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
