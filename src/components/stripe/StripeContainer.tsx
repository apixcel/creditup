"use client";
import { resetState } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppSelector } from "@/redux/hook";
import { BASEURL } from "@/utils/fetchData";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "sonner";
import Button from "../steps/Button";
import PayWithGoogle from "../steps/PayWithGoogle";
// import PayWithGoogle from "../steps/PayWithGoogle";

const StripeContainer = () => {
  const dispatch = useDispatch();
  const { customerDetail: customer_details } = useAppSelector(
    (state) => state.customer
  );

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState(false);

  const { creditUp, customer, customerAddress, customerDetail, circumstances } =
    useAppSelector((state) => state.customer);
  const user = useAppSelector((state) => state.user);
  const router = useRouter();

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();
    if (loading) {
      return;
    }
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
      const email = customer_details.email || "test@email.com";
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: { email },
      });

      if (error) {
        toast.error("Something went wrong while proccessing this payment");
        return;
      }

      const response = await fetch(`${BASEURL}/payment/create/subscription`, {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          paymentMethodId: paymentMethod.id,
          date: customerDetail.paymentDate,
        }),
      });

      if (!response.ok) {
        toast.error("Something went wrong while proccessing this payment");
        throw new Error("Failed to create payment intent.");
      }

      const data = await response.json();
      if (!data.success) {
        return toast.error("Invalid card credential");
      }

      const object = {
        ...user,
        creditUp,
        ...customer,
        ...customerAddress,
        ...customerDetail,
        ...circumstances,
      };

      const confirm = await fetch(`${BASEURL}/payment/confirm`, {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });

      if (!confirm.ok) {
        return toast.error("Something went wrong while creating your account");
      }

      const resData = await confirm.json();

      Cookies.set("token", resData.token);
      toast.success("congratulations your Creditup service is now ACTIVE!");
      dispatch(resetState(undefined));
      router.push("/");
    } catch (error: any) {
      toast.error("Something went wrong while processing this payment");
      // setError(`Error: ${error.message || ""}`);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loader = (
    <span className="flex items-center justify-center gap-[5px]">
      Payment Processing
      <span className="rounded-md h-[25px] w-[25px] border-4 border-t-4 border-blue-500 animate-spin" />
    </span>
  );

  return (
    <>
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
          text={loading ? loader : "Pay by card"}
          disabled={loading}
        />

        <Toaster richColors={true} position="top-center" />
      </form>

      <div className="flex flex-col justify-center items-center gap-[20px] py-[15px] mt-[20px]">
        <hr className="w-full" />
        <span className="text-[13px] text-gray-300">or</span>
        <div className="flex items-center justify-center gap-[50px]">
          <PayWithGoogle />
          {/* <PayWithApple /> */}
        </div>
      </div>
    </>
  );
};

export default StripeContainer;
