"use client";
import Button from "@/components/steps/Button";
import Input from "@/components/steps/Input";
import Card from "@/components/steps/card";
import { setCustomer } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch } from "@/redux/hook";
import { CustomerType } from "@/types/CustomerDetailType";
import { updateData } from "@/utils/fetchData";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Cookies from "js-cookie";

// Define the validation schema using Yup
const FormSchema = Yup.object().shape({
  customerName: Yup.string().required("Customer name is required"),
  phone: Yup.string()
    .matches(/^\+?\d{10,14}$/, "Phone number is not valid")
    .required("Mobile number is required"),
  address: Yup.string().required("Address is required"),
  postCode: Yup.string().required("Post code is required"),
});

const initialValues = {
  customerName: "",
  phone: "",
  address: "",
  postCode: "",
};

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = () => {
      const tokenValue = Cookies.get("token");
      setToken(tokenValue as string);
    };

    getToken();
  }, []);

  const handleForm = async (values: CustomerType) => {
    dispatch(setCustomer(values));

    try {
      const res = await updateData("/customer/update", values, token);

      console.log("Response: ", res);
      router.push("/steps");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card heading="Customer Details">
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema} // Pass the validation schema to Formik
        onSubmit={(values) => handleForm(values)}
      >
        {({ errors, touched }) => (
          <Form className="w-full mt-[40px] mx-auto flex flex-col gap-[20px]">
            <div className="flex flex-col md:flex-row gap-[22px]">
              <div className="flex-1">
                <Input
                  name="customerName"
                  title="Customer Name"
                  placeholder="Type your name"
                />
              </div>
              <div className="flex-1">
                <Input
                  name="phone"
                  title="Mobile Number"
                  placeholder="Type your number"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[22px]">
              <div className="flex-1">
                <Input
                  name="address"
                  title="Address"
                  placeholder="Type your address"
                />
              </div>
              <div className="flex-1">
                <Input
                  name="postCode"
                  title="Post Code"
                  placeholder="Type your postal code"
                />
              </div>
            </div>
            <Button text="Submit" />
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default Page;
