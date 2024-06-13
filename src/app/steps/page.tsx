"use client";

import StepEight from "@/components/steps/StepEight";
import StepEleven from "@/components/steps/StepEleven";
import StepFive from "@/components/steps/StepFive";
import StepFour from "@/components/steps/StepFour";
import StepNine from "@/components/steps/StepNine";
import StepOne from "@/components/steps/StepOne";
import StepThirteen from "@/components/steps/StepThirteen";
import StepTwelve from "@/components/steps/StepTwelve";
import StepTwo from "@/components/steps/StepTwo";
import { resetStep } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

const Steps = () => {
  const { step } = useAppSelector((state) => state.customer);
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useLayoutEffect(() => {
    dispatch(resetStep(undefined));
    if (!user.emailOrNumber || !user.password) {
      return router.push("/signup");
    }
  }, [dispatch, router, user]);

  return (
    <div className="py-[80px]">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepFour />}
      {step === 4 && <StepFive />}
      {step === 5 && <StepEight />}
      {step === 6 && <StepNine />}
      {step === 7 && <StepEleven />}
      {step === 8 && <StepTwelve />}
      {step === 9 && <StepThirteen />}
    </div>
  );
};

export default Steps;
