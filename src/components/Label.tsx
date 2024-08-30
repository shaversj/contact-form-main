import React from "react";

type Variant = "text" | "radio" | "checkbox" | "textarea";

const VARIANTS: Record<Variant, string> = {
  text: "block text-[1.125rem] leading-[150%] text-grey-900",
  radio: "pl-3 text-[1.125rem] leading-[150%] text-grey-900",
  checkbox: "text-grey-900 pl-4",
  textarea: "block text-[1.125rem] leading-[150%] text-grey-900",
};

type LabelProps = {
  htmlFor: string;
  required: boolean;
  displayName?: string;
  variant?: Variant;
};

export default function Label({ htmlFor, required, displayName, variant = "text" }: LabelProps) {
  return (
    <label className={VARIANTS[variant]} htmlFor={htmlFor}>
      <span className={""}>{displayName}</span>
      {required && <span className={"text-green-600"}> *</span>}
    </label>
  );
}
