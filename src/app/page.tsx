"use client";

import { FieldErrors, Form, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, FormValues } from "@/types/types";
import FormField from "@/components/FormField";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data, e: any) => console.log(data, e);
  const onError = (errors: FieldErrors<FormValues>, e: any) => console.log("FORM ERRORS: ", errors, e);

  return (
    <div className="font-karla bg-white p-10 lg:h-[773px] lg:w-[736px]">
      <h1 className={"text-[32px] font-bold leading-[100%] tracking-[1px] text-grey-900"}>Contact Us</h1>
      <form className={"space-y-6 pt-8"} onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={"grid grid-cols-2 gap-x-4"}>
          <div>
            <FormField label={"First Name"} name={"firstName"} type={"text"} register={register} errors={errors} />
          </div>
          <div>
            <FormField label={"Last Name"} name={"lastName"} type={"text"} register={register} errors={errors} />
          </div>
        </div>

        <div>
          <FormField label={"Email"} name={"email"} type={"email"} register={register} errors={errors} />
        </div>

        <fieldset className={"flex gap-x-3"} id={"queryType"}>
          <div className={"flex h-[51px] grow items-center rounded-lg border border-amber-950 pl-[26.25px]"}>
            <FormField label={"General Enquiry"} name={"queryType"} value={"General Enquiry"} type={"radio"} register={register} errors={errors} />
          </div>
          <div className={"flex h-[51px] grow items-center rounded-lg border border-amber-950 pl-[26.25px]"}>
            <FormField label={"Support Request"} name={"queryType"} value={"Support Request"} type={"radio"} register={register} errors={errors} />
          </div>
        </fieldset>

        <button>Submit</button>
      </form>
    </div>
  );
}
