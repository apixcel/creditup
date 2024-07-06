"use client";

import { setCustomerDetailEmail } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Warning from "../shared/Warning";
import Button from "./Button";
import Input from "./Input";
import StepBackButton from "./StepBackButton";

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required("You must enter the email"),
});

const StepFive = () => {
  const { email } = useAppSelector((state) => state.customer.customerDetail);
  const initialValue = {
    email: email,
  };
  const dispatch = useAppDispatch();
  const handleSubmit = (values: any) => {
    console.log(values);
    dispatch(setCustomerDetailEmail(values));
  };

  return (
    <StepBody title="What's your email?">
      <Formik
        initialValues={initialValue}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Warning text="This will also be your username" />
          <Input title="Email address" name="email" id="email" />
          <Button text=" Continue" type="submit" className="mt-10 w-full" />
        </Form>
      </Formik>
      <StepBackButton />
    </StepBody>
  );
};

export default StepFive;
