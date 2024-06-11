import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripeContainer = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    console.log("Kichu ekta asche");
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
