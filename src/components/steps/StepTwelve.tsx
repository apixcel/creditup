"use client";

import { setCustomerDetailPaymentDate } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { isDate, parse } from "date-fns";
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
    .typeError("Date must be in the format dd/mm/yyyy"),
});

const StepTwelve = () => {
  const { paymentDate } = useAppSelector(
    (state) => state.customer.customerDetail
  );

  const dispatch = useAppDispatch();

  return (
    <StepBody title="Payment Date">
      <Formik
        initialValues={{ date: paymentDate }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          dispatch(setCustomerDetailPaymentDate({ paymentDate: values.date }));
        }}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form>
            <Warning text="Please select the best date each month for us to take your payment of £24.99" />
            <div>
              <label htmlFor="date" className="label">
                Payment Date
              </label>
              <DatePicker
                selected={values.date as any}
                onChange={(date: any) => setFieldValue("date", date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                minDate={new Date()} // Disable previous dates
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

export default StepTwelve;
