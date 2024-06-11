"use client";

import { setCreditUp } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch } from "@/redux/hook";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Input from "./Input";
import Button from "./Button";

const FormSchema = Yup.object().shape({
  lender: Yup.string().required("You must enter the lender 1"),
  outstandingBalance: Yup.string().required(
    "You must enter the outStandingBalance"
  ),
  contribute: Yup.string().required("You must enter the contribution"),
  anotherLender: Yup.string().required("You must enter another lender"),
});

const StepEleven = () => {
  const dispatch = useAppDispatch();

  const initialValue = {
    lender: "",
    outstandingBalance: "",
    contribute: "",
    anotherLender: "",
  };

  const handleSubmit = (values: any) => {
    const { outstandingBalance, contribute, ...rest } = values;

    const obj = {
      outstandingBalance: Number(outstandingBalance),
      contribute: Number(contribute),
      ...rest,
    };

    dispatch(setCreditUp(obj));
  };

  return (
    <StepBody title="Which lenders do you owe money to? If the account is with a debt collector, who is it?">
      <Formik
        initialValues={initialValue}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-5">
          <Input isCenter={true} title="Lender 1" name="lender" id="lender" />
          <Input
            isCenter={true}
            title="What is your outstanding balance?"
            name="outstandingBalance"
            id="outstandingBalance"
            type="number"
          />
          <Input
            isCenter={true}
            title="How much do you contribute towards (lender 1)?"
            name="contribute"
            id="contribute"
            type="number"
          />
          <Input
            isCenter={true}
            title="Add another Lender"
            name="anotherLender"
            id="anotherLender"
          />
          <p className="text-center text-[16px] leading-[26px] font-light italic max-w-[586px] mx-auto">
            After the customer has filled out all their debt information, a
            summary should be shown such as:
          </p>
          <div className="mt-5 lg:mt-[70px]">
            <p className="text-[18px] text-center font-medium leading-[26px] mb-[40px]">
              {`Let's Review your current circumstances`}
            </p>
            <div className="flex justify-between items-center gap-2 mb-3">
              <p className="text-[16px] font-medium leading-[26px]">
                Total debt level
              </p>
              <p className="text-[16px] font-medium leading-[26px]">
                Current creditor repayments
              </p>
              <p className="text-[16px] font-medium leading-[26px]">Total</p>
            </div>
            <div className="flex justify-between items-center gap-1 bg-[#C6D4E0] py-[12px] px-[24px] rounded-[12px] text-[16px] font-medium leading-[26px] mb-[32px]">
              <p className="text-[16px] font-medium leading-[26px]">******</p>
              <p className="text-[16px] font-medium leading-[26px]">******</p>
              <p className="text-[16px] font-medium leading-[26px]">******</p>
            </div>
          </div>
          <div className="mt-5 lg:mt-[80px]">
            <p className="text-[18px] text-center font-medium leading-[26px] mb-[40px]">
              {` Let's Review your CreditUP legal arrangement`}
            </p>
            <div className="flex justify-between items-center gap-2 mb-3">
              <p className="text-[16px] font-medium leading-[26px]">
                New Creditor repayment
              </p>
              <p className="text-[16px] font-medium leading-[26px]">
                Monthly Savings
              </p>
              <p className="text-[16px] font-medium leading-[26px]">
                Yearly Savings
              </p>
            </div>
            <div className="flex justify-between items-center gap-1 bg-[#C6D4E0] py-[12px] px-[24px] rounded-[12px] text-[16px] font-medium leading-[26px] mb-[32px]">
              <p className="text-[16px] font-medium leading-[26px]">******</p>
              <p className="text-[16px] font-medium leading-[26px]">******</p>
              <p className="text-[16px] font-medium leading-[26px]">******</p>
            </div>
          </div>
          <Button text=" Continue" type="submit" className="mt-10 w-full" />
        </Form>
      </Formik>
    </StepBody>
  );
};

export default StepEleven;
