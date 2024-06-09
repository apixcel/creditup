"use client";
import Button from "@/components/steps/Button";
import Input from "@/components/steps/Input";
import Card from "@/components/steps/card";
import CheckBox from "@/components/ui/CheckBox";
import RememberMe from "@/components/ui/RememberMe";
import { Form, Formik } from "formik";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
const initialValues = {
  emailOrNumber: "",
  password: "",
};
const Page = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <Card heading="Create an account">
      <CheckBox onChange={(e) => console.log(e)} />
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
                {showPass ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>

            <RememberMe onClick={() => ""} />

            <Button text="SIGN UP" />
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default Page;
