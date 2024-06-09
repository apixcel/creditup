const StepBody = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="bg-white text-black rounded-[24px] p-5 lg:p-[50px] max-w-[816px] lg:mx-auto m-4">
      <h3 className="text-center text-[24px] font-semibold leading-[30px] mb-10">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default StepBody;
