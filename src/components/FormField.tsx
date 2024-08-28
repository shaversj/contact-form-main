import type { FormFieldProps } from "@/types/types";
import { FormValues } from "@/types/types";

export default function FormField({ label, name, type, value, placeholder, register, errors, ...rest }: FormFieldProps) {
  const baseInputClass = "text-grey-600 rounded-lg border hover:border-green-600 focus:outline-none border-grey-500 aria-[invalid=true]:border-red ";
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

      <input
        id={name}
        className={type === "radio" ? baseInputClass : nonRadioInputClass}
        {...register(name as keyof FormValues)}
        {...rest}
        type={type}
        value={value}
        aria-invalid={(errors as Record<string, any>)["message"]?.message ? "true" : "false"}
      />

      {type === "radio" && (
        <>
          <label className={"pl-3 text-[18px] leading-[150%] text-grey-900"} htmlFor={name}>
            {label}
          </label>
        </>
      )}
      {(errors as Record<string, any>)[name]?.message && <p className={"pt-[.5rem] leading-[150%] text-red"}>{(errors as Record<string, any>)[name].message.toString()}</p>}
    </>
  );
}
