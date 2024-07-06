"use client";

import Button from "@/components/steps/Button";
import Input from "@/components/steps/Input";
import Card from "@/components/steps/card";
import CheckBox from "@/components/ui/CheckBox";
import RememberMe from "@/components/ui/RememberMe";
import { postData } from "@/utils/fetchData";
import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "sonner";
import * as Yup from "yup";

const initialValues = {
  emailOrNumber: "",
  password: "",
};

const ValidationSchema = Yup.object().shape({
  emailOrNumber: Yup.string()
    .required("You must enter your email or number")
    .test(
      "is-email-or-phone",
      "You must enter a valid email or a number between 10 to 14 digits",
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10,14}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }
    ),
  password: Yup.string().required("Password is required"),
});

const Page = () => {
  const [showPass, setShowPass] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [userType, setUserType] = useState<"customer" | "agent">("customer");
  const [message, setMssage] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    try {
      const res = await postData("/auth/login", { ...values, userType });
      if (!res.success) {
        setMssage(res.message || "");
        setModalShow(true);
      } else {
        Cookies.set("token", res.token);
        toast.success("Successfully logedin");
        router.push("/");
      }
    } catch (error: any) {
      toast.error("Something went wrong");
    }
  };



  return (
    <>
      {modalShow && (
        <div className="absolute inset-0 h-screen z-50 w-full bg-black/75 flex justify-center items-center">
          <div className="max-w-md bg-white rounded-md p-5 shadow-md">
            <h3 className="text-[18px] text-slate-900 font-[500] mb-3">
              {message}
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Do you need to create a new account?
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button
                className="rounded px-3 py-2 col-span-2 bg-violet-600 text-white"
                onClick={() => router.push("/signup")}
              >
                Create an account
              </button>
              <button
                className="rounded px-3 py-2 bg-red-500 text-white"
                onClick={() => setModalShow(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <Card heading="Sign in to your account">
        <CheckBox onChange={(e) => setUserType(e)} />
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
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

              <Button text="SIGN IN" />
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default Page;
