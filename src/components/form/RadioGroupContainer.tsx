import React from "react";

export default function RadioGroupContainer({ children, legend, name }: { children: React.ReactNode; legend: string; name: string }) {
  return (
    <fieldset name={name} className={"flex flex-col gap-x-3 gap-y-4 md:flex-row md:gap-y-0"}>
      <legend className={"pb-4 text-[1.125rem] leading-[150%] text-grey-900"}>
        {legend} <span className={"text-green-600"}>*</span>
      </legend>
      {children}
    </fieldset>
  );
}
