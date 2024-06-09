"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Input from "./Input";
import Warning from "../shared/Warning";

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required("You must enter the email"),
});

const StepFive = () => {
  const initialValue = {
    email: "",
  };
  const handleSubmit = (values: any) => {
    console.log(values);
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
          <button type="submit" className="btn mt-10">
            Continue
          </button>
        </Form>
      </Formik>
    </StepBody>
  );
};

export default StepFive;
