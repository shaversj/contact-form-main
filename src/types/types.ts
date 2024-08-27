import { z } from "zod";

export const FormSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  queryType: z.enum(["general", "support"], { message: "Please select a query type" }),
  message: z.string({ required_error: "This field is required" }).min(1),
  consent: z.boolean({ required_error: "To submit this form, please consent to being contacted" }),
});
