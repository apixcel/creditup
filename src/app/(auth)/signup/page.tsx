"use client";
import Button from "@/components/steps/Button";
import Input from "@/components/steps/Input";
import Card from "@/components/steps/card";
import CheckBox from "@/components/ui/CheckBox";
import RememberMe from "@/components/ui/RememberMe";
import { setUser } from "@/redux/features/user/userSlice";
import { postData } from "@/utils/fetchData";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import * as Yup from "yup";
import Cookies from "js-cookie";

const initialValues = {
  emailOrNumber: "",
  password: "",
};
type FormValue = typeof initialValues;

const validationSchema = Yup.object().shape({
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
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .required("Password is required"),
});

const Page = () => {
  const [showPass, setShowPass] = useState(false);
  const [userType, setUserType] = useState<"customer" | "agent">("customer");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormValue) => {
    const obj = {
      emailOrNumber: e.emailOrNumber,
      password: e.password,
      userType: userType,
    };

    try {
      const res = await postData("/auth/isexist", {
        emailOrNumber: e.emailOrNumber,
      });

      if (!res) {
        return console.log("Something went wrong!");
      }

      if (!res.success || res.duplicate) {
        return toast.error(res.message);
      }

      dispatch(setUser(obj));

      if (userType === "customer") {
        return router.push("/customer-detail");
      } else {
        const logged = await postData("/auth/create/agent", obj);
        if (logged.success) {
          Cookies.set("token", res.token);
          toast.success("Successfully logegd in!");
          router.push("/");
        } else {
          toast.error("Something went wrong!");
        }
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error("Something went wrong!");
    }
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
