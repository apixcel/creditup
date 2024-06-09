"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Input from "./Input";

const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("You must enter the firstName"),
  lastName: Yup.string().required("You must enter the lastName"),
});

const StepThree = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
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
          <Input name="firstName" id="firstName" />
        </Form>
      </Formik>
    </StepBody>
  );
};

export default StepThree;
