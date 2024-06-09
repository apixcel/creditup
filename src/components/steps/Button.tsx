const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      className={`w-full py-[12px] px-[24px] bg-[#0A5047] text-white rounded-[12px] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
