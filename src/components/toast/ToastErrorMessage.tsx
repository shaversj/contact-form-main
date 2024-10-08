import SuccessCheckSVG from "@/components/toast/SuccessCheckSVG";

export default function ToastErrorMessage() {
  return (
    <div>
      <div className={"flex items-center gap-x-2"}>
        <SuccessCheckSVG />
        <span className={"inline-block text-[1.125rem] font-bold leading-[150%] text-white"}>Message Sent!</span>
      </div>
      <span className={"inline-block pt-2 leading-[150%] text-green-200"}>Thanks for completing the form. We&apos;ll be in touch soon!</span>
    </div>
  );
}
