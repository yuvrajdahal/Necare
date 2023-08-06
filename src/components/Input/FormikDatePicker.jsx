import React from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { classNames } from "../../lib/util";

const FormikDatePicker = ({ labelName, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="flex flex-col justify-start">
      {meta.touched && meta.error && labelName !== "" && (
        <label className="text-red font-light">{meta.error}</label>
      )}
      {!meta.touched && meta.error && labelName !== "" && (
        <label className="text-gray-700 font-light">{labelName}</label>
      )}
      {!meta.error && labelName !== "" && (
        <label className="text-gray-700 font-light">{labelName}</label>
      )}

      <DatePicker
        {...field}
        {...props}
        className={classNames(
          "w-full outline-none rounded-md border border-2 px-2 py-2 relative top-2 bg-transparent hover:ring-2 hover:ring-blue-200 ",
          meta.error && meta.touched && "border-red",
          !meta.error && meta.touched && "focus:ring-2 focus:ring-primary"
        )}
        placeholderText="05/01/2020"
        selected={field.value || null}
        onChange={(date) => helpers.setValue(date)}
        onBlur={() => helpers.setTouched(true)}
      />
    </div>
  );
};

export default FormikDatePicker;
