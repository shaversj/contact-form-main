"use client";

import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, FormValues } from "@/types/types";
import Label from "@/components/Label";
import Input from "@/components/Input";
import FieldSet from "@/components/FieldSet";
import RadioGroupItem from "@/components/RadioGroupItem";
import RadioGroupErrors from "@/components/RadioGroupErrors";
import TextArea from "@/components/TextArea";

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
    <div className="bg-white p-10 font-karla lg:h-[800px] lg:w-[736px]">
      <h1 className={"text-[32px] font-bold leading-[100%] tracking-[1px] text-grey-900"}>Contact Us</h1>
      <form className={"space-y-6 pt-8"} onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={"grid grid-cols-2 gap-x-4"}>
          <div>
            <Label htmlFor={"firstName"} required={true} displayName={"First Name"} />
            <Input name={"firstName"} type={"text"} register={register} errors={errors} />
          </div>
          <div>
            <Label htmlFor={"lastName"} required={true} displayName={"Last Name"} />
            <Input name={"lastName"} type={"text"} register={register} errors={errors} />
          </div>
        </div>

        <div>
          <Label htmlFor={"email"} required={true} displayName={"Email"} />
          <Input name={"email"} type={"email"} register={register} errors={errors} />
        </div>

        <div>
          <FieldSet legend={"Query Type"} name={"queryType"}>
            <RadioGroupItem name={"queryType"} value={"General Enquiry"} checked={false} displayName={"General Enquiry"} register={register} errors={errors} />
            <RadioGroupItem name={"queryType"} value={"Support Request"} checked={false} displayName={"Support Request"} register={register} errors={errors} />
          </FieldSet>
          <RadioGroupErrors errors={errors} name={"queryType"} />
        </div>

        <div>
          <Label htmlFor={"message"} required={true} displayName={"Message"} />
          <TextArea name={"message"} register={register} errors={errors} />
        </div>

        <div className={"relative"}>
          <Input name={"consent"} type={"checkbox"} register={register} value={"acknowledged"} variant={"checkbox"} errors={errors} />
          <Label htmlFor={"consent"} required={true} displayName={"I consent to being contacted by the team "} variant={"checkbox"}></Label>
        </div>

        <div>
          <button className={"mx-auto h-[59px] w-full rounded-lg bg-green-600 py-3 text-[18px] font-bold leading-[150%] text-white"}>Submit</button>
        </div>
      </form>
    </div>
  );
}
