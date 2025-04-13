import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useData } from "../Context/DataContext";
import { useNavigation } from "@react-navigation/native";
import { useStripe } from "@stripe/stripe-react-native";
const cmk1 = require("../../../assets/Cart/cmk1.jpg");
const cmk2 = require("../../../assets/Cart/cmk2.jpg");
const cx59 = require("../../../assets/Cart/cx59.jpg");
const cyx1 = require("../../../assets/Cart/cyx1.jpg");
const czx7 = require("../../../assets/Cart/czx7.jpg");
const czx9 = require("../../../assets/Cart/czx9.jpg");
export default function Invoice({
  name,
  number,
  email,
  setName,
  setNumber,
  setEmail,
  address,
  city,
  postalCode,
  country,
  setPostalCode,
  setCity,
  setCountry,
  setAddress,
}) {
  const navigation = useNavigation();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [sum, setSum] = useState(0);
  const [vat, setVat] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const shipping = 50;
  const {
    numberOfMark1,
    numberOfMark2,
    numberOfxx59,
    numberOfZx7,
    numberOfZx9,
    numberOfYx1,
  } = useData();

  useEffect(() => {
    const itemCounts = [
      numberOfMark1,
      numberOfMark2,
      numberOfxx59,
      numberOfZx7,
      numberOfZx9,
      numberOfYx1,
    ];
    const total =
      numberOfMark2 * 2999 +
      numberOfMark1 * 1750 +
      numberOfxx59 * 899 +
      numberOfYx1 * 599 +
      numberOfZx7 * 3500 +
      numberOfZx9 * 4500;

    setSum(total);
    setVat(total * 0.13016);
    setGrandTotal(total + vat + shipping);
    setNumberOfItems(itemCounts.filter((count) => count > 0).length);
  }, [
    numberOfMark1,
    numberOfMark2,
    numberOfxx59,
    numberOfZx7,
    numberOfZx9,
    numberOfYx1,
    vat,
  ]);

  function Purchase() {
    navigation.navigate("Alt");
  }
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const formattedSum = formatNumber(sum);
  const formattedVat = formatNumber(vat.toFixed(2));
  const formattedTotal = formatNumber(grandTotal.toFixed(2));
  const API_URL =
    "https://ce06-99-230-98-234.ngrok-free.app/api/v1/payment-sheet";
  const fetchPaymentIntent = async () => {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: grandTotal }),
      });

      const { paymentIntent, ephemeralKey, customer } = await response.json();

      return { paymentIntent, ephemeralKey, customer };
    } catch (error) {
      console.error("Error fetching payment intent:", error);
      return null;
    }
  };
  function convertToFormData(data) {
    const formData = new FormData();

    // Helper function to append nested objects
    const appendToFormData = (obj, prefix = "") => {
      Object.entries(obj).forEach(([key, value]) => {
        const formKey = prefix ? `${prefix}[${key}]` : key;

        if (
          typeof value === "object" &&
          !Array.isArray(value) &&
          value !== null
        ) {
          // Handle nested objects
          appendToFormData(value, formKey);
        } else if (Array.isArray(value)) {
          // Handle arrays (like order_items_attributes)
          value.forEach((item, index) => {
            appendToFormData(item, `${formKey}[${index}]`);
          });
        } else {
          // Handle primitive values
          formData.append(formKey, value);
        }
      });
    };

    appendToFormData(data);
    return formData;
  }
  const sendOrder = async () => {
    const formProps = {
      order: {
        customer_name: name,
        customer_number: number,
        customer_email: email,
        shipping_address_line1: address,
        city: city,
        postal_code: postalCode,
        country: country,
        total: grandTotal,
        order_items_attributes: [
          { product_id: "mk1", quantity: numberOfMark1, price: 1750 },
          { product_id: "mk2", quantity: numberOfMark2, price: 2999 },
          { product_id: "x59", quantity: numberOfxx59, price: 899 },
          { product_id: "yx1", quantity: numberOfYx1, price: 599 },
          { product_id: "zx7", quantity: numberOfZx7, price: 3500 },
          { product_id: "zx9", quantity: numberOfZx9, price: 4500 },
        ],
      },
    };
    console.log(formProps);
    const formData = convertToFormData(formProps);
    console.log(name);
    try {
      const response = await fetch(
        "https://ce06-99-230-98-234.ngrok-free.app/api/v1/order",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("succss");
        return "success";
      }
    } catch (error) {
      console.log(error.message);
      return "error";
    }
  };

  let reset = function () {
    setAddress("");
    setCity("");
    setCountry("");
    setEmail("");
    setPostalCode("");
    setCountry("");
    setName("");
  };
  const handleCheckout = async () => {
    setLoading(true);

    const response = await fetchPaymentIntent();
    if (!response) {
      setLoading(false);
      Alert.alert("Error", "Unable to initialize payment");
      return;
    }

    const { paymentIntent, ephemeralKey, customer } = response;

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Your Store",
      paymentIntentClientSecret: paymentIntent,
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
    });

    if (!error) {
      const { error: paymentError } = await presentPaymentSheet();
      if (paymentError) {
        Alert.alert("Error", paymentError.message);
      } else {
        console.log("success");
        try {
          const res = await sendOrder();
          console.log(res);
          if (res === "success") {
            navigation.navigate("Alt");
            reset();
          } else {
            console.log("failed");
          }
        } catch (error) {
          console.error("Error in handleOrder:", error);
        }
      }
    }

    setLoading(false);
  };
  return (
    <ScrollView className="w-full h-full flex gap-6 px-6 py-6 bg-white">
      <View className="w-full mb-4">
        <Text className="text-black font-semibold text-xl">Summary</Text>
      </View>

      <CartItem
        label="XX99 MK I"
        price={1750}
        count={numberOfMark1}
        src={cmk1}
      />
      <CartItem
        label="XX99 MK II"
        price={2999}
        count={numberOfMark2}
        src={cmk2}
      />
      <CartItem label="XX59" price={899} count={numberOfxx59} src={cx59} />
      <CartItem label="ZX7" price={3500} count={numberOfZx7} src={czx7} />
      <CartItem label="ZX9" price={4500} count={numberOfZx9} src={czx9} />
      <CartItem label="YX1" price={599} count={numberOfYx1} src={cyx1} />

      <View className="flex justify-between flex-row mb-3">
        <Text className="font-medium text-gray-600">TOTAL</Text>
        <Text className="font-semibold text-black">$ {formattedSum}</Text>
      </View>
      <View className="flex justify-between flex-row mb-3">
        <Text className="font-medium text-gray-600">SHIPPING</Text>
        <Text className="font-semibold text-black">$ {shipping}</Text>
      </View>
      <View className="flex justify-between flex-row mb-3">
        <Text className="font-medium text-gray-600">TAX</Text>
        <Text className="font-semibold text-black">$ {formattedVat}</Text>
      </View>
      <View className="flex justify-between flex-row mb-4">
        <Text className="font-medium text-gray-600">GRAND TOTAL</Text>
        <Text className="font-semibold text-black">$ {formattedTotal}</Text>
      </View>

      <TouchableOpacity
        onPress={handleCheckout}
        className="bg-brown py-3 rounded-lg mt-5"
      >
        <Text className="text-white text-center font-semibold">PURCHASE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function CartItem({ label, price, count, src }) {
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const formattedNumber = formatNumber(price);
  if (count == 0) {
    return null;
  }

  return (
    <View className="flex flex-row justify-between items-center py-2">
      <Image source={src} className="w-16 h-16 bg-gray-200" />
      <Text className="font-bold text-black">{label}</Text>
      <Text className="text-gray-600">x{count}</Text>
      <Text className="text-black">${formattedNumber}</Text>
    </View>
  );
}
