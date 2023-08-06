import React from "react";
import { useField } from "formik";
import { FiUpload } from "react-icons/fi";
import { classNames } from "../../lib/util";

const FormikFileInput = ({ className, labelName, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    helpers.setValue(file);
  };

  return (
    <div className="flex w-full h-full flex-col justify-start">
      {meta.touched && meta.error && (
        <label className="text-red font-light">{meta.error}</label>
      )}

      <label className="h-full w-full ">
        <input
          type="file"
          className={classNames(
            "hidden",
            meta.error && meta.touched && "border-red",
            !meta.error && meta.touched && "focus:ring-2 focus:ring-blue-100",
            "file:variant-default-btn file:py-[4px] file:mt-[2px] file:mr-3"
          )}
          onChange={handleChange}
          onBlur={field.onBlur}
        />
        <div className="flex flex-col gap-2 items-center justify-center w-full h-full rounded-md  mt-2 px-2 py-2 cursor-pointer ">
          <FiUpload size={18} className="mr-2 text-blue-10" />
          <span>{field.value ? field.value.name : labelName}</span>
          <span className="text-sm text-gray-400">
            Drag and drop files here
          </span>
        </div>
      </label>
    </div>
  );
};

export default FormikFileInput;
