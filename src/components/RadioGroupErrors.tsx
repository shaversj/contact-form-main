export default function RadioGroupErrors({ errors, name }: { errors: Record<string, any>; name: string }) {
  return (
    (errors as Record<string, any>)[name]?.message && (
      <p className={"inline-flex pt-[.5rem] leading-[150%] text-red"}>{(errors as Record<string, any>)["message"].message.toString()}</p>
    )
  );
}
