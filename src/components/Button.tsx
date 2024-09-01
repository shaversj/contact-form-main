type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <button className={"mx-auto h-[3.688rem] w-full rounded-lg bg-green-600 py-3 text-[1.125rem] font-bold leading-[150%] text-white"}>{children}</button>;
}
