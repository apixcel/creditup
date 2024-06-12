"use client";

import { setCustomerDetailPhone } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch } from "@/redux/hook";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Warning from "../shared/Warning";
import Button from "./Button";
import Input from "./Input";

const FormSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\+?\d{10,14}$/, "Phone number is not valid")
    .required("You must enter the phone number"),
});

const StepSeven = () => {
  const initialValue = {
    phone: "",
  };
  const dispatch = useAppDispatch();
  const handleSubmit = (values: any) => {
    console.log(values);
    dispatch(setCustomerDetailPhone(values));
  };

  return (
    <StepBody title="What's your mobile number?">
      <Formik
        initialValues={initialValue}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Warning text="We will only call you to give you updates to your account, we never pass this to Third Parties" />
          <Input title="Phone Number" name="phone" id="phone" type="tel" />
          <Button text=" Continue" type="submit" className="mt-10 w-full" />
        </Form>
      </Formik>
    </StepBody>
  );
};

export default StepSeven;
