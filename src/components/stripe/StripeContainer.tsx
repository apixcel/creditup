"use client";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import Button from "../steps/Button";
const StripeContainer = () => {
  const stripe = useStripe();
  const elements = useElements();
  const BASEURL = "http://localhost:5000/api/v1";

  const handlePayment = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardNumberElement);
    if (card === null || !card) {
      return alert("enter a number");
    }
    if (!CardNumberElement) {
      return;
    }

    try {
      const response = await fetch(`${BASEURL}/payment/create/intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 100 }),
      });

      const { data:clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });

      if (result.error) {
        console.log("erro");
      } else if (result.paymentIntent.status === "succeeded") {
        console.log("Payment successful!");
        // Handle post-payment success actions here
      }
    } catch (error) {
      console.log(error);
    }

    console.log(card);
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
            className="text-[16px] font-[500] bg-white w-full textt-[#B4BFCD]"
          />
        </div>
      </div>

      <div className="flex items-start justify-start gap-[22px] w-full mt-[20px]">
        <div className="flex flex-col gap-[8px] w-full">
          <label htmlFor="card-ex" className="label">
            Card number
          </label>
          <div className="px-[20px] w-full flex justify-center items-center h-[50px] border-[1px] border-[#E2E8F0] rounded-[15px]">
            <CardExpiryElement
              id="card-ex"
              className="text-[16px] font-[500] bg-white w-full textt-[#B4BFCD]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <label htmlFor="card-cv" className="label">
            Card number
          </label>
          <div className="px-[20px] w-full flex justify-center items-center h-[50px] border-[1px] border-[#E2E8F0] rounded-[15px]">
            <CardCvcElement
              id="card-cv"
              className="text-[16px] font-[500] bg-white w-full textt-[#B4BFCD]"
            />
          </div>
        </div>
      </div>
      <Button className="w-full mt-[40px]" type="submit" text="Pay by card" />
    </form>
  );
};

export default StripeContainer;
