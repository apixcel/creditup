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
import { resetStep } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

const Steps = () => {
  const { step } = useAppSelector((state) => state.customer);
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user);

  useLayoutEffect(() => {
    dispatch(resetStep(undefined));
    if (!user.emailOrNumber || !user.password) {
      return router.push("/signup");
    }
  }, [dispatch, router, user]);
  // let step = 11;

  return (
    <div className="py-[80px]">
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
