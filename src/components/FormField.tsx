import type { FormFieldProps } from "@/types/types";

export default function FormField({ label, name, type, value, placeholder, register, errors, ...rest }: FormFieldProps) {
  const borderColor = errors[name]?.message ? "border-red" : "border-grey-500";
  const baseInputClass = "text-grey-600 rounded-lg border hover:border-green-600 focus:outline-none " + borderColor;
  const nonRadioInputClass = `${baseInputClass} w-full block px-6 py-3 mt-[.5rem]`;
  return (
    <>
      {label && type !== "radio" && (
        <>
          <label className={"block text-[18px] leading-[150%] text-grey-900"} htmlFor={name}>
            {label} <span className={"text-green-600"}>*</span>
          </label>
        </>
      )}

      <input id={name} className={type === "radio" ? baseInputClass : nonRadioInputClass} {...register(name)} {...rest} type={type} value={value} />
      {type === "radio" && (
        <>
          <label className={"pl-3 text-[18px] leading-[150%] text-grey-900"} htmlFor={name}>
            {label}
          </label>
        </>
      )}
      {errors[name]?.message && <p className={"pt-[.5rem] leading-[150%] text-red"}>{errors[name].message.toString()}</p>}
    </>
  );
}
