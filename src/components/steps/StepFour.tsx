"use client";

import { setCustomerDetailDateOfBirth } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { isDate, parse, subYears } from "date-fns";
import { ErrorMessage, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Warning from "../shared/Warning";
import Button from "./Button";
import StepBackButton from "./StepBackButton";

const validationSchema = Yup.object().shape({
  date: Yup.date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) return value;
      const parsedDate = parse(originalValue, "dd/MM/yyyy", new Date());
      return isDate(parsedDate) ? parsedDate : new Date("");
    })
    .required("Date is required")
    .typeError("Date must be in the format dd/mm/yyyy")
    .test(
      "is-18-years-old",
      "You must be at least 18 years old",
      function (value) {
        if (!value) return false; // If value is not provided, validation fails.
        const today = new Date();
        const ageLimit = subYears(today, 18);
        return value <= ageLimit;
      }
    ),
});

const StepFour = () => {
  const dispatch = useAppDispatch();
  const { dateOfBirth } = useAppSelector(
    (state) => state.customer.customerDetail
  );

  return (
    <StepBody title="What's your date of birth?">
      <Formik
        initialValues={{ date: dateOfBirth }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          dispatch(setCustomerDetailDateOfBirth({ dateOfBirth: values.date }));
        }}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form>
            <Warning text="You need to be over 18" />
            <div className="flex flex-col gap-[8px] justify-start items-start">
              <label htmlFor="date" className="label">
                DD/MM/YYYY
              </label>
              <DatePicker
                selected={values.date as any}
                onChange={(date: any) => setFieldValue("date", date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                className={`${
                  errors.date && touched.date ? "input-error" : ""
                } inputPrimary`}
              />
              <ErrorMessage
                name="date"
                component="div"
                className="errorMessage"
              />
            </div>
            <Button text=" Continue" type="submit" className="mt-10 w-full" />
          </Form>
        )}
      </Formik>
      <StepBackButton />
    </StepBody>
  );
};

export default StepFour;
