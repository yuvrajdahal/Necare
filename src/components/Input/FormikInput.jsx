import { useField } from "formik";
import { classNames } from "../../lib/util";

const FormikInput = ({ className, labelName, ...props }) => {
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
      <label className="w-full">
        <input
          className={classNames(
            "w-full outline-none bg-transparent rounded-md border mt-2 px-2 py-2 resize-none hover:ring-2 hover:ring-blue-200 placeholder:font-light placeholder:text-gray-400",
            meta.error && meta.touched && "border-red",
            !meta.error && meta.touched && "focus:ring-2 focus:ring-blue-10",

            "file:variant-default-btn file:py-[4px] file:mt-[2px] file:mr-3",
            className
          )}
          {...field}
          {...props}
        />
      </label>
    </div>
  );
};
export default FormikInput;
