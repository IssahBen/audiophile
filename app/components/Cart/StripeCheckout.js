import { StripeProvider } from "@stripe/stripe-react-native";
import MobileCart from "./Cart";
import { useState } from "react";
import Invoice from "./Invoice";
import Checkout from "./Checkout";
import { Publisher_Key } from "@env";
export default function StripeCheckout() {
  return (
    <StripeProvider publishableKey={Publisher_Key}>
      <Checkout />
    </StripeProvider>
  );
}
