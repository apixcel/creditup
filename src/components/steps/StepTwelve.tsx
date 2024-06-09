"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parse, isDate } from "date-fns";
import StepBody from "../shared/StepBody";
import Warning from "../shared/Warning";
import { useAppDispatch } from "@/redux/hook";
import { setCustomerDetailPaymentDate } from "@/redux/features/customer-detail/customerDetailSlice";

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
  const dispatch = useAppDispatch();

  return (
    <StepBody title="Payment Date">
      <Formik
        initialValues={{ date: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          dispatch(setCustomerDetailPaymentDate({ paymentDate: values.date }));
        }}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form>
            <Warning text="Please select the best date each month for us to take your payment of £9.99" />
            <div>
              <label htmlFor="date" className="label">
                Payment Date
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
            <button type="submit" className="btn mt-10">
              Continue
            </button>
          </Form>
        )}
      </Formik>
    </StepBody>
  );
};

export default StepTwelve;
