import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues } from "@/types/types";

type Variant = "text" | "radio" | "checkbox";

type Register = UseFormRegister<FormValues>;

type Errors = FieldErrors<FormValues>;

const VARIANTS: Record<Variant, string> = {
  text: "text-grey-600 rounded-lg border hover:border-green-600 focus:outline-none border-grey-500 aria-[invalid=true]:border-red w-full block px-6 py-3 mt-[.5rem]",
  radio: "",
  checkbox: "text-grey-600 rounded-lg border hover:border-green-600 focus:outline-none border-grey-500 aria-[invalid=true]:border-red justify-self-start",
};

type InputProps = {
  name: string;
  type: string;
  register: Register;
  placeholder?: string;
  value?: string;
  variant: Variant;
  errors?: Errors;
};

export default function Input({ name, type, register, placeholder, value, variant = "text", errors }: InputProps) {
  return (
    <input
      id={name}
      type={type}
      {...register(name as keyof FormValues)}
      placeholder={placeholder}
      value={value}
      className={VARIANTS[variant]}
      aria-invalid={(errors as Record<string, any>)[name]?.message ? "true" : "false"}
    />
  );
}
