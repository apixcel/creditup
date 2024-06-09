"use client";

import { useState } from "react";
import StepBody from "../shared/StepBody";
import { useAppDispatch } from "@/redux/hook";
import { setCustomerDetailTitle } from "@/redux/features/customer-detail/customerDetailSlice";

const StepTwo = () => {
  const [currentItem, setCurrentItem] = useState<string>("");
  const dispatch = useAppDispatch();
  const titles = [
    {
      value: "Mr",
    },
    {
      value: "Ms",
    },
    {
      value: "Mrs",
    },
    {
      value: "Dr",
    },
    {
      value: "Miss",
    },
    {
      value: "Other",
    },
  ];

  return (
    <>
      <StepBody title="What describes you best?">
        <div className="flex flex-col gap-6">
          {titles.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentItem(item.value);
                dispatch(setCustomerDetailTitle({ title: item?.value }));
              }}
              className={`outline hover:outline-slate-800 border-2 hover:border-white w-full py-[12px] px-[24px] bg-[#0A5047] text-white rounded-[12px] ${
                item.value === currentItem
                  ? "outline outline-slate-800 border-2 border-white"
                  : ""
              }`}
            >
              {item.value}
            </button>
          ))}
        </div>
      </StepBody>
    </>
  );
};

export default StepTwo;
