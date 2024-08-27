"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/types/types";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  return (
    <main className="">
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <label htmlFor="firstName">First Name</label>
        <input {...register("firstName")} />
        {errors.firstName?.message && <p className={"text-black"}>{errors.firstName.message.toString()}</p>}
        <label htmlFor="lastName">Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName?.message && <p className={"text-black"}>{errors.lastName?.message.toString()}</p>}
        <label htmlFor="email">Email</label>
        <input {...register("email")} />
        {errors.email?.message && <p className={"text-black"}>{errors.email?.message.toString()}</p>}
        <button>Submit</button>
      </form>
    </main>
  );
}
