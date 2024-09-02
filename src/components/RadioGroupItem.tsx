import Label from "@/components/Label";
import Input from "@/components/Input";

type RadioGroupItemProps = {
  name: string;
  value: string;
  displayName: string;
  register: any;
  errors?: any;
};

export default function RadioGroupItem({ name, value, displayName, register, errors }: RadioGroupItemProps) {
  return (
    <div className={"flex h-[3.188rem] grow items-center rounded-lg border border-grey-500 pl-[1.641rem] hover:border-green-600 [&:has(input:checked)]:bg-green-200"}>
      <Input name={name} type={"radio"} register={register} value={value} variant={"radio"} errors={errors} />
      <Label htmlFor={name} displayName={displayName} variant={"radio"} />
    </div>
  );
}
