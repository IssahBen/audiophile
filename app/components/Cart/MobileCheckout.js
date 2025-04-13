import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Invoice from "./Invoice";
import { Publisher_Key } from "@env";
import { StripeProvider } from "@stripe/stripe-react-native";
export default function MobileCheckout() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
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
            postalCode={postalCode}
            country={country}
            setPostalCode={setPostalCode}
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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const alphaSpaces = /^[A-Za-z\s]+$/;
  const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return (
    <View className="flex flex-col w-full gap-6 px-4 py-6 bg-white shadow-lg rounded-lg">
      <Text className="text-2xl font-semibold text-brown">BILLING DETAILS</Text>
      <FormInput
        val={name}
        setter={setName}
        label="Name"
        placeholder="John Doe"
        regex={alphaSpaces}
      />
      <FormInput
        val={number}
        setter={setNumber}
        label="Phone Number"
        placeholder="+(1)431-323-3580"
        regex={phoneRegex}
      />
      <FormInput
        val={email}
        setter={setEmail}
        label="Email Address"
        placeholder="@gmail.com"
        regex={emailRegex}
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
  const alphaSpaces = /^[A-Za-z\s]+$/;
  const phoneRegex = /^\d{10}$/;
  const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
  return (
    <View className="flex flex-col w-full gap-6 px-4 py-6 bg-white shadow-lg rounded-lg">
      <Text className="text-2xl font-semibold text-brown">SHIPPING INFO</Text>
      <FormInput
        val={address}
        setter={setAddress}
        label="Your Address"
        placeholder="Enter your address"
        regex={alphanumericRegex}
      />
      <FormInput
        val={postalCode}
        setter={setPostalCode}
        label="Zip Code"
        placeholder="Enter your zip code"
        regex={alphaSpaces}
      />
      <FormInput
        val={city}
        setter={setCity}
        label="City"
        placeholder="Enter your city"
        regex={alphaSpaces}
      />
      <FormInput
        val={country}
        setter={setCountry}
        label="Country"
        placeholder="Enter your country"
        regex={alphaSpaces}
      />
    </View>
  );
}

function FormInput({ label, placeholder = "", val, setter, regex }) {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (text) => {
    const valid = regex ? regex.test(text) : true;
    setIsValid(valid);
    setter(text);
  };

  return (
    <View className="p-5">
      {label && <Text className="text-lg mb-1">{label}</Text>}
      <TextInput
        className={`border p-2 rounded text-lg ${
          isValid ? "border-gray-300" : "border-red-500"
        }`}
        value={val}
        onChangeText={handleChange}
        placeholder={placeholder}
      />
      {!isValid && val.length > 0 && (
        <Text className="text-red-500 mt-2">Invalid input</Text>
      )}
    </View>
  );
}
