"use client";

import { setCustomerDetailName } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Input from "./Input";
import StepBackButton from "./StepBackButton";

const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("You must enter the firstName"),
  lastName: Yup.string().required("You must enter the lastName"),
});

const StepThree = () => {
  const { customerDetail } = useAppSelector((state) => state.customer);
  const initialValue = {
    firstName: customerDetail.firstName,
    lastName: customerDetail.lastName,
  };
  const dispatch = useAppDispatch();
  const handleSubmit = (values: any) => {
    console.log(values);
    dispatch(setCustomerDetailName(values));
  };

  return (
    <StepBody title="What's your name?">
      <Formik
        initialValues={initialValue}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-[20px] w-full">
          <Input title="First Name" name="firstName" id="firstName" />
          <Input title="Last Name" name="lastName" id="lastName" />
          <button type="submit" className="btn mt-10">
            Continue
          </button>
        </Form>
      </Formik>
      <StepBackButton />
    </StepBody>
  );
};

export default StepThree;
