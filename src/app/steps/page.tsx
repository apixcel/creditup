"use client";

import StepEight from "@/components/steps/StepEight";
import StepEleven from "@/components/steps/StepEleven";
import StepFive from "@/components/steps/StepFive";
import StepFour from "@/components/steps/StepFour";
import StepNine from "@/components/steps/StepNine";
import StepOne from "@/components/steps/StepOne";
import StepSeven from "@/components/steps/StepSeven";
import StepTen from "@/components/steps/StepTen";
import StepThirteen from "@/components/steps/StepThirteen";
import StepThree from "@/components/steps/StepThree";
import StepTwelve from "@/components/steps/StepTwelve";
import StepTwo from "@/components/steps/StepTwo";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Steps = () => {
  const { step: chup } = useAppSelector((state) => state.customer);
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user);

  // useLayoutEffect(() => {
  //   dispatch(resetStep(undefined));
  //   if (!user.emailOrNumber || !user.password) {
  //     return router.push("/signup");
  //   }
  // }, [dispatch, router, user]);
  let step = 10;

  return (
    <div className="py-[80px]">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
      {step === 5 && <StepFive />}
      {step === 6 && <StepSeven />}
      {step === 7 && <StepEight />}
      {step === 8 && <StepNine />}
      {step === 9 && <StepTen />}
      {step === 10 && <StepEleven />}
      {step === 11 && <StepTwelve />}
      {step === 12 && <StepThirteen />}
      {/* {step === 13 && } */}
    </div>
  );
};

export default Steps;
