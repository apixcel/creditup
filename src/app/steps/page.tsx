"use client";

import StepEight from "@/components/steps/StepEight";
import StepEleven from "@/components/steps/StepEleven";
import StepFour from "@/components/steps/StepFour";
import StepNine from "@/components/steps/StepNine";
import StepOne from "@/components/steps/StepOne";
import StepThirteen from "@/components/steps/StepThirteen";
import StepTwelve from "@/components/steps/StepTwelve";
import StepTwo from "@/components/steps/StepTwo";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Steps = () => {
  const { step: chup } = useAppSelector((state) => state.customer);
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  // useLayoutEffect(() => {
  //   dispatch(resetStep(undefined));
  //   if (!user.emailOrNumber || !user.password) {
  //     return router.push("/signup");
  //   }
  // }, [dispatch, router, user]);

  let step = 8;

  return (
    <div className="py-[80px]">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepFour />}
      {step === 4 && <StepEight />}
      {step === 5 && <StepNine />}
      {step === 6 && <StepEleven />}
      {step === 7 && <StepTwelve />}
      {step === 8 && <StepThirteen />}
    </div>
  );
};

export default Steps;
