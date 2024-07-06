"use client";
import StepBody from "../shared/StepBody";
import Warning from "../shared/Warning";
import StripeWrapper from "../stripe/StripeWrapper";
import StepBackButton from "./StepBackButton";

const StepThirteen = () => {
  return (
    <StepBody title="Card details">
      <Warning
        text="This card will be used to make your monthly payments. We take security very seriously, your details will remain secure."
        className="!mb-[20px]"
      />
      <StripeWrapper />
      <StepBackButton />
    </StepBody>
  );
};

export default StepThirteen;
