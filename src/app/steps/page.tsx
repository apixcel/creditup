import StepFour from "@/components/steps/StepFour";
import StepOne from "@/components/steps/StepOne";
import StepThree from "@/components/steps/StepThree";
import StepTwo from "@/components/steps/StepTwo";

const Steps = () => {
  return (
    <div className="py-[80px]">
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </div>
  );
};

export default Steps;
