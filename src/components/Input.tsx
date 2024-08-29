import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues } from "@/types/types";

type Variant = "text" | "radio" | "checkbox" | "textarea";

type Register = UseFormRegister<FormValues>;

type Errors = FieldErrors<FormValues>;

const VARIANTS: Record<Variant, string> = {
  text: "text-grey-600 rounded-lg border hover:border-green-600 focus:outline-none border-grey-500 aria-[invalid=true]:border-red w-full block px-6 py-3 mt-[.5rem]",
  radio: "text-grey-600 rounded-lg border hover:border-green-600 focus:outline-none border-grey-500 aria-[invalid=true]:border-red",
  checkbox:
    "text-grey-600 rounded-lg border hover:border-green-600 focus:outline-none border-grey-500 aria-[invalid=true]:border-red justify-self-start aria-[invalid=true]:mb-[24px]",
  textarea: "text-grey-600 rounded-lg border hover:border-green-600 focus:outline-none border-grey-500 aria-[invalid=true]:border-red w-full block px-6 py-3 mt-[.5rem]",
};

const ERROR_VARIANTS: Record<Variant, string> = {
  text: "pt-[.5rem] leading-[150%] text-red",
  radio: "pt-[.5rem] leading-[150%] text-red",
  checkbox: "absolute top-1/2 bottom-10 pt-[.5rem] leading-[150%] text-red",
  textarea: "pt-[.5rem] leading-[150%] text-red",
};

type InputProps = {
  name: string;
  type: string;
  register: Register;
  required?: boolean;
  placeholder?: string;
  value?: string;
  variant?: Variant;
  errors?: Errors;
};

export default function Input({ name, type, register, required = false, placeholder, value, variant = "text", errors }: InputProps) {
  return (
    <>
      <input
        id={name}
        type={type}
        {...register(name as keyof FormValues)}
        required={required}
        placeholder={placeholder}
        value={value}
        className={VARIANTS[variant]}
        aria-invalid={(errors as Record<string, any>)[name]?.message ? "true" : "false"}
      />
      {(errors as Record<string, any>)[name]?.message && <p className={ERROR_VARIANTS[variant]}>{(errors as Record<string, any>)[name].message.toString()}</p>}
    </>
  );
}
