export default function FormErrorMessages({ errors, name }: { errors: Record<string, any>; name: string }) {
  return (errors as Record<string, any>)[name]?.message && <p className={"pt-[.5rem] leading-[150%] text-red"}>{(errors as Record<string, any>)[name].message.toString()}</p>;
}
