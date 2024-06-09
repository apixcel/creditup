import { isDate, parse } from "date-fns";
import { Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import StepBody from "../shared/StepBody";
import Warning from "../shared/Warning";
import Button from "./Button";
import Input from "./Input";
const validationSchema = Yup.object().shape({
  cardNumber: Yup.string().required("Please enter your card number first"),
  date: Yup.date().transform(function (value, originalValue) {
    if (this.isType(value)) return value;
    const parsedDate = parse(originalValue, "MM/yy", new Date());
    return isDate(parsedDate) ? parsedDate : new Date("");
  }),
  cvv: Yup.string().required("Please enter your CVV number"),
});

const StepThirteen = () => {
  const text =
    "This card will be used to make your monthly payments. We take security very seriously, your details will remain secure.";
  return (
    <div>
      <StepBody title="Card details">
        <Warning text={text} />
        <Formik
          initialValues={{ date: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ setFieldValue, values, errors, touched }) => (
            <Form className="flex flex-col w-full gap-[20px]">
              <Input
                name="cardNumber"
                title="Card number"
                placeholder="*** *** ***"
              />

              <div className="w-full flex justify-start items-start gap-[22px]">
                <div className="flex flex-col justify-start items-start gap-[8px] w-full">
                  <label className={`label`}>Expire</label>
                  <DatePicker
                    selected={values.date as any}
                    onChange={(date: any) => setFieldValue("date", date)}
                    dateFormat="MM/yy"
                    placeholderText="MM/YY"
                    className={`${
                      errors.date && touched.date ? "input-error" : ""
                    } inputPrimary w-full`}
                  />
                </div>

                <Input
                  name="cvv"
                  className="w-full"
                  title="CVV"
                  placeholder="***"
                />
              </div>
              <Button text="Pay by card" />
            </Form>
          )}
        </Formik>
      </StepBody>
    </div>
  );
};

export default StepThirteen;
