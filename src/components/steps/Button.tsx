const Button = ({ text }: { text: string }) => {
  return (
    <button className="w-full py-[12px] px-[24px] bg-[#0A5047] text-white rounded-[12px]">
      {text}
    </button>
  );
};

export default Button;
