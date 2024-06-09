"use client";
import Button from "@/components/steps/Button";
import Input from "@/components/steps/Input";
import Card from "@/components/steps/card";
import { setCustomer } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch } from "@/redux/hook";
import { CustomerType } from "@/types/CustomerDetailType";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

// Define the validation schema using Yup
const FormSchema = Yup.object().shape({
  customerName: Yup.string().required("Customer name is required"),
  phone: Yup.string().required("Mobile number is required"),
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

  const handleForm = (values: CustomerType) => {
    console.log(values);
    dispatch(setCustomer(values));
    router.push("/steps");
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
