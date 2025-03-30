import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Invoice from "./Invoice";
import { StripeProvider } from "@stripe/stripe-react-native";
export default function MobileCheckout() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [publishableKey, setPublishableKey] = useState(
    "pk_test_51OqpAvEylVar9lzf6hexwa8JLKt5BEClCWMcYxQ2Fk5HGkzb5KgPirMT5jPgKpJeDqIxWTaXJO9SoeGihvlRKfGv00CBvsPdlT"
  );
  return (
    <View className="w-full bg-white flex flex-col gap-6 px-6 py-6 mx-auto">
      <View className="w-full max-w-screen-lg h-[1500px] mx-auto bg-white flex flex-col gap-12">
        <View className="w-full flex flex-col bg-white px-5 pt-8 gap-8">
          <Text className="font-bold text-3xl text-black">Checkout</Text>
          <BillingDetails
            name={name}
            number={number}
            email={email}
            setName={setName}
            setNumber={setNumber}
            setEmail={setEmail}
          />
          <ShippingInfo
            address={address}
            city={city}
            postalCode={postalCode}
            country={country}
            setPostalCode={setPostalCode}
            setCity={setCity}
            setCountry={setCountry}
            setAddress={setAddress}
          />
        </View>
        <View className="w-full bg-white px-5 py-4 shadow-md rounded-lg">
          <Invoice
            name={name}
            number={number}
            email={email}
            setName={setName}
            setNumber={setNumber}
            setEmail={setEmail}
            address={address}
            city={city}
            postalCOde={postalCode}
            country={country}
            setPostalCOde={setPostalCode}
            setCity={setCity}
            setCountry={setCountry}
            setAddress={setAddress}
          />
        </View>
      </View>
    </View>
  );
}

function BillingDetails({ name, setName, email, setEmail, number, setNumber }) {
  return (
    <View className="flex flex-col w-full gap-6 px-4 py-6 bg-white shadow-lg rounded-lg">
      <Text className="text-2xl font-semibold text-brown">BILLING DETAILS</Text>
      <FormInput
        val={name}
        setter={setName}
        label="Name"
        placeholder="John Doe"
      />
      <FormInput
        val={number}
        setter={setNumber}
        label="Phone Number"
        placeholder="+(1)431-323-3580"
      />
      <FormInput
        val={email}
        setter={setEmail}
        label="Email Address"
        placeholder="@gmail.com"
      />
    </View>
  );
}

function ShippingInfo({
  address,
  setAddress,
  postalCode,
  setPostalCode,
  city,
  setCity,
  country,
  setCountry,
}) {
  return (
    <View className="flex flex-col w-full gap-6 px-4 py-6 bg-white shadow-lg rounded-lg">
      <Text className="text-2xl font-semibold text-brown">SHIPPING INFO</Text>
      <FormInput
        val={address}
        setter={setAddress}
        label="Your Address"
        placeholder="Enter your address"
      />
      <FormInput
        val={postalCode}
        setter={setPostalCode}
        label="Zip Code"
        placeholder="Enter your zip code"
      />
      <FormInput
        val={city}
        setter={setCity}
        label="City"
        placeholder="Enter your city"
      />
      <FormInput
        val={country}
        setter={setCountry}
        label="Country"
        placeholder="Enter your country"
      />
    </View>
  );
}

// Reusable Form Input Component
function FormInput({ label, placeholder = "", val, setter }) {
  function handleChange(e) {
    setter(e.target.value);
  }
  return (
    <View className="flex flex-col w-full space-y-2">
      <Text className="text-black font-semibold text-sm">{label}</Text>
      <TextInput
        onChange={handleChange}
        value={val}
        placeholder={placeholder}
        className="w-full h-12 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
      />
    </View>
  );
}
