"use client";
import Input from "@/components/steps/Input";
import { Form, Formik } from "formik";
const initialValues = {
  test: "",
};
const page = () => {
  return (
    <div className="py-[50px] min-h-[80vh]">
      <Formik initialValues={initialValues} onSubmit={(e) => console.log(e)}>
        {({ errors, touched }) => (
          <Form className="max-w-md mx-auto ">
            <Input name="test" />
            <button
              type="submit"
              className="bg-primary text-white px-5 py-3 mb-5 rounded-md disabled:bg-gray-400"
            >
              submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;
