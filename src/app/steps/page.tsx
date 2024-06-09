import StepEight from "@/components/steps/StepEight";
import StepEleven from "@/components/steps/StepEleven";
import StepFive from "@/components/steps/StepFive";
import StepFour from "@/components/steps/StepFour";
import StepNine from "@/components/steps/StepNine";
import StepOne from "@/components/steps/StepOne";
import StepSeven from "@/components/steps/StepSeven";
import StepSix from "@/components/steps/StepSix";
import StepTen from "@/components/steps/StepTen";
import StepThree from "@/components/steps/StepThree";
import StepTwelve from "@/components/steps/StepTwelve";
import StepTwo from "@/components/steps/StepTwo";
import { useAppSelector } from "@/redux/hook";

const Steps = () => {
  const { step } = useAppSelector((state) => state.customer);

  return (
    <div className="py-[80px]">
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <StepFive />
      <StepSix />
      <StepSeven />
      <StepEight />
      <StepNine />
      <StepTen />
      <StepEleven />
      <StepTwelve />
    </div>
  );
};

export default Steps;
