"use client";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import Button from "../steps/Button";

const StripeContainer = () => {
  const stripe = useStripe();
  const elements = useElements();
  const BASEURL = process.env.NEXT_PUBLIC_API_URL;
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet. Please try again later.");
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);
    if (!cardElement) {
      setError(
        "Card element not found. Please refresh the page and try again."
      );
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Create Payment Intent on the backend
      const response = await fetch(`${BASEURL}/payment/create/intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 100 }),
      });

      if (!response.ok) {
        throw new Error("Failed to create payment intent.");
      }

      const { data: clientSecret } = await response.json();

      // Confirm the Payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: "valaaso@meena.com",
          },
        },
      });

      if (result.error) {
        setError(`Payment failed: ${result.error.message}`);
      } else if (result.paymentIntent.status === "succeeded") {
        setError(null);
        console.log("Payment successful!");
        // Handle post-payment success actions here
      }
    } catch (error: any) {
      setError(`Error: ${error.message || ""}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <div className="flex flex-col gap-[8px] w-full">
        <label htmlFor="card-nr" className="label">
          Card number
        </label>
        <div className="px-[20px] w-full flex justify-center items-center h-[50px] border-[1px] border-[#E2E8F0] rounded-[15px]">
          <CardNumberElement
            id="card-nr"
            className="text-[16px] font-[500] bg-white w-full text-[#B4BFCD]"
          />
        </div>
      </div>

      <div className="flex items-start justify-start gap-[22px] w-full mt-[20px]">
        <div className="flex flex-col gap-[8px] w-full">
          <label htmlFor="card-ex" className="label">
            Card expiry
          </label>
          <div className="px-[20px] w-full flex justify-center items-center h-[50px] border-[1px] border-[#E2E8F0] rounded-[15px]">
            <CardExpiryElement
              id="card-ex"
              className="text-[16px] font-[500] bg-white w-full text-[#B4BFCD]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <label htmlFor="card-cv" className="label">
            CVC
          </label>
          <div className="px-[20px] w-full flex justify-center items-center h-[50px] border-[1px] border-[#E2E8F0] rounded-[15px]">
            <CardCvcElement
              id="card-cv"
              className="text-[16px] font-[500] bg-white w-full text-[#B4BFCD]"
            />
          </div>
        </div>
      </div>
      {error && <div className="error">{error}</div>}
      <Button
        className="w-full mt-[40px]"
        type="submit"
        text="Pay by card"
        disabled={loading}
      />
    </form>
  );
};

export default StripeContainer;
