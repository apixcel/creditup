import SelectedIcon from "@/icons/SelectedIcon";
import SquareBox from "@/icons/SquareBox";
import { useEffect, useState } from "react";

const CheckBox = ({
  onChange,
}: {
  onChange: (value: "customer" | "agent") => void;
}) => {
  const [selected, setSelected] = useState<"customer" | "agent">("customer");
  useEffect(() => {
    if (onChange) {
      onChange(selected);
    }
  }, [selected, onChange]);
  return (
    <div className="w-full flex justify-center items-center gap-[24px] mt-[40px] mb-[22px]">
      <div
        className="flex justify-center items-center gap-[10px] cursor-pointer"
        onClick={() => setSelected("customer")}
      >
        {selected == "customer" ? <SelectedIcon /> : <SquareBox />}
        <p className="text-[16px] text-[#071133] leading-[28.8px]">
          As a customer
        </p>
      </div>
      <div
        className="flex justify-center items-center gap-[10px] cursor-pointer"
        onClick={() => setSelected("agent")}
      >
        {selected == "agent" ? <SelectedIcon /> : <SquareBox />}
        <p className="text-[16px] text-[#071133] leading-[28.8px]">
          As a agent
        </p>
      </div>
    </div>
  );
};

export default CheckBox;
