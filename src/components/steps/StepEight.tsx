"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Input from "./Input";
import Warning from "../shared/Warning";
import RedNote from "../shared/RedNote";
import { useAppDispatch } from "@/redux/hook";
import { setCustomerAddress } from "@/redux/features/customer-detail/customerDetailSlice";

const FormSchema = Yup.object().shape({
  postCode: Yup.string().required("Postcode is required"),
  buildingNumber: Yup.string().required("Building number is required"),
  streetName: Yup.string().required("Street name is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
});

const StepEight = () => {
  const initialValue = {
    postCode: "",
    buildingNumber: "",
    subBuildingName: "",
    buildingName: "",
    streetName: "",
    city: "",
    country: "",
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (values: any) => {
    console.log(values);
    dispatch(setCustomerAddress(values));
  };

  return (
    <StepBody title="What's your address?">
      <Formik
        initialValues={initialValue}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Warning text="Put in your postcode and we'll find your address" />
          <RedNote text="Postcode, Building number, Sub building name or Building name, Street name, Town/city, County is required, Please enter manually" />
          <div className="flex flex-col gap-[20px]">
            <Input title="Postcode" name="postCode" id="postCode" />
            <Input
              title="Building Number"
              name="buildingNumber"
              id="buildingNumber"
            />
            <Input
              title="Sub Building Name (optional)"
              name="subBuildingName"
              id="subBuildingName"
            />
            <Input title="Building Name (optional)" name="buildingName" id="buildingName" />
            <Input title="Street Name" name="streetName" id="streetName" />
            <Input title="City" name="city" id="city" />
            <Input title="Country" name="country" id="country" />
          </div>
          <button type="submit" className="btn mt-10">
            Continue
          </button>
        </Form>
      </Formik>
    </StepBody>
  );
};

export default StepEight;
