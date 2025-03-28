import React from "react";
import { View, Text, TextInput } from "react-native";
import Invoice from "./Invoice";

export default function MobileCheckout() {
  return (
    <View className="w-full bg-white flex flex-col gap-6 px-6 py-6 mx-auto">
      <View className="w-full max-w-screen-lg h-[1500px] mx-auto bg-white flex flex-col gap-12">
        <View className="w-full flex flex-col bg-white px-5 pt-8 gap-8">
          <Text className="font-bold text-3xl text-black">Checkout</Text>
          <BillingDetails />
          <ShippingInfo />
        </View>
        <View className="w-full bg-white px-5 py-4 shadow-md rounded-lg">
          <Invoice />
        </View>
      </View>
    </View>
  );
}

function BillingDetails() {
  return (
    <View className="flex flex-col w-full gap-6 px-4 py-6 bg-white shadow-lg rounded-lg">
      <Text className="text-2xl font-semibold text-brown">BILLING DETAILS</Text>
      <FormInput label="Name" placeholder="John Doe" />
      <FormInput label="Phone Number" placeholder="+(1)431-323-3580" />
      <FormInput label="Email Address" placeholder="@gmail.com" />
    </View>
  );
}

function ShippingInfo() {
  return (
    <View className="flex flex-col w-full gap-6 px-4 py-6 bg-white shadow-lg rounded-lg">
      <Text className="text-2xl font-semibold text-brown">SHIPPING INFO</Text>
      <FormInput label="Your Address" placeholder="Enter your address" />
      <FormInput label="Zip Code" placeholder="Enter your zip code" />
      <FormInput label="City" placeholder="Enter your city" />
      <FormInput label="Country" placeholder="Enter your country" />
    </View>
  );
}

// Reusable Form Input Component
function FormInput({ label, placeholder = "" }) {
  return (
    <View className="flex flex-col w-full space-y-2">
      <Text className="text-black font-semibold text-sm">{label}</Text>
      <TextInput
        placeholder={placeholder}
        className="w-full h-12 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
      />
    </View>
  );
}
