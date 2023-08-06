import { useField } from "formik";
import { classNames } from "../../lib/util";

const FormikTextarea = ({ className, labelName, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="w-full flex flex-col justify-start">
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
        <textarea
          className={classNames(
            "w-full outline-none rounded-md border border-2 px-2 py-2 h-[100px] border mt-2 resize-none hover:ring-2 hover:ring-blue-200 ",
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
export default FormikTextarea;
