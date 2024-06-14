import { ReactNode } from "react";

const Button = ({
  text,
  className,
  type,
  disabled,
}: {
  text: string | ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${
        className || ""
      }`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
        {text}
      </span>
    </button>
  );
};

export default Button;
