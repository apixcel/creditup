"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Input from "./Input";
import { useAppDispatch } from "@/redux/hook";
import { setCreditUp } from "@/redux/features/customer-detail/customerDetailSlice";

const FormSchema = Yup.object().shape({
  lender1: Yup.string().required("You must enter the lender 1"),
  outStandingBalance: Yup.string().required(
    "You must enter the outStandingBalance"
  ),
  contribute: Yup.string().required("You must enter the contribute"),
  anotherLander: Yup.string().required("You must enter the anotherLander"),
});

const StepEleven = () => {
  const dispatch = useAppDispatch();

  const initialValue = {
    lender1: "",
    outStandingBalance: "",
    contribute: "",
    anotherLander: "",
  };
  const handleSubmit = (values: any) => {
    console.log(values);
    dispatch(setCreditUp(values));
  };

  return (
    <StepBody title="Which lenders do you owe money too? If the account is with a debt collector, who is it?">
      <Formik
        initialValues={initialValue}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-5">
          <Input isCenter={true} title="Lender 1" name="lender1" id="lender1" />
          <Input
            isCenter={true}
            title="What is your outstanding balance?"
            name="outStandingBalance"
            id="outBal"
          />
          <Input
            isCenter={true}
            title="How much do you contribute towards (lender 1)?"
            name="contribute"
            id="contribute"
          />
          <Input
            isCenter={true}
            title="Add another Lender"
            name="anotherLender"
            id="anotherLander"
          />
          <p className="text-center text-[16px] leading-[26px] font-light italic">
            After the customer has filled out all their debt information a
            summary should be shown such as;
          </p>
          <button type="submit" className="btn mt-10">
            Continue
          </button>
        </Form>
      </Formik>
    </StepBody>
  );
};

export default StepEleven;