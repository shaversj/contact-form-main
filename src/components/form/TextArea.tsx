type TextAreaProps = {
  name: string;
  register: any;
  errors?: any;
  placeholder?: string;
};

export default function TextArea({ name, register, errors }: TextAreaProps) {
  return (
    <textarea
      {...register(name)}
      aria-invalid={(errors as Record<string, any>)[name]?.message ? "true" : "false"}
      className={"text-grey-600 aria mt-[.5rem] w-full rounded-lg border border-grey-500 px-6 py-3 hover:border-green-600 focus:outline-none aria-[invalid=true]:border-red"}
    ></textarea>
  );
}
