import { IconWarning } from "@/icons/essentials";

const RedNote = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center text-center items-center gap-1 bg-[#E7D9DB] my-[40px] py-[12px] px-[24px] rounded-[12px] text-[#BA6C68] text-[16px] font-medium leading-[26px] ">
      {text}
    </div>
  );
};

export default RedNote;
