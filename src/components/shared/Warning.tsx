import { IconWarning } from "@/icons/essentials";

const Warning = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div
      className={`flex justify-center items-center gap-1 bg-[#C6D4E0] py-[12px] px-[24px] rounded-[12px] text-[#275894] text-[16px] font-medium leading-[26px] mb-[32px] ${
        className || ""
      }`}
    >
      <IconWarning /> {text}
    </div>
  );
};

export default Warning;
