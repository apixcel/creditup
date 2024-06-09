"use client";
import Input from "@/components/steps/Input";
import Card from "@/components/steps/card";
import { Form, Formik } from "formik";
const initialValues = {
  test: "",
};
const page = () => {
  return (
    <Card heading="Sign in to your account">
      <Formik initialValues={initialValues} onSubmit={(e) => console.log(e)}>
        {({ errors, touched }) => (
          <Form className="w-full mx-auto flex flex-col gap-[20px]">
            <Input name="emailOrNumber" title="Email/Number"/>
            <button
              type="submit"
              className="bg-primary text-white px-5 py-3 mb-5 rounded-md disabled:bg-gray-400"
            >
              submit
            </button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default page;
