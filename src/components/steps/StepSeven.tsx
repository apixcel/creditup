"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Input from "./Input";
import Warning from "../shared/Warning";
import { useAppDispatch } from "@/redux/hook";
import { setCustomerDetailPhone } from "@/redux/features/customer-detail/customerDetailSlice";

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
          <button type="submit" className="btn mt-10">
            Continue
          </button>
        </Form>
      </Formik>
    </StepBody>
  );
};

export default StepSeven;
