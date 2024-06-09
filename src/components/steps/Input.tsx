import { ErrorMessage, Field } from "formik";
import React from "react";
interface Props {
  type?: string;
  name: string;
  id?: string;
  placeholder?: string;
}
const Input: React.FC<Props> = ({ type, name, id, placeholder }) => {
  return (
    <div className="flex flex-col gap-[8px] justify-start items-start">
      <label
        htmlFor={id || name}
        className="text-[16px] leading-[26px] font-[500] text-[#071133]"
      >
        Your name
      </label>
      <Field
        type={type || "text"}
        id={id || name}
        name={name}
        placeholder={placeholder || ""}
        className="inputPrimary"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default Input;
