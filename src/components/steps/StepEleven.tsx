"use client";

import {
  Circumstances,
  CreditUpType,
  setCircumstances,
  setCreditUp,
} from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  generateCreditupInitValue,
  generateValidationSchema,
} from "@/utils/generateLenderYupSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { toast } from "sonner";
import StepBody from "../shared/StepBody";
import Button from "./Button";
import StepBackButton from "./StepBackButton";

type TLenderCount = 1 | 2 | 3;

const StepEleven = () => {
  const { creditUp, circumstances } = useAppSelector((state) => state.customer);
  const initNames = creditUp.map(({ lender }) => lender);
  const [lenderNames, setLenderNames] = useState<string[]>(initNames);

  const dispatch = useAppDispatch();
  const [numberOflenders, setNumberOFLenders] = useState<TLenderCount>(
    (creditUp.length as TLenderCount) || 1
  );

  const [toatlOutStandingBalance, setTotalOutStandingBalance] = useState(
    circumstances.totalDebtLevel || 0
  );
  const [toatlContributeBalance, setTotalContributeBalance] = useState(
    circumstances.curCreditorRepayment || 0
  );

  const handleSubmit = (values: any) => {
    // const feildNames = ["lender", "outstandingBalance", "contribute"];
    console.log(values);

    const dataArr = Array.from({ length: numberOflenders }).map((_, i) => {
      const lender = values[`lender${i + 1}`];
      const outstandingBalance = values[`outstandingBalance${i + 1}`];
      const contribute = values[`contribute${i + 1}`];

      return {
        lender,
        outstandingBalance,
        contribute,
      };
    });
    console.log(dataArr);

    const circumstance: Circumstances = {
      totalDebtLevel: toatlOutStandingBalance,
      curCreditorRepayment: toatlContributeBalance,
      newCreditorRepayment: toatlContributeBalance * 0.5,
      monthlySaving: toatlContributeBalance * 0.5 * 0.5,
      yearlySaving: toatlContributeBalance * 0.5 * 0.5 * 12,
      totalLender: numberOflenders,
    };

    dispatch(setCreditUp(dataArr as CreditUpType[]));
    dispatch(setCircumstances(circumstance));
  };

  // add more input feilds
  const handleAddFeild = () => {
    if (numberOflenders === 3) {
      return;
    }

    const lenderVal =
      (document.getElementById(`lender${numberOflenders}`) as HTMLInputElement)
        ?.value || "";
    const outstandingVal =
      (
        document.getElementById(
          `outstandingBalance${numberOflenders}`
        ) as HTMLInputElement
      )?.value || "";
    const contributeVal =
      (
        document.getElementById(
          `contribute${numberOflenders}`
        ) as HTMLInputElement
      )?.value || "";

    if (!lenderVal || !outstandingVal || !contributeVal) {
      return toast.error("First fill all feild");
    }
    setNumberOFLenders((numberOflenders + 1) as 1 | 2 | 3);
  };

  const calculateTotalOutstandingBalance = (e: HTMLInputElement) => {
    const name = e.name;

    const values: number[] = [];
    if (name.includes("outstandingBalance")) {
      Array.from({ length: numberOflenders }).forEach((_, i) => {
        const value = document.getElementById(
          `outstandingBalance${i + 1}`
        ) as HTMLInputElement;

        const valueInNumber = Number(value.value || 0);

        values.push(valueInNumber);
      });

      const total = values.reduce((acc, cur) => acc + cur, 0);
      setTotalOutStandingBalance(total);
    }
    if (name.includes("contribute")) {
      Array.from({ length: numberOflenders }).forEach((_, i) => {
        const value = document.getElementById(
          `contribute${i + 1}`
        ) as HTMLInputElement;

        const valueInNumber = Number(value.value || 0);

        values.push(valueInNumber);
      });

      const total = values.reduce((acc, cur) => acc + cur, 0);
      setTotalContributeBalance(total);
    }
  };
  const handleSetLenderName = (stringVal: string, index: number) => {
    const replicaNames = [...lenderNames];
    replicaNames[index] = stringVal;
    setLenderNames(replicaNames);
  };
  return (
    <StepBody title="Which lenders do you owe money to? If the account is with a debt collector, who is it?">
      <Formik
        initialValues={generateCreditupInitValue(numberOflenders, creditUp)}
        validationSchema={generateValidationSchema(numberOflenders)}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form
            className="flex flex-col gap-5"
            onChange={(e) =>
              calculateTotalOutstandingBalance(e.target as HTMLInputElement)
            }
          >
            {Array.from({ length: numberOflenders }).map((_, i) => (
              <div
                key={i + "feilds"}
                className={` ${
                  i === 0
                    ? ""
                    : "border-t-[1px] border-[#cccccc] mt-[20px] pt-[20px]"
                } flex flex-col gap-[20px] w-full `}
              >
                <div className={`flex flex-col items-center gap-[20px]`}>
                  <label
                    htmlFor={`lender${i + 1}`}
                    className={`label text-center`}
                  >
                    Lender
                  </label>
                  <div className="w-full">
                    <Field
                      type={`text`}
                      id={`lender${i + 1}`}
                      name={`lender${i + 1}`}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange(e);
                        handleSetLenderName(e.target.value, i);
                      }}
                      className="inputPrimary"
                    />
                    <ErrorMessage
                      name={`lender${i + 1}`}
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                </div>

                <div className={`flex flex-col items-center gap-[20px]`}>
                  <label
                    htmlFor={`outstandingBalance${i + 1}`}
                    className={`label text-center`}
                  >
                    What is your outstanding balance?
                  </label>
                  <div className="w-full">
                    <div className="w-full flex items-center justify-start gap-[5px] inputPrimary !pl-[0] overflow-hidden">
                      <span className="h-full bg-slate-100 px-[15px] center font-[500]">
                        £
                      </span>
                      <Field
                        type="number"
                        id={`outstandingBalance${i + 1}`}
                        name={`outstandingBalance${i + 1}`}
                        // placeholder={placeholder || ""}
                        min={"0"}
                        className="w-full outline-none"
                      />
                    </div>
                    <ErrorMessage
                      name={`outstandingBalance${i + 1}`}
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                </div>
                <div className={`flex flex-col items-center gap-[20px]`}>
                  <label
                    htmlFor={`contribute${i + 1}`}
                    className={`label text-center`}
                  >
                    How much do you contribute towards {lenderNames[i] || ""}?
                  </label>
                  <div className="w-full">
                    <div className="w-full flex items-center justify-start gap-[5px] inputPrimary !pl-[0] overflow-hidden">
                      <span className="h-full bg-slate-100 px-[15px] center font-[500]">
                        £
                      </span>
                      <Field
                        type="number"
                        id={`contribute${i + 1}`}
                        name={`contribute${i + 1}`}
                        min={"0"}
                        // placeholder={placeholder || ""}
                        className="w-full outline-none"
                      />
                    </div>
                    <ErrorMessage
                      name={`contribute${i + 1}`}
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button type="button" onClick={handleAddFeild}>
              Add Another lender
            </button>
            {/* <Input
            isCenter={true}
            title="Add another Lender"
            name="anotherLender"
            id="anotherLender"
          /> */}
            {/* <p className="text-center text-[16px] leading-[26px] font-light italic max-w-[586px] mx-auto">
            After the customer has filled out all their debt information, a
            summary should be shown such as:
          </p> */}
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
                <p className="text-[16px] font-medium leading-[26px]">
                  Total Accounts
                </p>
              </div>
              <div className="flex justify-between items-center gap-1 bg-[#C6D4E0] py-[12px] px-[24px] rounded-[12px] text-[16px] font-medium leading-[26px] mb-[32px]">
                <p className="text-[16px] font-medium leading-[26px]">
                  £{toatlOutStandingBalance}
                </p>
                <p className="text-[16px] font-medium leading-[26px]">
                  £{toatlContributeBalance}
                </p>
                <p className="text-[16px] font-medium leading-[26px]">
                  {numberOflenders}
                </p>
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
                <p className="text-[16px] font-medium leading-[26px]">
                  £{toatlContributeBalance * 0.5}
                </p>
                <p className="text-[16px] font-medium leading-[26px]">
                  £{toatlContributeBalance * 0.5 * 0.5}
                </p>
                <p className="text-[16px] font-medium leading-[26px]">
                  £{toatlContributeBalance * 0.5 * 0.5 * 12}
                </p>
              </div>
            </div>
            <Button
              text="Continue with my SAVING ARRANGEMENT"
              type="submit"
              className="mt-10 w-full"
            />
          </Form>
        )}
      </Formik>
      <StepBackButton />
    </StepBody>
  );
};

export default StepEleven;
