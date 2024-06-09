import { ErrorMessage, Field } from "formik";
import React from "react";
interface Props {
  type?: string;
  name: string;
  id?: string;
  placeholder?: string;
  title: string;
  isCenter?: boolean;
}
const Input: React.FC<Props> = ({
  type,
  name,
  id,
  placeholder,
  title,
  isCenter,
}) => {
  return (
    <div className="flex flex-col gap-[8px] justify-start items-start">
      <label
        htmlFor={id || name}
        className={`label ${isCenter ? "text-center" : ""}`}
      >
        {title}
      </label>
      <Field
        type={type || "text"}
        id={id || name}
        name={name}
        placeholder={placeholder || ""}
        className="inputPrimary"
      />
      <ErrorMessage name={name} component="div" className="errorMessage" />
    </div>
  );
};

export default Input;
