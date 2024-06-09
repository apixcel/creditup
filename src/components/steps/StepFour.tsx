"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Input from "./Input";
import Warning from "../shared/Warning";

const FormSchema = Yup.object().shape({
  dateOfBirth: Yup.string().required("You must enter the DOB"),
});

const StepFour = () => {
  const initialValue = {
    dateOfBirth: "",
  };
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <StepBody title="What's your name?">
      <Formik
        initialValues={initialValue}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Warning text="You need to be over 18" />
          <Input title="DD/MM/YYYY" name="dateOfBirth" id="dob" />
          <button type="submit" className="btn mt-10">
            Continue
          </button>
        </Form>
      </Formik>
    </StepBody>
  );
};

export default StepFour;
