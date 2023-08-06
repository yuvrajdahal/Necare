import { useField } from "formik";
import { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { classNames } from "../../lib/util";

function SelectInput({ labelName, options, ...props }) {
  const [field, meta] = useField(props);

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

      <select
        className={classNames(
          "form-select block w-full outline-none bg-transparent rounded border px-2 py-2 mt-2 hover:ring-2 hover:ring-blue-200 ",
          meta.error && meta.touched && "border-red",
          !meta.error && meta.touched && "focus:ring-2 focus:ring-blue-10"
        )}
        {...field}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
