import { useState } from "react";

type DataType = {
  onClick: Function;
};

const RememberMe: React.FC<DataType> = ({ onClick }) => {
  const boxShadow = {
    boxShadow:
      "0px 2px 4px 0px rgba(0, 0, 0, 0.20), 0px -1px 1px 0px rgba(0, 0, 0, 0.10) inset, 0px 2px 2px 0px #FFF inset",
  };

  // *** toggle state-----
  const [isOn, setIsOn] = useState<boolean>(true);

  const handleToggle = () => {
    setIsOn(!isOn);
    return onClick();
  };

  return (
    <div className="flex justify-start items-center gap-[10px]">
      <div
        className={`w-[36px] h-[18px] ${
          isOn ? "bg-slate-950" : "bg-[#858585]"
        } flex items-center rounded-full relative p-[3px]  cursor-pointer`}
        onClick={handleToggle}
      >
        <span
          className={`h-[13px] w-[13px] rounded-full bg-white  absolute ${
            isOn ? "right-[3.5px]" : "left-[3.5px]"
          } center duration-[0.3s]`}
          style={boxShadow}
        />
      </div>
      <p className="text-[16px] text-[#071133] leading-[28.28px]">
        Remember me
      </p>
    </div>
  );
};

export default RememberMe;
