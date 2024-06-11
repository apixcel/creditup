"use client";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripeContainer = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default StripeContainer;
