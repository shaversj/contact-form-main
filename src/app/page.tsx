"use client";

import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, FormValues } from "@/types/types";
import Label from "@/components/Label";
import Input from "@/components/Input";
import RadioGroupContainer from "@/components/RadioGroupContainer";
import RadioGroupItem from "@/components/RadioGroupItem";
import FormErrorMessages from "@/components/FormErrorMessages";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import ToastErrorMessage from "@/components/ToastErrorMessage";
import toast from "react-hot-toast";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const notify = () =>
    toast(<ToastErrorMessage />, {
      style: {
        width: "auto",
        maxWidth: 500,
        backgroundColor: "hsl(187, 24%, 22%)",
      },
    });

  const onSubmit: SubmitHandler<FormValues> = (data, e: any) => notify();
  const onError = (errors: FieldErrors<FormValues>, e: any) => console.log("FORM ERRORS: ", errors, e);

  return (
    <div className="rounded-lg bg-white p-10 font-karla lg:h-[800px] lg:w-[736px]">
      <h1 className={"text-[2rem] font-bold leading-[100%] tracking-[0.063rem] text-grey-900"}>Contact Us</h1>
      <form className={"space-y-6 pt-8"} onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={"grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4 md:gap-y-0"}>
          <div>
            <Label htmlFor={"firstName"} displayName={"First Name"} />
            <Input name={"firstName"} type={"text"} register={register} errors={errors} variant={"text"} />
            <FormErrorMessages errors={errors} name={"firstName"} />
          </div>
          <div>
            <Label htmlFor={"lastName"} displayName={"Last Name"} />
            <Input name={"lastName"} type={"text"} register={register} errors={errors} variant={"text"} />
            <FormErrorMessages errors={errors} name={"lastName"} />
          </div>
        </div>

        <div>
          <Label htmlFor={"email"} displayName={"Email"} />
          <Input name={"email"} type={"email"} register={register} errors={errors} variant={"text"} />
          <FormErrorMessages errors={errors} name={"email"} />
        </div>

        <div>
          <RadioGroupContainer legend={"Query Type"} name={"queryType"}>
            <RadioGroupItem name={"queryType"} value={"General Enquiry"} displayName={"General Enquiry"} register={register} errors={errors} />
            <RadioGroupItem name={"queryType"} value={"Support Request"} displayName={"Support Request"} register={register} errors={errors} />
          </RadioGroupContainer>
          <FormErrorMessages errors={errors} name={"queryType"} />
        </div>

        <div>
          <Label htmlFor={"message"} displayName={"Message"} />
          <TextArea name={"message"} register={register} errors={errors} />
          <FormErrorMessages errors={errors} name={"message"} />
        </div>

        <div>
          <Input name={"consent"} type={"checkbox"} register={register} value={"acknowledged"} variant={"checkbox"} errors={errors} />
          <Label htmlFor={"consent"} displayName={"I consent to being contacted by the team "} variant={"checkbox"}></Label>
          <FormErrorMessages errors={errors} name={"consent"} />
        </div>

        <div className={"pt-4"}>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
}
