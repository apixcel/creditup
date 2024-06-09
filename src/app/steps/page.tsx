"use client"
import StepEight from "@/components/steps/StepEight";
import StepFour from "@/components/steps/StepFour";
import StepOne from "@/components/steps/StepOne";
import StepThree from "@/components/steps/StepThree";
import StepTwo from "@/components/steps/StepTwo";
import { useAppSelector } from "@/redux/hook";

const Steps = () => {
  const { step } = useAppSelector((state) => state.customer);
  // const step = 8

  return (
    <div className="py-[80px]">
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      {step === 8 && <StepEight />}
    </div>
  );
};

export default Steps;
