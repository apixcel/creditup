"use client";
import Button from "@/components/steps/Button";
import Input from "@/components/steps/Input";
import Card from "@/components/steps/card";
import CheckBox from "@/components/ui/CheckBox";
import RememberMe from "@/components/ui/RememberMe";
import { setUser } from "@/redux/features/user/userSlice";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const initialValues = {
  emailOrNumber: "",
  password: "",
};

type FormValue = typeof initialValues;

const Page = () => {
  const validationSchema = Yup.object().shape({
    emailOrNumber: Yup.string().required("You must enter you email or number"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .required("Password is required"),
  });

  const [showPass, setShowPass] = useState(false);
  const [userType, setUserType] = useState<"customer" | "guest">("customer");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (e: FormValue) => {
    const obj = {
      emailOrNumber: e.emailOrNumber,
      password: e.password,
      type: userType,
    };
    dispatch(setUser(obj));
    router.push("/customer-detail");
  };

  return (
    <Card heading="Create an account">
      <CheckBox onChange={(e) => setUserType(e)} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
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
