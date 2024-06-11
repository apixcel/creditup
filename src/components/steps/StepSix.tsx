"use client";

import { setCustomerDetailPassword } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch } from "@/redux/hook";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Warning from "../shared/Warning";
import Button from "./Button";
import Input from "./Input";

const FormSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match!")
    .required("You must confirm the password"),
});

const StepSix = () => {
  const initialValue = {
    password: "",
    confirmPassword: "",
  };
  const dispatch = useAppDispatch();
  const handleSubmit = (values: any) => {
    console.log(values);
    dispatch(setCustomerDetailPassword({ password: values?.password }));
  };

  return (
    <StepBody title="Create a password">
      <Formik
        initialValues={initialValue}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-[20px]">
          <Warning text="At least 8 characters, with 1 uppercase letter, 1 lowercase letter and numbers" />
          <Input
            title="Password"
            type="password"
            name="password"
            id="password"
          />
          <Input
            title="Confirm password"
            type="password"
            name="confirmPassword"
            id="cPassword"
          />
          <Button text=" Continue" type="submit" className="mt-10 w-full" />
        </Form>
      </Formik>
    </StepBody>
  );
};

export default StepSix;
