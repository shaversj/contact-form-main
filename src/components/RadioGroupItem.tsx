type RadioGroupItemProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange?: () => void;
  displayName: string;
  register: any;
  errors?: any;
};

export default function RadioGroupItem({ name, value, checked, onChange, displayName, register, errors }: RadioGroupItemProps) {
  return (
    <div className={"flex h-[51px] grow items-center rounded-lg border border-amber-950 pl-[26.25px]"}>
      <input
        id={name}
        name={name}
        value={value}
        type={"radio"}
        checked={checked}
        onChange={onChange}
        {...register(name)}
        errors={errors}
        className={"rounded border border-green-600 text-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"}
      />
      <label htmlFor={name} className={"pl-3 text-[1.125rem] leading-[150%] text-grey-900"}>
        {displayName}
      </label>
    </div>
  );
}
