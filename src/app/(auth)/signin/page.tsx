"use client";
import Input from "@/components/steps/Input";
import Card from "@/components/steps/card";
import { Form, Formik } from "formik";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
const initialValues = {
  test: "",
};
const Page = () => {
  const [showPass, setShowPass] = useState(true);

  return (
    <Card heading="Sign in to your account">
      <Formik initialValues={initialValues} onSubmit={(e) => console.log(e)}>
        {({ errors, touched }) => (
          <Form className="w-full mx-auto flex flex-col gap-[20px]">
            <Input
              name="emailOrNumber"
              title="Email/Number"
              placeholder="Type your mail"
            />
            <div className="w-full relative">
              <Input
                name="password"
                title="Password"
                type={showPass ? "text" : "password"}
                placeholder="Type your Password"
              />
              <button
                onClick={() => setShowPass(!showPass)}
                className="text-[#718096] absolute right-[20px] top-[51px]"
              >
                {showPass ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
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

export default Page;
