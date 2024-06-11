import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeContainer from "./StripeContainer";

const StripeWrapper = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  );

  return (
    <Elements stripe={stripePromise}>
      <StripeContainer />
    </Elements>
  );
};

export default StripeWrapper;
