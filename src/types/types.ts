import { z } from "zod";
import { Field, UseFormRegister, FieldErrors } from "react-hook-form";

export const FormSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  queryType: z.enum(["General Enquiry", "Support Request"], { message: "Please select a query type" }),
  message: z.string().min(1, { message: "This field is required" }),
  consent: z.enum(["acknowledged"], { message: "To submit this form, please consent to being contacted" }),
});

type Register = UseFormRegister<FormValues>;
type Errors = FieldErrors<FormValues>;
export type FormValues = z.infer<typeof FormSchema>;

export type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  register: Register;
  errors: Errors;
};
