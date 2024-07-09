"use client";

import StepEight from "@/components/steps/StepEight";
import StepEleven from "@/components/steps/StepEleven";
import StepFive from "@/components/steps/StepFive";
import StepFour from "@/components/steps/StepFour";
import StepNine from "@/components/steps/StepNine";
import StepOne from "@/components/steps/StepOne";
import StepSeven from "@/components/steps/StepSeven";
import StepSix from "@/components/steps/StepSix";
import StepTen from "@/components/steps/StepTen";
import StepThirteen from "@/components/steps/StepThirteen";
import StepThree from "@/components/steps/StepThree";
import StepTwelve from "@/components/steps/StepTwelve";
import StepTwo from "@/components/steps/StepTwo";
import { useAppSelector } from "@/redux/hook";

const Steps = () => {
  const { step } = useAppSelector((state) => state.customer);
  // let step = 8;
  return (
    <div className="">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
      {step === 5 && <StepFive />}
      {step === 6 && <StepSix />}
      {step === 7 && <StepSeven />}
      {step === 8 && <StepEight />}
      {step === 9 && <StepNine />}
      {step === 10 && <StepTen />}
      {step === 11 && <StepEleven />}
      {step === 12 && <StepTwelve />}
      {step === 13 && <StepThirteen />}
    </div>
  );
};

export default Steps;
