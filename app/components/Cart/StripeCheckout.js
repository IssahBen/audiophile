import { StripeProvider } from "@stripe/stripe-react-native";
import MobileCart from "./Cart";
import { useState } from "react";
import Invoice from "./Invoice";
import Checkout from "./Checkout";
export default function StripeCheckout() {
  const [publishableKey, setPublishableKey] = useState(
    "pk_test_51OqpAvEylVar9lzf6hexwa8JLKt5BEClCWMcYxQ2Fk5HGkzb5KgPirMT5jPgKpJeDqIxWTaXJO9SoeGihvlRKfGv00CBvsPdlT"
  );

  return (
    <StripeProvider publishableKey={publishableKey}>
      <Checkout />
    </StripeProvider>
  );
}
