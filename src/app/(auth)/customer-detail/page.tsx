"use client";
import Input from "@/components/steps/Input";
import Card from "@/components/steps/card";
import { setCustomer } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch } from "@/redux/hook";
import { CustomerType } from "@/types/CustomerDetailType";
import { Form, Formik } from "formik";
import { useState } from "react";



const initialValues = {
  customerName: "",
  phone: "",
  address: "",
  postCode: "",
};

const Page = () => {
  // const [showPass, setShowPass] = useState(true);
  const dispatch = useAppDispatch();

  const handleForm = (e:CustomerType) => {
    console.log(e);
    dispatch(setCustomer(e))
  };

  return (
    <Card heading="Customer Details">
      <Formik initialValues={initialValues} onSubmit={(e) => handleForm(e)}>
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
