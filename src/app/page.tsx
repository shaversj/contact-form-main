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

        <div>
          <label className={"block text-[18px] leading-[150%] text-grey-900"} htmlFor={"message"}>
            Message <span className={"text-green-600"}>*</span>
          </label>
          <textarea
            {...register("message")}
            aria-invalid={(errors as Record<string, any>)["message"]?.message ? "true" : "false"}
            className={
              "text-grey-600 aria mt-[.5rem] w-full rounded-lg border border-grey-500 px-6 py-3 hover:border-green-600 focus:outline-none aria-[invalid=true]:border-red"
            }
          ></textarea>
          {(errors as Record<string, any>)["message"]?.message && (
            <p className={"pt-[.5rem] leading-[150%] text-red"}>{(errors as Record<string, any>)["message"].message.toString()}</p>
          )}
        </div>

        <div>
          <input type={"checkbox"} value={"acknowledged"} {...register("consent")} />
          <label className={"pl-3 text-grey-900"} htmlFor={"consent"}>
            I consent to being contacted by the team <span className={"text-green-600"}>*</span>
          </label>
          {(errors as Record<string, any>)["consent"]?.message && (
            <p className={"pt-[.5rem] leading-[150%] text-red"}>{(errors as Record<string, any>)["consent"].message.toString()}</p>
          )}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
