"use client";

import { setCustomerDetailName } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch } from "@/redux/hook";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Button from "./Button";
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
        <Form className="flex flex-col gap-[20px]">
          <Input title="First Name" name="firstName" id="firstName" />
          <Input title="Last Name" name="lastName" id="lastName" />
          <Button text="Cotinue" className="mt-10" />
        </Form>
      </Formik>
    </StepBody>
  );
};

export default StepThree;
