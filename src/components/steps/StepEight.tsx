"use client";

import { setCustomerAddress } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import RedNote from "../shared/RedNote";
import StepBody from "../shared/StepBody";
import Button from "./Button";
import Input from "./Input";
import StepBackButton from "./StepBackButton";

const FormSchema = Yup.object().shape({
  buildingNumber: Yup.string().required("Building number is required"),
  streetName: Yup.string().required("Street name is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("valid Post code is required"),
});

const StepEight = () => {
  const {
    buildingName,
    city,
    buildingNumber,
    country,
    streetName,
    subBuildingName,
  } = useAppSelector((state) => state.customer.customerAddress);

  const initialValue = {
    buildingNumber,
    subBuildingName,
    buildingName,
    streetName,
    city,
    country,
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (values: any) => {
    const obj = values;

    dispatch(setCustomerAddress(obj));
  };

  return (
    <StepBody title="What's your address?">
      <Formik
        initialValues={initialValue}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <RedNote text="Postcode, Building number, Sub building name or Building name, Street name, Town/city, County is required, Please enter manually" />
          <div className="flex flex-col gap-[20px]">
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
            <Input
              title="Building Name (optional)"
              name="buildingName"
              id="buildingName"
            />
            <Input title="Street Name" name="streetName" id="streetName" />
            <Input title="City" name="city" id="city" />
            <Input title="Post Code" name="country" id="country" />
          </div>
          <Button text="Continue" type="submit" className="mt-10 w-full" />
        </Form>
      </Formik>
      <StepBackButton />
    </StepBody>
  );
};

export default StepEight;
