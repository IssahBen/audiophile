import React from "react";
import { View, Text, TextInput } from "react-native";
import Invoice from "./Invoice";


export default function MobileCheckout() {
  return (
    <View className="w-full bg-white flex flex-col gap-5  px-4 py-4 mx-auto">
      <View className="w-full h-[1750px]  flex-col gap-10 bg-white">
        <View className="w-full  flex flex-col bg-white px-5 pt-8 gap-10">
          <Text className="font-bold text-2xl manropebh4">Checkout</Text>
          <BillingDetails />
          <ShippingInfo />
          <PaymentDetails />
        </View>
        <View className="w-full ">
          <Invoice/>
        </View>
      </View>
    </View>
  );
}

function BillingDetails() {
  return (
    <View className="flex flex-col w-full gap-4">
      <Text className="manropebh6 font-medium text-brown">BILLING DETAILS</Text>
      <FormInput label="Name" placeholder="John Doe" />
      <FormInput label="Phone Number" placeholder="+(1)431-323-3580" />
      <FormInput label="Email Address" placeholder="@gmail.com" />
    </View>
  );
}

function ShippingInfo() {
  return (
    <View className="flex flex-col w-full gap-4">
      <Text className="manropebh6 font-medium text-brown">SHIPPING INFO</Text>
      <FormInput label="Your Address" />
      <FormInput label="Zip Code" />
      <FormInput label="City" />
      <FormInput label="Country" />
    </View>
  );
}

function PaymentDetails() {
  return (
    <View className="flex flex-col w-full gap-2">
      <Text className="manropebh6 font-medium text-brown">PAYMENT DETAILS</Text>
      <FormInput label="Name on Card" placeholder="John Doe" />
      <FormInput label="Card Number" placeholder="xxxx-xxxx-xxxx-xxxx" />

      <View className="flex flex-row w-full justify-center font-bold h-[50px] mt-10">
        <View className="w-1/2 flex flex-col justify-center gap-2">
          <Text className="text-black">Cvv</Text>
          <TextInput className="w-[80px] h-[40px] border-2 rounded-lg pl-2" />
        </View>
        <View className="flex flex-col w-1/2 gap-2 ">
          <Text className="text-black">Expiry Details</Text>
          <View className="flex flex-row">
            <TextInput className="w-[30px] h-[30px] border-2 rounded-lg pl-1" />
            <TextInput className="w-[30px] h-[30px] border-2 rounded-lg pl-1 ml-2" />
          </View>
        </View>
      </View>
    </View>
  );
}

// Reusable Form Input Component
function FormInput({ label, placeholder = "" }) {
  return (
    <View className="flex flex-col font-bold space-y-2 w-full">
      <Text className="text-black">{label}</Text>
      <TextInput
        placeholder={placeholder}
        className="w-[280px] h-[56px] border-2 rounded-lg px-10"
      />
    </View>
  );
}
