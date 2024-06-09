"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Input from "./Input";
import Warning from "../shared/Warning";

const FormSchema = Yup.object().shape({
  phone: Yup.string().required("You must enter the phone"),
});

const StepSeven = () => {
  const initialValue = {
    phone: "",
  };
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <StepBody title="What's your mobile number?">
      <Formik
        initialValues={initialValue}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Warning text="We will only call you to give you updates to your account, we never paco this to Third Parties" />
          <Input title="Phone Number" name="phone" id="phone" />
          <button type="submit" className="btn mt-10">
            Continue
          </button>
        </Form>
      </Formik>
    </StepBody>
  );
};

export default StepSeven;
